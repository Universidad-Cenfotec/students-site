import { Client } from "@notionhq/client";

// Initialize a client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getSectionContent = async (databaseId: string, filter: any) => {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: filter,
        });
        return response.results;
    } catch (error) {
        console.error("Error fetching section content from Notion:", error);
        throw error;
    }
};

export const getPageContent = async (pageId: string) => {
    try {
        const blocksResponse = await notion.blocks.children.list({
            block_id: pageId,
            page_size: 100  // Adjust page size as necessary
        });
        return blocksResponse.results;
    } catch (error) {
        console.error("Error fetching page content from Notion:", error);
        throw error;
    }
};

export const getAllEntries = async (databaseId: string) => {
    let entries: any[] = [];
    let startCursor = undefined;

    try {
        do {
            const response = await notion.databases.query({
                database_id: databaseId,
                start_cursor: startCursor,
            });
            entries = entries.concat(response.results);
            startCursor = response.next_cursor;
        } while (startCursor);
        return entries;
    } catch (error) {
        console.error("Error fetching all entries from Notion:", error);
        throw error;
    }
};
