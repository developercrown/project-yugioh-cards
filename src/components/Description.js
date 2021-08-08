import React from 'react'

function Description({attributes, attack, defense, description}){
    return <div class="description">
        <div class="title">
            <b>[ {attributes} ]</b>
        </div>
        <div class="content">
            {description}
            <div class="separator"></div>
            <div class="power">
                <b>ATK/{attack} DEF/{defense}</b>
            </div>
        </div>
    </div>
}

export default Description;