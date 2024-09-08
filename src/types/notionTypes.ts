export type NotionText = {
    type: string;
    text: {
        content: string;
        link: string | null;
    };
};

export type NotionPage = {
    id: string;
    created_time: string;
    last_edited_time: string;
    title: NotionText[];
    description?: NotionText[];
    // Add more properties based on your Notion setup
};
