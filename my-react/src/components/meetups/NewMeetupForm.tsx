import React from 'react';
import { useRef } from 'react';
import {Card} from '../ui/Card';
import classes from './NewMeetupForm.module.css';

export const  NewMeetupForm =(props:any)=> {
  const titleInputRef =  React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const imageInputRef =  React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const addressInputRef =  React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descriptionInputRef =  React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  function submitHandler(event:any) {
    event.preventDefault(); //dobbiamo fare la nostra richiesta dietro le quinte
    //senza reload prevenendo il comportamento del browser 
    const enteredTitle=titleInputRef.current.value;
    const enteredImage=imageInputRef.current.value;
    const enteredAddress=addressInputRef.current.value;
    const enteredDescription=descriptionInputRef.current.value;
    const meetupData ={
      title:enteredTitle,
      image:enteredImage,
      address:enteredAddress,
      description:enteredDescription
  
    }
    props.onAddMeetup(meetupData);
  }


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image'ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address'ref={addressInputRef}  />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows={5} ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
