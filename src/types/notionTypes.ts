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

export interface RichText {
    type: string;
    text: {
        content: string;
        link: string | null;
    };
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    plain_text: string;
    href: string | null;
}

export interface Block {
    object: string;
    id: string;
    type?: string;
    [key: string]: any; // Flexible index signature for nested properties
}

export interface Blog {
    title: string;
    description: string;
    imageUrl: string;
    [key: string]: any;
}
export interface BlogContent {
    title?: string;
    [key: string]: any;
}

export interface SectionProps {
    content: Block[];
    blogPosts?: Blog[];
}
