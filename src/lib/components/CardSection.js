"use client";

import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardSection = () => {
    return (
        <section id="cards" className="container my-3">
            <div className="container text-center">
                <div className="row">
                    {[...Array(8)].map((_, index) => (
                        <div className="col mb-4" key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CardSection;
