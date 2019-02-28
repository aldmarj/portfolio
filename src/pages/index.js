import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import AboutMe from '../components/Home/AboutMe';
import Contact from '../components/Home/Contact';
import Game from '../components/Home/TicTacToe';


class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Aldmar Joubert"
        const siteDescription = "My Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <AboutMe/>
                    <Game/>
                    <Contact/>


                </div>

            </Layout>
        )
    }
}

export default HomeIndex