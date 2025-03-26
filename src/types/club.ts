export interface ClubMedia {
    id: string;
    filename: string;
    alt?: string;
    url: string;
}

export interface Club {
    id: string;
    clubId: string;
    name: string;
    description: string;
    logo?: ClubMedia;
    banner?: ClubMedia;
    content?: any;
    status: 'active' | 'inactive';
    createdAt: string;
    updatedAt: string;
}

export interface ClubsResponse {
    docs: Club[];
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
