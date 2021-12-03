import React from "react"; 
import classes from './Card.module.css';
export const Card:React.FC=(props)=>{
    return (
<div className={classes.card}>{props.children}</div>
    )
}

//props.children è una propietà speciale di ogni componente
//children in questo caso è uguale  a
{/* <div className={classes.image}>
                <img src={props.image} alt={props.title} />
              </div>
              <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
              </div>
              <div className={classes.actions}>
                <button>To Favorites</button>
              </div> */}