import React from 'react'

function HeadTitle({namecard}){
    return <div className="head">
        <div className="label">
            {namecard}
        </div>
        <div className="circle"></div>
    </div>
}

export default HeadTitle;