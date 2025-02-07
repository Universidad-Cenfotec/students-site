export interface BlogImage {
    id: string;
    filename: string;
    alt?: string;
    url: string;
}

export interface BlogContent {
    type: string; // Example: "paragraph", "heading", "image", etc.
    children: { text: string; }[]; // Lexical RichText format
}

export interface BlogPost {
    id: string;
    blogId: string;
    title: string;
    description: string;
    image?: {
        url: string;
        alt?: string;
    };
    content: any; // Adjust type if needed
    status: "published" | "draft" | "archived";
    createdAt: string;
    updatedAt: string;
    publishedDate: string;
}

export interface BlogResponse {
    docs: BlogPost[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage?: number | null;
    nextPage?: number | null;
}
