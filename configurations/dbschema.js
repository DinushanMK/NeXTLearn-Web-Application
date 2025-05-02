import { pgTable, serial, varchar, boolean, json, text, integer } from "drizzle-orm/pg-core";

export const User_Table=pgTable('users',{
    id:serial().primaryKey(),
    name:varchar().notNull(),
    email:varchar().notNull(),
    ismember:boolean().default(false),
    customerId:varchar()
})

export const Study_Material_Table=pgTable('studyMaterial',{
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    courseType:varchar().notNull(),
    topic:varchar().notNull(),
    difficultyLevel:varchar().default('Easy'),
    courseLayout:json(),
    createdBy:varchar().notNull(),
    status:varchar().default('Generating')
})

export const Chapter_Notes_Table=pgTable('chapterNotes',{
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    chapterId:integer().notNull(),
    notes:text()
})

export const Study_Type_Content_Table=pgTable('studyTypeContent',{
    id:serial().primaryKey(),
    courseId:varchar().notNull(),
    content:json(),
    type:varchar().notNull(),
    status:varchar().default('Generating')
})

export const Payment_Record_Table=pgTable('paymentRecord',{
    id:serial().primaryKey(),
    customerId:varchar(),
    sessionId:varchar(),
    
})