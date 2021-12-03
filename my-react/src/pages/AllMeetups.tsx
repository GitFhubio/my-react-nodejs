import React from "react";
import { MeetupList } from "../components/meetups/MeetupList";
const DUMMY=[{
    id:1,
    title:'elleh',
    image:'https://via.placeholder.com/40',
    address:'addresselleh',
    description:'descriptionelleh'
},{
    id:2,
    title:'elleh',
    image:'https://via.placeholder.com/40',
    address:'addresselleh',
    description:'descriptionelleh'
},{
    id:3,
    title:'elleh',
    image:'https://via.placeholder.com/40',
    address:'addresselleh',
    description:'descriptionelleh'
}]
export const AllMeetupsPage:React.FC=()=>{
    return (
    <div>
      all meetups page
      <MeetupList meetups={DUMMY}/>
    </div>
    )
}