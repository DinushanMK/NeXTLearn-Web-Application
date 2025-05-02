"use client"
import { useState } from 'react'
import React from 'react'
import SelectOption from './_components/SelectOption'
import { Button } from '@/components/ui/button';
import TopicInput from './_components/TopicInput';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
function Create() {
  const [step,setStep]=useState(0);
  const [formData,setFormData]=useState([]);
  const { user } = useUser();
  const [loading,setLoading]=useState(false);

  const router=useRouter();

  const handleUserInput=(fieldName,fieldValue)=>{

      setFormData(prev=>({
        ...prev,
        [fieldName]:fieldValue
    }))

    console.log(formData)
  }

  //Used to Save User Input and Generate Course Layout using AI

  const GenerateCourseOutline=async()=>{
    const courseId=uuidv4();
    setLoading(true);
    const result=await axios.post('/api/generate-course-outline',{
      courseId:courseId,
      ...formData,
      createdBy:user?.primaryEmailAddress?.emailAddress
    });
    setLoading(false);
    router.replace('/dashboard')
    //Toast Nitification
    toast("The Content for your course is Generating, Click on Refresh Button")
    console.log(result.data.result.resp);

  }

  return (
    <div className='flex flex-col items-center  p-5 md:px-24 lg:px-36 mt-20 '>
        <h2 className='font-bold text-4xl text-primary'>Learn Smarter, Not Harder with NeXTLearn</h2>
        <p className='text-gray-500 text-lg'>Chose from the given preferences and fill all details to create your personalized material</p>

        <div className='mt-10'>
          {step==0? <SelectOption selectedStudyType={(value)=>handleUserInput('courseType',value)}/>
          :<TopicInput 
          setTopic={(value)=>handleUserInput('topic',value)}
          setDifficultyLevel={(value)=>handleUserInput('difficultyLevel',value)}
          />}
          
        </div>

        <div className='flex justify-between w-full mt-32'>
          {step!=0? <Button variant="outline" onClick={()=>setStep(step-1)}>Previous</Button>:'.'}
          {step==0?<Button onClick={()=>setStep(step+1)}>Next</Button>:
          <Button onClick={GenerateCourseOutline} disabled={loading}>
            {loading?<Loader className='animate-spin'/>:'Generate'}</Button>}
        </div>

    </div>
  )
}

export default Create

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// export default function About() {
//   return (
//     <div className="min-h-screen bg-background">
//       <section className="z-50 pt-10">
//         <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
//           <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//             About <span className="text-primary">Easy Study</span>
//           </h1>
//           <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
//             Your AI Exam Prep Companion: Learn about our mission and how we help students succeed.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//             <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
//               <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
//               <p className="text-muted-foreground text-center">
//                 We're dedicated to making exam preparation more efficient and effective through 
//                 personalized AI-powered learning experiences that adapt to each student's needs.
//               </p>
//             </div>
            
//             <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm">
//               <h2 className="text-2xl font-bold mb-4">How It Works</h2>
//               <p className="text-muted-foreground text-center">
//                 Our platform uses advanced AI to analyze your learning patterns, create custom 
//                 study materials, and provide real-time feedback to optimize your study time.
//               </p>
//             </div>
//           </div>
          
//           <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
//             <Link href="/dashboard" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/30">
//               Go to Dashboard
//               <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//             </Link>
//             <Link href="/contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
//               login
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }