import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import ChatBot from './ChatBot';

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                <ChatBot />
                {children}
            </div>
        )
    }
}

export default Template
