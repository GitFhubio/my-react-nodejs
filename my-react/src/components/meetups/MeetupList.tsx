import React from "react";
import classes from './MeetupList.module.css';
import { Meetup, MeetupItem } from "./MeetupItem";
interface MeetupListprops {
meetups:Meetup[]
}
export const MeetupList:React.FC<MeetupListprops>=(props)=>{
    return (
<ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
    )
}