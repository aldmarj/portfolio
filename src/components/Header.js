import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#about" className="image avatar"><img src={avatar} alt="Aldmar Joubert" /></a>
                    
                    <h1><strong>Highly motivated </strong>junior developer, <br />
                        who is eager to learn and excited <br />
                        by the prospect of a challenge.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
