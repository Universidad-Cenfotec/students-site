import { ClubsResponse } from "@/types/club";
import ClientLayout from "@/layout/ClientLayout";
import ClubSection from '@/components/Community/sections/ClubsSection';

async function fetchClubs (): Promise<ClubsResponse> {
    const res = await fetch(process.env.NEXT_PUBLIC_PAYLOAD_URL + "api/clubs", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch clubs");
    return res.json();
}

export default async function ClubsPage () {
    const clubsResponse = await fetchClubs();

    return (
        <ClientLayout>
            <ClubSection clubs={ clubsResponse.docs } />
        </ClientLayout>
    );
}
