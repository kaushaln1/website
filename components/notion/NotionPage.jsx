import React from "react";
import Head from "next/head";
import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { NotionRenderer } from "react-notion-x";

interface NotionPageProps {
    recordMap: ExtendedRecordMap;
    rootPageId?: string;
}

const NotionPage: React.FC<NotionPageProps> = ({ recordMap, rootPageId }) => {
    if (!recordMap) {
        return null;
    }

    const title = getPageTitle(recordMap);

    return (
        <>
            <Head>
                <meta name="description" content="React Notion X Minimal Demo" />
                <title>{title}</title>
            </Head>

            <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                darkMode={false}
                rootPageId={rootPageId}
            />
        </>
    );
};

export default NotionPage;
