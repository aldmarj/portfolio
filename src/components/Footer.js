import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://github.com/aldmarj" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/aldmar-joubert-089488bb/" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">LinkedIn</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Aldmar Joubert 2019</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
