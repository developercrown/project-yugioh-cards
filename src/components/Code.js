import React from 'react'

function Code({serial}){
    return <div className="code">
        <div className="numbers">
            <b>{serial}</b>
        </div>
        <div className="marca">
            <span>©1996 KAZUKI TAKAHASHI</span>
        </div>
        <div className="hologram"></div>
    </div>
}

export default Code;