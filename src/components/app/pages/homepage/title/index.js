import React from 'react'
import "./title.css"

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 className='title title_dark'>Meet</h1>
                <h1 className='title title_light'>Danny</h1>
                <h1 className='title title_dark'>.</h1>
            </div>
        );
    }
}

export default Title
