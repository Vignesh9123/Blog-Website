"use server"
import mongoose from "mongoose";
import Comments from "@/app/models/commentsSchema"
export default async function dbConnect(){
mongoose.connect("mongodb+srv://Vignesh9123:Vignesh%409123@vignesh0cluster.nlrlmap.mongodb.net/?retryWrites=true&w=majority&appName=Vignesh0Cluster",{dbName:"Sample_comm"}).then(async()=>{
    console.log("Connected");
})
.catch(e=>{console.log("Mongoose error",e);})
}