import { database } from "@/configurations/database";
import { Chapter_Notes_Table, Study_Type_Content_Table } from "@/configurations/dbschema";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {

    const {courseId,studyType}=await req.json();
    
    if(studyType=='ALL')
    {
        const notes=await database.select().from(Chapter_Notes_Table)
        .where(eq(Chapter_Notes_Table?.courseId,courseId))

        //Get All other study Types Records
        const contentList=await database.select().from(Study_Type_Content_Table)
        .where(eq(Study_Type_Content_Table?.courseId,courseId))

        const result={
            notes:notes,
            flashcard:contentList?.find(item=>item.type=='Flashcard'),
            quiz:contentList?.find(item=>item.type=='Quiz'),
        }
        return NextResponse.json(result);
    }
    else if(studyType=='notes')
    {
        const notes=await database.select().from(Chapter_Notes_Table)
        .where(eq(Chapter_Notes_Table?.courseId,courseId))

        return NextResponse.json(notes);
    }
    else {
        const result=await database.select().from(Study_Type_Content_Table)
        .where(and( eq(Study_Type_Content_Table?.courseId,courseId),
        eq(Study_Type_Content_Table.type,studyType)))

        return NextResponse.json(result[0]??[]);
    }

}