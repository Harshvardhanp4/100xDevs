import { NextRequest } from "next/server";

let postedData: any = null;

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    postedData = body;
    return Response.json({
        message: "You are logged in!"
    })
}

export function GET() {
    return Response.json(postedData);
}
