"use client"
import { useUser } from '@clerk/nextjs'
import { database } from '@/configurations/database';
import React, { useEffect } from 'react'
import { eq } from 'drizzle-orm';
import { User_Table} from '@/configurations/dbschema';
import { User } from 'lucide-react';
import axios from 'axios';


function Provider({children}) {

    const {user} = useUser();

    useEffect(() => {
      user && CheckIsNewUser();
  },[user])

  const CheckIsNewUser = async () => {
    // // Check Is User Already Exist
    // const result = await database.select().from(User_Table)
    //     .where(eq(User_Table.email, user?.primaryEmailAddress?.emailAddress))

    // if (result?.length == 0) {
    //     //If Not, Then add to DB
    //     const userResp = await database.insert(User_Table).values({
    //         name: user?.fullName,
    //         email: user?.primaryEmailAddress?.emailAddress
    //     }).returning({ id: User_Table.id })
    // }

      const resp=await axios.post('/api/create-user',{user:user});
      console.log(resp.data);
       

        
    }

  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
