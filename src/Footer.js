import React from 'react';

function Footer () {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <img src="images/logo-footer.png" alt="Logo" width="75"/>
                    </div>
                    <div className='footer-col'>
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Reservation</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Contact Information</h4>
                        <ul>
                            <p>123 Main St, City</p>
                            <p>Email: info@example.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Follow Us</h4>
                        <div class="social-links">
  	 				        <a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				        <a href="#"><i class="fab fa-twitter"></i></a>
  	 				        <a href="#"><i class="fab fa-instagram"></i></a>
  	 			        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;