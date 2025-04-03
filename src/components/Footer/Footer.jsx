import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="brand-name">Crypto </span>
          <span className="brand-accent"> . AR</span>
          <p className="brand-tagline">Your Gateway to Digital Assets</p>
        </div>
        
        <div className="footer-sections">
          <div className="footer-column">
            <h4>Market</h4>
            <a href="/markets">All Coins</a>
            <a href="/trending">Trending</a>
            <a href="/new-listings">New Listings</a>
          </div>
          
          <div className="footer-column">
            <h4>Resources</h4>
            <a href="/learn">Learn Crypto</a>
            <a href="/blog">Blog</a>
            <a href="/api">Developer API</a>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/press">Press</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} CryptoSphere. All rights reserved.
        </p>
        <p className="disclaimer">
          Cryptocurrency trading involves substantial risk of loss and is not suitable for every investor.
        </p>
      </div>
    </footer>
  )
}

export default Footer