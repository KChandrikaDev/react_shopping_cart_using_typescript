import React from 'react'
import './Preview.css'
type Props={
    prevClick:()=>void;
}
const Preview:React.FC<Props> = ({prevClick}) =>{
    return (
        <div className="">
                <div className="ms-5 prev" >
                <i onClick={()=>prevClick()} className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
                </div>
                <div className="me-5 next" >
                <i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i>

                </div>
            </div>
    )
}

export default Preview
