import React from 'react'
import star from '../res/ballstart.png';
function Stars({number}){
    let stars = []
    if(number === 0 || !number){
        number = 1
    }
    else if( number >= 10){
        number = 10;
    }
    for (var i = 0; i < number; i++){
        stars.push(<img class="star" src={star} alt="star {i}" />)
    }
    return <div class="stars">
        {stars}
    </div>
}

export default Stars;