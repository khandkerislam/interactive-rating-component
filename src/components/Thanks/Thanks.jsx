import { useState, ReactDOM } from 'react'
import star from '../../assets/images/icon-star.svg'
import thanks from '../../assets/images/illustration-thank-you.svg'
import "./Thanks.css";

function Thanks({score}) {


    return (
        <div className='thanks-container'>
            <img src={thanks}/>
            <div className='score'>
                You selected {score + 1} out of 5
            </div>
            <header>Thank You!</header>
            <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!
            </p>
        </div>
    )
}

export default Thanks;