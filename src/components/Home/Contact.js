import React from 'react';

export default function (){
    return(
        <section id="contact">
            <h2>Get In Touch</h2>
            <div className="row">
                <div className="8u 12u$(small)">
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="row uniform 50%">
                            <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                            <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                            <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                        </div>
                        <br/>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    )
}