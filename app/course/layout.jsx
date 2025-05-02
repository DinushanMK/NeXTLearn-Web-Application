import React from 'react'
import Dashboardheader from '../dashboard/_components/Dashboardheader'

function CourseViewLayout({children}) {
  return (
    <div >
          <Dashboardheader/>  
      <div className='mx-10 md:36 lg:px-60 mt-10' >
        {children} 
      </div>
    </div>
  )
}

export default CourseViewLayout
