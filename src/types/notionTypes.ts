// src/types/notionTypes.ts
export interface NotionPage {
    id: string;
    created_time: string;
    last_edited_time: string;
    properties: any; // You should replace 'any' with a more specific type based on your database properties
}

export interface NotionQueryResponse {
    results: NotionPage[];
}
