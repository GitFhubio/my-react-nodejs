import React from "react";
import { useContext } from "react";
import { Meetup } from "../components/meetups/MeetupItem";
import { MeetupList } from "../components/meetups/MeetupList";
import { FavoritesContext } from "../store/favorites.context";
export const FavoritesPage:React.FC=(props)=>{
    const favoriteCtx=useContext(FavoritesContext);
    let totalFavorites=favoriteCtx.totalFavorites;
    let favoritesArray: Meetup[]=favoriteCtx.favorites;
    let content;
    if(totalFavorites == 0){
content= <p>Non hai alcun meetup preferito.</p>
 } else {
     content = <MeetupList meetups={favoritesArray} />
 }
return (
    <section>
        <h1 style={{marginBottom:'20px'}}>My favorites</h1>
        {content}
    </section>
)
}