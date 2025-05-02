import { courseOutlineAIModel } from "@/configurations/AiModel";
import { database } from "@/configurations/database";
import { Study_Material_Table } from "@/configurations/dbschema";
import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";


export async function POST(req) {

    const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();
    
    const PROMPT='Generate a study material for '+topic+' for '+courseType+' and level of difficulty  will be '+difficultyLevel+' with sumery of course, List of Chapters (Max 3) along with summery and Emoji icon for each chapter, Topic list in each chapter, and all result in  JSON format'
    // Generate Course Layout using AI
    const aiResp=await courseOutlineAIModel.sendMessage(PROMPT);
    const aiResult= JSON.parse(aiResp.response.text());

    // Save the result along with User Input
    const databaseResult=await database.insert(Study_Material_Table).values({
        courseId:courseId,
        courseType:courseType,
        createdBy:createdBy,
        topic:topic,
        courseLayout:aiResult
    }).returning({resp:Study_Material_Table})

    //Trigger the Inngest function to generate chapter notes

    inngest.send({
        name:'notes.generate',
        data:{
            course:databaseResult[0].resp
        }
    });
    // console.log(result);
    
    return NextResponse.json({result:databaseResult[0]})
    
}



// export async function POST(req) {

//     const {courseId,topic,courseType,difficultyLevel,createdBy}=await req.json();

//     const PROMPT='Generate a study material for '+topic+' for '+courseType+' and level of difficulty  will be '+difficultyLevel+' with summary of course, List of Chapters (Max 3) along with summary and Emoji for each chapter, Topic list in each chapter in  JSON format'
//     // Generate Course Layout using AI
//     const aiResp=await courseOutlineAIModel.sendMessage(PROMPT);
//     const aiResult= JSON.parse (aiResp.response.text());

//     // Save the result along with User Input
//     const databaseResult=await database.insert(Study_Material_Table).values({
//         courseId:courseId,
//         courseType:courseType,
//         topic:topic,
//         courseLayout:aiResult,
//         createdBy:createdBy
//     }).returning({resp:Study_Material_Table})

//     // //Trigger the Inngest Function to Generate Chapter Notes

//     const result=await inngest.send({
//         name:'notes.generate',
//         data:{
//             course:databaseResult[0].resp
//         }
//     });
//     console.log(result);

//     // console.log(databaseResult);

//     return NextResponse.json({result:databaseResult[0]})
    
// }