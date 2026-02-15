# Economic Inequality Early Warning System

## Use Case & Value Proposition

### Problem Statement
Economic inequality is one of the defining challenges of our time. Policymakers, international organizations (IMF, World Bank, UN), and impact-focused institutions lack **actionable, real-time signals** that predict where inequality is likely to worsen before it becomes entrenched. Traditional approaches rely on lagging indicators (e.g., Gini coefficients published years later), making proactive intervention difficult.

### Solution: Early Warning System
An **Economic Inequality Early Warning System** that:
- **Ingests** high-frequency economic, labor, and demographic data via streaming (Kafka)
- **Forecasts** inequality risk at regional/country level using ML and causal inference
- **Explains** drivers and scenarios using GenAI for policy narratives
- **Surfaces** alerts and dashboards for analysts and decision-makers

### Why This Is Valuable (Current Scenario)

| Dimension | Value |
|-----------|--------|
| **Social impact** | Directly addresses wealth/income inequality—a top priority for governments and NGOs |
| **Tech relevance** | Showcases Kafka streaming, ML forecasting, causal inference, and GenAI in one system |
| **Macro expertise** | Demonstrates economic modeling + modern ML—rare and highly valued |
| **Policy relevance** | Outputs usable by Fed, Treasury, BLS, think tanks, IMF, World Bank |
| **Differentiator** | Few portfolios include “AI for economic inequality”; strong narrative in interviews |
| **Career doors** | Economic policy think tanks, international orgs, government analytics, impact fintech, ESG-focused institutions |

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        DATA INGESTION (Kafka-Centric)                             │
│  Census/Labor APIs → Kafka Connect → Topics: labor, demographics, prices, macro   │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                     FEATURE ENGINEERING & STREAM PROCESSING                       │
│  Kafka Streams / Flink: aggregations, rolling stats, lead/lag features          │
│  Offline: historical feature store (e.g., Feast or Parquet) for training          │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                    ┌───────────────────┴───────────────────┐
                    ▼                                       ▼
┌───────────────────────────────┐         ┌───────────────────────────────────────┐
│   ML FORECASTING PIPELINE      │         │   CAUSAL INFERENCE MODULE              │
│   • Inequality risk score      │         │   • Driver attribution                 │
│   • Time-series (Prophet/      │         │   • Policy counterfactuals             │
│     Neural/ARIMA)              │         │   • DoWhy / EconML-style               │
└───────────────────────────────┘         └───────────────────────────────────────┘
                    │                                       │
                    └───────────────────┬───────────────────┘
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         GenAI NARRATIVE LAYER                                     │
│   Input: forecasts + causal drivers + user context                                │
│   Output: policy briefs, scenario summaries, plain-language explanations          │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    SERVING & MLOps                                                 │
│   API (FastAPI): risk scores, forecasts, narratives                              │
│   Dashboards (Grafana / custom): alerts, trends                                  │
│   Model registry & retraining pipeline (MLflow, scheduled jobs)                   │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Kafka Topic Design

### Topics (Suggested)

| Topic | Key | Value (Schema) | Retention | Use |
|-------|-----|----------------|-----------|-----|
| `inequality.raw.labor` | `region_id\|date` | employment, wages, hours, sector | 90d | Labor market inputs |
| `inequality.raw.demographics` | `region_id\|date` | population, age, education, migration | 1y | Demographic drivers |
| `inequality.raw.prices` | `region_id\|date` | CPI, asset prices, housing | 90d | Cost of living |
| `inequality.raw.macro` | `country\|date` | GDP, interest rates, fiscal | 1y | Macro context |
| `inequality.features` | `region_id\|date` | computed features (see §2) | 1y | Model input |
| `inequality.forecasts` | `region_id\|horizon` | risk score, bounds, drivers | 180d | Predictions |
| `inequality.alerts` | `region_id\|timestamp` | alert type, severity, payload | 1y | Notifications |

### Schema Conventions
- Use **Avro** or **JSON Schema** in Schema Registry for evolution and validation.
- Keys: composite `region_id|date` or `country|date` for partitioning and joins.
- Version schemas (e.g. `inequality.raw.labor.v1`) for breaking changes.

### Connectors
- **Source**: Kafka Connect HTTP/REST or custom producers for BLS, Census, FRED, or similar APIs (polling → produce to `inequality.raw.*`).
- **Sink**: Kafka Connect to S3/Parquet or to a feature store for offline training.

---

## 2. Feature Engineering Pipeline

### Data Sources (Examples)
- **US**: BLS (employment, wages), Census (income, poverty), FRED (macro).
- **International**: World Bank API, OECD, national statistics offices (if building multi-country).

