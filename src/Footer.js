import React from 'react';

function Footer () {
    return (
        <footer>
            <section>
                <div>
                    <img src="public\images\logo-footer.png" alt="Logo" />
                </div>
            </section>
            <section>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservation</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
            </section>
            <section>
                <div>
                    <p>Contact Information:</p>
                    <p>123 Main St, City</p>
                    <p>Email: info@example.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </section>
            <section>
                <div>
                    <a href="#"><img src="facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="instagram.png" alt="Instagram" /></a>
                    <a href="#"><img src="twitter.png" alt="Twitter" /></a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;