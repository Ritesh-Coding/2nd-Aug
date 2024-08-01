import React from 'react'
import useAxios from '../../../hooks/useAxios'
import { useState,useEffect } from 'react'
const formatTime = (timeString) => {
    if (!timeString || timeString === "-") return "-";
    return timeString.substring(0, 5);
  };
const DashboardAttendance = () => {
    const [attendanceData,setAttendanceData] = useState([])
    const axiosInstance = useAxios()
  useEffect(()=>{
        axiosInstance.get("dashboardAttendance").then((res)=>{
            setAttendanceData(res.data)
        })
  },[])

  return (
     <div>
        <h4>Record Your Attendance</h4>  
        <div className="card" style={{width:`280px`}}>
            {attendanceData.length>0 ?
            <>
             <div style={{display:`flex`,justifyContent:`space-around`}}>
                <h4>Attendance</h4>
                <h4>Late</h4>
            </div>
            <div style={{display:`flex`,justifyContent:`space-around`}}>
                <h5>{attendanceData[0].total_present_days}</h5>
                <h5>{attendanceData[0].total_late_days}</h5>
            </div>
            <div style={{display:`flex`,justifyContent:`space-around`}}>
                <h4>Half Days</h4>
                <h4>Worked Hours</h4>
            </div>
            <div style={{display:`flex`,justifyContent:`space-around`}}>
                <h5>{attendanceData[0].total_half_days}</h5>
                <h5>{formatTime(attendanceData[0].net_working_hours)}</h5>
            </div>
            <div style={{display:`flex`,justifyContent:`space-around`}}>
                <h4>Total Office Hours</h4>
               
            </div>
            <div style={{display:`flex`,justifyContent:`space-around`}}>
                <h5>{attendanceData[0].total_office_hours}</h5>
                
            </div>
            </>
              
                   
         
            : <h5>Attendance Record Not Found</h5>
            }
        </div>
    </div>
  )
}

export default DashboardAttendance