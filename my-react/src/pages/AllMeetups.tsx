import axios from "axios";
import React, { useEffect, useState } from "react";
import { Meetup } from "../components/meetups/MeetupItem";
import { MeetupList } from "../components/meetups/MeetupList";
// const DUMMY=[{
//     id:1,
//     title:'elleh',
//     image:'https://via.placeholder.com/40',
//     address:'addresselleh',
//     description:'descriptionelleh'
// },{
//     id:2,
//     title:'elleh',
//     image:'https://via.placeholder.com/40',
//     address:'addresselleh',
//     description:'descriptionelleh'
// },{
//     id:3,
//     title:'elleh',
//     image:'https://via.placeholder.com/40',
//     address:'addresselleh',
//     description:'descriptionelleh'
// }]
export const AllMeetupsPage:React.FC=()=>{
const [meetups,setMeetups]= useState<Meetup[]>([]);
const [isLoading,setIsLoading]= useState<boolean>(true);
  useEffect (()=>{
    setIsLoading(true);
      axios.get<Meetup[]>('http://localhost:3000/api/meetups')
      .then((res) =>
        {setMeetups(res.data);
          setIsLoading(false)});
          //se voglio farlo vedere c'è sempre il settimeout,magari a 200/300
        },[])
      //vanno messe solo dipendenze esterne che in questo caso non ci sono
     //setMeetups e setIsLoading sono eccezioni, possono essere sottintesi gli state
       if(isLoading)
       return(
           <div className="overlay">
             <img src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-1.jpg" alt="" />
           </div>
       )
    return (
    <div>
        <h1 className="text-center">Here are all your meetups!</h1>
      <MeetupList meetups={meetups}/>
    </div>
    )
}