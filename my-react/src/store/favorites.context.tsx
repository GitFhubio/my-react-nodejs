import { createContext, useState } from "react";
import { Meetup } from "../components/meetups/MeetupItem";
export const FavoritesContext=createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite: (favoriteMeetup:Meetup)=>{},
    removeFavorite:(meetupId:any)=>{},
    itemIsFavorite:(meetupId:any)=>Boolean<false>()
}); //javascript object che conterra un react component
//lettera maiuscola

//è un component a tutti gli effetti
export const FavoritesContextProvider = (props:any) => {
    const [userFavorites,setUserFavorites]=useState([])
    const addFavoritesHandler =(favoriteMeetup:any)=>{
        setUserFavorites((prevUserFavorites)=>{
return prevUserFavorites.concat(favoriteMeetup)
//piu sicuro che fare direttamente userFavorites.concat(potrei non avere ancora lultimo valore)
        })

    }
    const removeFavoritesHandler =(meetupId:any)=>{
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.filter((meetup:Meetup)=>meetup.id != meetupId)
            //piu sicuro che fare direttamente userFavorites.concat(potrei non avere ancora lultimo valore)
                    })
    }
    const itemIsFavoriteHandler =(meetupId:any)=>{
        return userFavorites.some((meetup:Meetup)=>meetup.id==meetupId)
        
    }
    const context={
    favorites:userFavorites,
    totalFavorites:userFavorites.length,
   addFavorite:addFavoritesHandler,
   removeFavorite:removeFavoritesHandler,
   itemIsFavorite:itemIsFavoriteHandler
};
return <FavoritesContext.Provider value={context}>
    {props.children}
</FavoritesContext.Provider>
}
