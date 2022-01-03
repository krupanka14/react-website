import React from "react";
import '../Footer/Footer.css';
import { Button } from "../Button";
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram,FaYoutube, FaTwitter,FaLinkedin } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';




 const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subsription'>
                <p className ='footer-subscription-heading'>
                    Join our exclusive membership to receive the latest news and trends in detail
                </p>
                <p className='footer-subscription-text'>
                    you can unsubscribe at any time on click of it.
                </p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' name='email' type='email' placeholder='Your Email' />
                        <Button buttonStyle='btn--outline'>Subsctibe</Button>
                    </form>
                </div>
                </section>
                <div className='footer-links'>
               <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Tesimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
            </div>  
            <div className='footer-link-items'>
            <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>      
            </div>     
            </div> 
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
             <div className='footer-link-items'>
                 <h2>Social Media</h2>
                 <Link to='/'>Instagram</Link>
                 <Link to='/'>Facebook</Link>
                 <Link to='/'>YouTube</Link>
                 <Link to='/'>Twitter</Link>
             </div>
            </div>
        </div>   
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to ='/' className='social-logo'>
                        <MdFingerprint className='navbar-icon' />
                         KRUJO
                    </Link>
                </div>
                <small className='website-rights'>KRUJO © 2021 </small>
                <div className='social-icons'>
                <a href = 'https://www.facebook.com/' className='social-icon-link' target='_blank' aria-label='Facebook'><FaFacebook /></a>
                <a href='https://www.instagram.com/' className='social-icon-link' target='_blank' aria-label='Instagram'><FaInstagram /></a>
                <a href='https://www.youtube.com/' className='social-icon-link' target='_blank' aria-label='Youtube'><FaYoutube /></a>
                <a href='https://twitter.com/?lang=en' className='social-icon-link'  target='_blank' aria-label='Twitter'><FaTwitter /></a>
                <a href='https://www.linkedin.com/signup' className='social-icon-link' target='_blank' aria-label='LinkedIn'><FaLinkedin /></a>
          </div>
        </div> 
    </section>         
</div>
    )
}
export default Footer