"use client";

import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import Nature1 from '../../app/static/images/nature1.jpg';
import Nature2 from '../../app/static/images/nature2.jpg';
import Nature3 from '../../app/static/images/nature3.jpg';

const ImageSection = () => {
  const images = [Nature1, Nature2, Nature3];

  return (
    <section id='images' className="container my-3">
      <h2 className="text-center">Image Gallery</h2>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <Image
              className="d-block"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Slide {index + 1}</h3>
              <p>Slide {index + 1} description.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default ImageSection;

