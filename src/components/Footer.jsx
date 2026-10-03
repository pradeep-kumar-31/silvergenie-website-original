function Footer() { 
  return ( 
    <footer className="footer"> 
 
      <div className="footer-container"> 
 
        {/* BRAND */} 
        <div className="footer-brand"> 
 
          <h2>SilverGenie</h2> 
 
          <p> 
            We Care for Those Who Have Always Cared for Us 
          </p> 
 
        </div> 
 
 
        {/* QUICK LINKS */} 
        <div className="footer-column"> 
 
          <h3>Quick Links</h3> 
 

          <a href="/#home">Home</a>
          <a href="/#services">Services</a>
          <a href="/about">About Us</a>
          <a href="/#resources">Resources</a>
          <a href="/care-management">Care Management</a>
          <a href="/subscription-plans">Care Plans</a>
          <a href="/#contact">Contact Us</a>
        </div> 
 
 
        {/* SERVICES */} 
        <div className="footer-column"> 
 
          <h3>Services</h3> 
 
          <a href="/#services">Elder Care</a> 
          <a href="/#services">Home Care</a> 
          <a href="/#services">Emergency Care</a> 
          <a href="/#services">Wellness Services</a> 
          <a href="/care-management">
          Health & Care Management
          </a>

          <a href="/subscription-plans">
          Care Plans
          </a>
        </div> 
 
 
        {/* CONTACT */} 
        <div className="footer-column"> 
 
          <h3>Contact</h3> 
 
          <a href="tel:18002030527"> 
            1800 203 0527 
          </a> 
 
          <a href="mailto:info@yoursilvergenie.com"> 
            info@yoursilvergenie.com 
          </a> 
 
          <a
            href="https://www.instagram.com/yoursilvergenie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @yoursilvergenie
          </a>
 
        </div> 
 
      </div> 
 
 
      {/* COPYRIGHT */} 
      <div className="footer-bottom"> 
 
        <p> 
          © {new Date().getFullYear()} SilverGenie. All Rights Reserved. 
        </p> 
 
      </div> 
 
    </footer> 
  ); 
} 
 
export default Footer;