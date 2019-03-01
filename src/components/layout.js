import React , { Component } from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import ChatBot from './ChatBot';

export default class Template extends Component {
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

