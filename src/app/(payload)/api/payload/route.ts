import payload from 'payload';
import { NextRequest, NextResponse } from 'next/server';

export async function handler (req: NextRequest) {
    return payload.handler({
        req,
        res: NextResponse,
    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
