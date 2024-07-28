
# Portfolio Website

Welcome to my **Portfolio Website** repository! This project is a personal portfolio built using [Next.js](https://nextjs.org/). It showcases my work and projects, and it's deployed using GitHub Actions. The repository is also configured to send notifications to Slack upon successful deployment and pushes.

## Features

- **Modern and Responsive Design**: Showcases my projects, skills, and contact information.
- **Next.js**: Utilizes Next.js for server-side rendering and static site generation.
- **Automated Deployment**: Uses GitHub Actions for continuous integration and deployment.
- **Slack Notifications**: Receives notifications in Slack for successful deployments and commits.

## Technologies Used

- **Next.js**: Framework for building React applications with server-side rendering.
- **React**: JavaScript library for building user interfaces.
- **CSS Modules / Styled-Components**: For styling components.
- **GitHub Actions**: For CI/CD pipeline and deployment automation.
- **Slack API**: For sending notifications to Slack.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) (includes npm).
- **npm**: Comes with Node.js or install [npm separately](https://www.npmjs.com/get-npm).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kaushaln1/website.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd website
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser to view the website.

## Deployment

The website is automatically deployed using GitHub Actions. Here’s how it works:

1. **Push Changes**: Committing and pushing changes to the repository triggers the GitHub Actions workflow.

2. **GitHub Actions Workflow**: The `.github/workflows/nextjs.yml` file defines the CI/CD pipeline for building and deploying the site.

3. **Slack Notifications**: Notifications are sent to a Slack channel upon successful deployment and commits. Ensure that the Slack bot token is correctly configured in the repository secrets.

### Slack Notifications Setup

To set up Slack notifications:

1. **Create a Slack App**:
    - Visit [Slack API](https://api.slack.com/apps) and create a new app.
    - Under "OAuth & Permissions", add the `chat:write` and `chat:write:bot` scopes to your bot token.
    - Install the app to your workspace and obtain a new OAuth token.

2. **Add Token to GitHub Secrets**:
    - Go to your GitHub repository settings.
    - Navigate to "Secrets" and add a new secret named `SLACK_BOT_USER_OAUTH_ACCESS_TOKEN` with the Slack bot token.

## Contributing

We welcome contributions! To contribute:

1. **Fork the Repository**.
2. **Create a New Branch** for your feature or bug fix.
3. **Commit Your Changes**.
4. **Push the Branch** to your forked repository.
5. **Create a Pull Request**.

Please follow the [contributing guidelines](CONTRIBUTING.md) if available.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
