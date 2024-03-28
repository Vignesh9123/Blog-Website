import { NextResponse } from "next/server";
import Comments from "@/app/models/commentsSchema";
export async function GET(request,context){
    let postId = context.params.postId
    let cmnts = await Comments.find({postId})
    return NextResponse.json(cmnts)
}