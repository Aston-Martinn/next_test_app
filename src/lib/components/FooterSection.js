"use client";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {
    return (
        <footer className="bg-dark text-light pt-5 pb-4">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-12 mb-4">
                        <h5 className="text-uppercase">About Us</h5>
                        <p className="small">
                            We provide the best product support and services tailored to your needs. Our mission is to deliver exceptional value with every interaction.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
                            <li><a className="text-light text-decoration-none">About Us</a></li>
                            <li><a className="text-light text-decoration-none">Services</a></li>
                            <li><a className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-sm-12 mb-4">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><span>1234 Street Name, City, Country</span></li>
                            <li><span>+1 234 567 890</span></li>
                            <li><span>support@company.com</span></li>
                        </ul>
                        <div className="mt-3">
                            <a href="#" className="text-light me-3"><FaFacebook size={24} /></a>
                            <a href="#" className="text-light me-3"><FaTwitter size={24} /></a>
                            <a href="#" className="text-light"><FaInstagram size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center pt-3">
                        <p className="small mb-0">© 2024 Your Company Name. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;