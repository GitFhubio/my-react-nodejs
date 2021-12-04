import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../../store/favorites.context";
import { Card } from "../ui/Card";
import classes from './MeetupItem.module.css';
export interface Meetup {
    id:number,
    image:string,
    title:string,
    description:string,
    address:string
    }
export const MeetupItem:React.FC<Meetup> =(props)=>{
  const favoriteCtx=useContext(FavoritesContext);
  const itemIsFavorite=favoriteCtx.itemIsFavorite(props.id);
  const toggleFavoritesStatusHandler = ()=>{
    if (itemIsFavorite){
      favoriteCtx.removeFavorite(props.id)
    }
    else{
      favoriteCtx.addFavorite({
        id:props.id,
        title:props.title,
        description:props.description,
        image:props.image,
        address:props.address
      })

    }
  }
    return (
            <li className={classes.item}>
                <Card>
              <div className={classes.image}>
                <img src={props.image} alt={props.title} />
              </div>
              <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
              </div>
              <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from favorites' :'To favorites'} </button>
              </div>
              </Card>
            </li>

    )
}