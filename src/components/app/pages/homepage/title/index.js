import React from 'react'
import "./title.css"

class Title extends React.Component {
    render() {
        return (
            <div className='titleWrapper'>
                <h1 className='title title_dark'>Meet</h1>
                <span className='titleFront'>
                    <h1 className='title title_light'>Danny</h1>
                    <h1 className='title title_dark'>.</h1>
                </span>
            </div>
        );
    }
}

export default Title
