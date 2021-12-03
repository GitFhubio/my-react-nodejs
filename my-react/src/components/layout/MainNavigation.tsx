import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';
export const MainNavigation:React.FC=()=>{
    return (
<header className={classes.header}>
 <div>React Meetups</div>
 <nav>
  <ul>
   <li>
       <NavLink to="/">All Meetups</NavLink>
   </li>
   <li>
       <NavLink to="/new-meetup">Add New-Meetup</NavLink>
   </li>
   <li>
       <NavLink to="/favorites">My favorites</NavLink>
   </li>
  </ul>
 </nav>
</header>
    )
}