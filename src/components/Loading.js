import React from 'react'
import ReactLoading from "react-loading";
const Loading = ({ section }) => {
    return (
        <div >
            <ReactLoading type={'bars'} className={section === 'home-page' ? 'home-loader' : 'loader'} />
        </div>
    )
}

export default Loading
