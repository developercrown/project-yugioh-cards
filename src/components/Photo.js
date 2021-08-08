import React from 'react'

function Photo({image}){
    return <div class="photo">
        <img src={image} alt="card" />
    </div>
}

export default Photo;