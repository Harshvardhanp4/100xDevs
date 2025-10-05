import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import client from "@/db"; 

export async function POST(req: NextRequest) {
    //body
    const body = await req.json();
   try{
     await client.user.create({
        data:{
            email: body.email,
            password: body.password

        }
    });
    return NextResponse.json({
        body
    })
   }catch(e){
    return NextResponse.json({
        msg: "Error while signing up!"

    },{
        status:411
    })
   }
    // console.log(body);
    // //header
    // console.log(req.headers.get("authorization"))
    // //query params
    // console.log(req.nextUrl.searchParams.get("name"))
    return NextResponse.json({
        body
    })
}