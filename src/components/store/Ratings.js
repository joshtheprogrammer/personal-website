import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Ratings = ({score}) => {
    const [rating, setRating] = useState(score) //Fix that, where you can set default..
    const [hover, setHover] = useState(null)

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                
                return (
                    <label>
                        <input
                            type="radio"
                            name="userRating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            hidden
                        />
                        <AiFillStar
                            className="star"
                            fill={ratingValue <= (hover || rating) ? "green" : "lightgreen"}
                            onMouseEnter = {() => setHover(ratingValue)}
                            onMouseLeave = {() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default Ratings;