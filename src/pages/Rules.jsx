import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Logo from '../images/nav-logo.svg';
import tickI from "../images/tick-icon.svg";
const Rules = () => {
    return (
        <>
            <noscript>Sorry your browser is not supporting javaScript update your browser or use another browser</noscript>

            <Navbar />
            {/* <!-- Main --> */}
            <main>
                {/* <!-- Rules --> */}
                <section id="rules">
                    <div class="container">
                        <h2>Qoidalar</h2>

                        <div class="rules-group">
                            <div class="row">
                                <img src={tickI} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis luctus turpis semper venenatis orci arcu cursus. Blandit non integer sed condimentum et odio nullam non. Ullamcorper gravida aliquam sed commodo in pellentesque pretium nulla placerat.</p>
                            </div>
                        </div>

                        <div class="rules-group">
                            <div class="row">
                                <img src={tickI} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis luctus turpis semper venenatis orci arcu cursus. Blandit non integer sed condimentum et odio nullam non. Ullamcorper gravida aliquam sed commodo in pellentesque pretium nulla placerat.</p>
                            </div>
                        </div>

                        <div class="rules-group">
                            <div class="row">
                                <img src={tickI} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis luctus turpis semper venenatis orci arcu cursus. Blandit non integer sed condimentum et odio nullam non. Ullamcorper gravida aliquam sed commodo in pellentesque pretium nulla placerat.</p>
                            </div>
                        </div>

                        <div class="rules-group">
                            <div class="row">
                                <img src={tickI} alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis luctus turpis semper venenatis orci arcu cursus. Blandit non integer sed condimentum et odio nullam non. Ullamcorper gravida aliquam sed commodo in pellentesque pretium nulla placerat.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Rules --> */}
            </main>
            {/* <!-- End Main --> */}
            <Footer />
        </>
    );
};


export default Rules;