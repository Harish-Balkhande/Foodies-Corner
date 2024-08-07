// components/Navbar.js
"use client"; // This directive ensures this component is only rendered on the client side

import { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Test() {
    return (
        <>
            {/* <div className="container mt-4">
                <div id="carouselExampleControls" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Image
                                src="/static/images/client1.jpg"
                                alt="Client 1"
                                className="d-block w-100"
                                width={800}  // Adjust width as needed
                                height={600} // Adjust height as needed
                            />
                        </div>
                        <div className="carousel-item">
                            <Image
                                src="/static/images/client2.jpg"
                                alt="Client 2"
                                className="d-block w-100"
                                width={800}  // Adjust width as needed
                                height={600} // Adjust height as needed
                            />
                        </div> */}
            {/* Add more carousel items as needed */}
            {/* </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}


            <section className="client_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center psudo_white_primary mb_45">
                        <h2>What Says Our Customers</h2>
                    </div>
                    <div id="customerCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className="box justify-content-center">
                                        <div className="detail-box text-center">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam
                                            </p>
                                            <h6>Moana Michell</h6>
                                            <p>magna aliqua</p>
                                        </div>
                                        <div className="img-box">
                                            <img src="/static/images/client1.jpg" alt="Client 1" className="box-img img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="box">
                                        <div className="detail-box text-center">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Ut enim ad minim veniam
                                            </p>
                                            <h6>Mike Hamell</h6>
                                            <p>magna aliqua</p>
                                        </div>
                                        <div className="img-box">
                                            <img src="/static/images/client2.jpg" alt="Client 2" className="box-img img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Add more carousel items here if needed --> */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#customerCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#customerCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>


        </>
    );
}