### Feature Groups

| Group | Examples | Cadence |
|-------|----------|---------|
| Labor | Unemployment rate, wage growth by quintile, part-time share, sector mix | Monthly |
| Demographics | Dependency ratio, education attainment, migration flows | Quarterly / Annual |
| Prices | CPI, housing cost index, real wage (wage/CPI) | Monthly |
| Macro | GDP growth, real interest rate, fiscal balance | Quarterly |
| Inequality (targets) | Gini (lagged), P90/P10 ratio, poverty rate | Annual (lagging) |

### Derived / Rolling Features
- YoY and MoM growth rates for wages, employment, CPI.
- Rolling means/std (e.g. 3m, 12m) for volatility and trend.
- Lead/lag features (e.g. wage lead vs. inequality lag) for causal and forecasting use.
- Regional lags (neighboring regions) if spatial modeling is used.

### Implementation Notes
- **Streaming**: Kafka Streams or ksqlDB for rolling aggregations from `inequality.raw.*` → `inequality.features`.
- **Offline**: Spark or Pandas jobs reading from data lake (S3) for historical feature backfill and training datasets.
- **Consistency**: Same feature definitions in stream and batch; version feature sets (e.g. `feature_set_v1`).

---

## 3. ML Model Architecture

### 3.1 Inequality Risk Score (Classification / Regression)
- **Target**: Binary or ordinal “inequality risk” (e.g. high/medium/low) or continuous “expected change in Gini” over 1–3 year horizon.
- **Features**: All engineered features from §2; optionally lagged Gini or P90/P10 when available.
- **Models**: Gradient boosting (XGBoost/LightGBM) or tabular neural network; optional stacking with a time-series model.
- **Training**: Offline on historical data; labels from official inequality stats (lagged). Train/validation split by time; no future leakage.

### 3.2 Time-Series Forecasting
- **Target**: Inequality proxy (e.g. wage dispersion, poverty rate) or risk score itself.
- **Models**: Prophet, ARIMA, or neural (e.g. TFT, N-BEATS) for multi-horizon forecasts.
- **Input**: Same feature set + lags of target; optionally exogenous regressors from Kafka.

### 3.3 Causal Inference
- **Goal**: Attribute change in inequality (or risk) to drivers (e.g. wage policy, unemployment, inflation).
- **Methods**: DoWhy / EconML (e.g. Double ML, causal forests) for treatment effect of “policy” or “shock” variables.
- **Output**: Driver importance and confidence intervals; feed into GenAI for narrative.

### 3.4 Model Outputs to Downstream
- Risk score and confidence interval.
- Point forecasts and prediction intervals.
- Causal driver rankings and short descriptions.
- All written to `inequality.forecasts` and/or API/dashboards.

---

## 4. GenAI Integration Patterns

### Use Cases
- **Policy brief**: One-pager from forecast + causal drivers + user-selected region/horizon.
- **Scenario summary**: “If unemployment rises 2%, inequality risk increases by X%; drivers: …”
- **Plain-language explanation**: “Inequality risk is high in region Y mainly because of wage stagnation and rising housing costs.”

### Pattern
- **Input**: Structured JSON (region, horizon, risk score, top drivers, confidence).
- **Prompt**: Template + few-shot examples; instruct model to be concise, cite numbers, avoid hallucination.
- **Output**: Short narrative; optionally stored in DB or passed to API/dashboard.
- **Safety**: No raw PII in prompts; audit log for compliance.

### Tech Options
- OpenAI/Anthropic API or self-hosted LLM; optional RAG over internal policy docs for style consistency.

---

## 5. MLOps & Deployment Strategy

### Training
- **Orchestration**: Scheduled (e.g. monthly) or event-triggered (e.g. new data in S3) training jobs.
- **Experiment tracking**: MLflow (params, metrics, artifacts).
- **Model registry**: MLflow or custom; promote to “Production” after validation (e.g. holdout accuracy, backtest).

### Serving
- **API**: FastAPI service that loads production model(s) and optional GenAI client; inputs: region, horizon; outputs: risk, forecasts, drivers, optional narrative.
- **Latency**: Batch precompute for dashboards; on-demand for API (target <500ms for non-GenAI; GenAI async or cached).
- **Kafka**: Producer to `inequality.forecasts` and `inequality.alerts` from serving layer for downstream consumers.

### Monitoring
- Data drift on `inequality.features` (e.g. Evidently); model performance over time (accuracy, calibration).
- Alerts on pipeline failures, schema violations, and degradation metrics.

### Environments
- Dev/Staging: smaller data and models; Prod: full data, versioned schemas and models.

