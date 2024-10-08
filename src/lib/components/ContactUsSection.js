"use client"

import Image from 'next/image';
import DemoImage from '../../app/static/images/demo.jpg';

const ContactUsSection = () => {
    return (
        <section id="contactus" className="container my-3">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <Image
                        src={DemoImage}
                        alt="Description of image"
                        layout="responsive"
                        width={400}
                        height={200}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2>Contact Us</h2>
                    <form>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="4"
                                placeholder="Type your message here"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;