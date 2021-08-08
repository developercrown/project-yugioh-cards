import React from 'react'
import HeadTitle from "./HeadTitle";
import Stars from "./Stars";
import Photo from "./Photo";
import Serial from "./Serial";
import Description from "./Description";
import Code from "./Code";

function Card({attributes, attack, cardnumber, defense, description, image, serial, name, stars}){
    return <div className="container">
        <HeadTitle namecard={name}/>
        <Stars number={stars}/>
        <Photo image={image}/>
        <Serial cardnumber={cardnumber}/>
        <Description attributes={attributes} attack={attack} defense={defense} description={description}/>
        <Code serial={serial}/>
    </div>
}

export default Card;