---

## 6. Implementation Plan (Step-by-Step)

### Phase 1: Data & Ingestion (Weeks 1–3)
1. **Set up Kafka cluster** (local or managed): Create topics with partitions and retention; Schema Registry.
2. **Define Avro/JSON schemas** for all `inequality.raw.*` and `inequality.features` topics.
3. **Implement producers** for at least one source (e.g. BLS or FRED): scheduled job → fetch → produce to Kafka.
4. **Optional**: Kafka Connect to S3/Parquet for raw and features for offline use.
5. **Checklist**: Events flowing; schema validation; at least 6–12 months of backfilled data (or synthetic) for next phase.

### Phase 2: Feature Pipeline (Weeks 4–5)
1. **Stream processing**: Kafka Streams (or Flink) app: read `inequality.raw.*`, compute rolling stats and derived features, write to `inequality.features`.
2. **Offline pipeline**: Script (Spark/Pandas) to build same features from S3/lake; output training-ready tables (train/val/test by time).
3. **Document** feature list and definitions; version the feature set.
4. **Checklist**: Streaming and batch features match; no future leakage; backfill for 2+ years if possible.

### Phase 3: ML Models (Weeks 6–8)
1. **Inequality risk model**: Train XGBoost/LightGBM (or similar) on historical features and lagged inequality/labels; evaluate with time-based split and metrics (AUC, RMSE).
2. **Time-series**: Train Prophet or neural forecaster for inequality proxy; multi-horizon.
3. **Causal module**: Integrate DoWhy/EconML on same data; output driver importance and store with forecasts.
4. **Log everything in MLflow**; register best runs; document how to reproduce.
5. **Checklist**: Reproducible training script; model registry; causal outputs validated (sanity checks).

### Phase 4: Serving & GenAI (Weeks 9–10)
1. **FastAPI service**: Load production model; endpoint(s) for risk, forecasts, drivers; optional async GenAI narrative.
2. **GenAI**: Prompt templates; integrate API; add narrative endpoint or batch job writing to DB/Kafka.
3. **Produce** forecasts to `inequality.forecasts` and alerts to `inequality.alerts` when thresholds exceeded.
4. **Checklist**: API docs; latency and error handling; GenAI output reviewed for quality/safety.

### Phase 5: MLOps & Observability (Weeks 11–12)
1. **Retraining pipeline**: Scheduled job to pull new data → features → train → evaluate → register → promote if better.
2. **Data/model monitoring**: Drift and performance dashboards; alerting.
3. **Documentation**: Runbooks, architecture diagram, and “Worth in current scenario” summary for portfolio.
4. **Checklist**: One-click (or cron) retrain; monitoring in place; docs up to date.

---

## 7. Sample Datasets & Code Hooks

### Datasets
- **US**: BLS CES/CPS (employment, wages), Census ACS (income), FRED (CPI, GDP). All have APIs or bulk files.
- **Synthetic**: If real data is limited, generate synthetic series (wages, employment, Gini) with realistic correlations for demo.

### Code Hooks (Placeholders)
- `producers/` : BLS/FRED fetchers → Kafka.
- `streams/` : Kafka Streams app for feature computation.
- `features/` : Offline feature scripts and feature set version.
- `models/` : Training scripts (risk model, forecaster, causal); configs for MLflow.
- `api/` : FastAPI app and GenAI client.
- `deploy/` : Docker, K8s, or serverless configs; CI for training and API.

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Data availability / lag | Use proxies (wage dispersion, employment) where Gini is late; document limitations. |
| Causal assumptions | Use robust methods (Double ML); sensitivity analysis; avoid overclaiming. |
| GenAI hallucination | Strict prompts; cite only provided numbers; human review for policy text. |
| Regulatory / ethics | No PII; transparent methodology; align with institutional use policies. |

---

## 9. Summary: Worth in Current Scenario

- **Portfolio**: Replaces “Distributed Training Infrastructure” with a **unique, policy-relevant** project that shows streaming, ML, causal inference, and GenAI.
- **Story**: “Using AI to fight economic inequality” is a strong interview narrative and aligns with impact and macro roles.
- **Technical depth**: Kafka, feature pipelines, forecasting, causal inference, and MLOps in one coherent system.
- **Career alignment**: Economic policy think tanks, IMF/World Bank/UN, government analytics (Fed, Treasury, BLS), impact fintech, ESG-focused institutions.

This document is the single source of truth for implementation; each phase checklist should be completed before moving to the next to avoid subtle gaps (e.g. schema evolution, feature parity between stream and batch, and no future leakage in labels).
