// src/services/notionService.ts
import { Client } from '@notionhq/client';
import { NotionPage } from '../types/notionTypes';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getSectionContent = async (databaseId: string, filter: any): Promise<NotionPage[]> => {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: filter
        });
        return response.results as NotionPage[];
    } catch (error) {
        console.error("Error fetching section content from Notion:", error);
        throw error;
    }
};
