import Comments from "@/app/models/commentsSchema";
import { NextResponse } from "next/server";

export async function POST(request){
    let body = await request.json()
    let cmnt = await Comments.create(body)
    console.log(cmnt," added to db sucesfully")

    return NextResponse.json(cmnt)
}