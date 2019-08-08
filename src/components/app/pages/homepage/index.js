import React from 'react'
import "./homepage.css"
import Title from './title'
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/100/three.min.js'
import WAVES from 'https://www.vantajs.com/dist/vanta.waves.min.js'

class Homepage extends React.Component {
    componentDidMount() {
      this.effect = WAVES({
        el: "#vantajs",
        color: 0x1470,
        shininess: 26.00,
        waveHeight: 10.00,
        waveSpeed: 0.50,
        zoom: 1.44,
      })
    }

    componentWillUnmount() {
      if (this.effect) this.effect.destroy()
    }

    render() {
        return (
            <div id="vantajs" className='wrapper'>
                <Title className='homepage_title'/>
            </div>
        );
    }
}

export default Homepage
