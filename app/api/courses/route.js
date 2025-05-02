import { database } from "@/configurations/database";
import { Study_Material_Table } from "@/configurations/dbschema";
import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {

    const {createdBy}=await req.json();
 
    const result=await database.select().from(Study_Material_Table)
    .where(eq(Study_Material_Table.createdBy,createdBy))
    .orderBy(desc(Study_Material_Table.id))


    return NextResponse.json({result:result});
}

export async function GET(req) {

    const reqUrl=req.url;
    const {searchParams} = new URL(reqUrl); 
    const courseId=searchParams.get('courseId');

    const course=await database.select().from(Study_Material_Table)
    .where(eq(Study_Material_Table?.courseId,courseId));

    return NextResponse.json({result:course[0]})

}