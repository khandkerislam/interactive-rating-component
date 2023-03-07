import { useState } from 'react'
import star from '../../assets/images/icon-star.svg'
import "./Rating.css";

function Rating({submit, score}) {
    const [rating, setRating] = useState(1)


    return (
        <div className="rating-container">
            <div className='image-container'>
                <img className="star" src={star} alt="star icon"/>
            </div>
            <div className='text-container'>
                <header >How did we do?</header>
                <p>Please let us know how we did with your support request. All feedback is appreciated 
to help us improve our offering!</p>
            </div>
            <div className='rating-box'>
                {Array.from({length: 5}, (_, index) => <button key={index} onClick={()=>setRating(index)} className={rating == index ? "active" : "inactive"}> {index + 1} </button>)}
            </div>
            <button onClick={()=>{submit(true); score(rating);}}className="submit">SUBMIT</button>
        </div>
    )
}

export default Rating;