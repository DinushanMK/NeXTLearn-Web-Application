"use client"
import Dashboardheader from '@/app/dashboard/_components/Dashboardheader';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseIntroCard from './_components/CourseIntroCard';
import StudyMaterialSection from './_components/StudyMaterialSection';
import ChapterList from './_components/ChapterList';

function Course() {
    const {courseId}=useParams();
    const [course,setCourse]=useState();
    useEffect(()=>{
        GetCourse();
    },[])

    const GetCourse=async()=>{
        const result=await axios.get('/api/courses?courseId='+courseId);
        console.log(result);
        setCourse(result.data.result);
    }

  return (
    <div>
      
      <div className=''>
      {/*Course Introduction*/}
        <CourseIntroCard course={course}/>
      {/*Options for view Study material*/}
        <StudyMaterialSection courseId={courseId} course={course}/>
      {/* List of Chapters */}
        <ChapterList course={course}/>
      </div>
    </div>
  )
}

export default Course
