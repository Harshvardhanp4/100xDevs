import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();
    const user = await prisma.user.create({
        data: {

            username: body.username,
            password: body.password
        }
    })
    console.log(user);
    return Response.json({ message: "User Created!", user })
}

export async function GET() {
    const user = await prisma.user.findFirst({});
    if (!user) return Response.json({ name: "na", email: "na" });
    return Response.json({ name: user.username, email: user.username });
}   
