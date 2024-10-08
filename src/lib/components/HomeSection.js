"use client";

import SectionHeading from '../UI/SectionHeading';
import SectionTitle from '../UI/SectionTitle';
import Image from 'next/image';
import ProductImage from '../../app/static/images/customer.jpg';
import styles from './modules/HomeSection.module.css';

const HomeSection = () => {
    return (
        <section id="/" className="container my-3">
            <div className="row align-items-center">
                <div className="col-md-6 text-md-start text-center">
                    <SectionHeading heading="Customer support" />
                    <SectionTitle title="Get instant product support on your products." />
                    <button type="button" className={`btn ${styles.homeSection}`}>Get started</button>
                </div>
                <div className="col-md-6">
                    <Image
                        src={ProductImage}
                        alt="Description of image"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="img-fluid"
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeSection;