import React from 'react'
import "./homepage.css"
import Title from './title'

class Homepage extends React.Component {
    render() {
        return (
            <div id="vantajs" className='wrapper'>
                <Title className='homepage_title'/>
            </div>
        );
    }
}

export default Homepage
