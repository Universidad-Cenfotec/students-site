export interface BlogImage {
    id: string;
    filename: string;
    alt?: string;
    url: string;
}

export interface BlogContent {
    type: string;
    children: { text: string; }[];
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
    content: any;
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
