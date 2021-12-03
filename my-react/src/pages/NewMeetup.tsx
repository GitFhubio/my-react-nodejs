import React from "react";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export const NewMeetupPage:React.FC=()=>{
    const history=useNavigate();
    const addMeetupHandler = (meetupData:any)=>{
axios.post('http://localhost:3000/newmeetup',meetupData)
.then(()=>{history('/', { replace: true })})
    }
    return (
    <section>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
    )
}