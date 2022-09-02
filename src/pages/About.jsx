import React from 'react';
import Cyber from "../images/cyber-attack-bro.svg"
import '../fonts/Gilroy.css';
import '../css/style.css'
import fIcon1 from "../images/features/features-icon-1.svg"
import fIcon2 from "../images/features/features-icon-2.svg"
import fIcon3 from "../images/features/features-icon-3.svg"
import fIcon4 from "../images/features/features-icon-4.svg"
import hBro from "../images/hacker-bro.svg"
import I1 from "../images/whyus/image-1.svg"
import I2 from "../images/whyus/image-2.svg"
import I3 from "../images/whyus/image-3.svg"
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <>
            <noscript>Sorry your browser is not supporting javaScript update your browser or use another browser</noscript>

            <Navbar />

            {/* <!-- Main --> */}
            <main>

                {/* <!-- Intro --> */}
                <section id="intro">
                    <h1>BUG BOUNTY</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo</p>
                    <button class="btn-primary">KO’PROQ KO’RISH</button>
                </section>
                {/* <!-- End Intro --> */}

                {/* <!-- About --> */}
                <section id="about">
                    <h2>BUG BOUNTY NIMA?</h2>
                    <div class="container">
                        <div class="section-image">
                            <img src={Cyber} />
                        </div>
                        <div class="section-text">
                            <p>BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug
                                hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and
                                resources for a monetary reward.
                            </p>
                            <p>The company publicly announces the reward scope and level, after which the volunteers can register on
                                the platform and take part in the Bug Bounty</p>
                        </div>
                    </div>
                </section>
                {/* <!-- End About --> */}

                {/* <!-- Features --> */}
                <section id="features">
                    <h2>FEATURES</h2>
                    <div class="wrapper container">
                        <div class="row">
                            <div class="col">
                                <img src={fIcon1} />
                            </div>
                            <div class="col">
                                <h4>Gain a reputation</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <img src={fIcon2} />
                            </div>
                            <div class="col">
                                <h4>Reduce efforts</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <img src={fIcon3} />
                            </div>
                            <div class="col">
                                <h4>Make more money</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <img src={fIcon4} />
                            </div>
                            <div class="col">
                                <h4>Safety first</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Features --> */}

                {/* <!-- Why Us --> */}
                <section id="whyus">
                    <h2>Why us?</h2>
                    <div class="wrapper container">
                        <div class="col text-section">
                            <h4>BBP.UZ COMPANY</h4>
                            <p>BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.

                                The company publicly announces tgit branch -M mainhe reward scope and level, after which the volunteers can register on the platform and take part in the Bug Bounty</p>
                        </div>
                        <div class="col image-section">
                            <img src={hBro} />
                        </div>
                    </div>
                    <div class="counting container">
                        <div class="col">
                            <h4>500+</h4>
                            <span class="title">
                                researchers
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                        </div>
                        <div class="col">
                            <h4>10 000$ +</h4>
                            <span class="title">
                                rewards
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                        </div>
                    </div>
                    <div class="brands container">
                        <div class="box">
                            <img src={I1} />
                        </div>
                        <div class="box">
                            <img src={I2} />
                        </div>
                        <div class="box">
                            <img src={I3} />
                        </div>
                    </div>
                </section>
                {/* <!-- End Why Us --> */}

                {/* <!-- FAQ --> */}
                <section id="faq">
                    <div class="container">
                        <div class="faq-group">
                            <div class="row">
                                <h4>What is bugbounty?</h4>
                                <p>BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.

                                    BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.</p>
                            </div>

                            <div class="row">
                                <h4>What is bugbounty?</h4>
                                <p>BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.

                                    BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.</p>
                            </div>

                            <div class="row">
                                <h4>Define the platform targeted audience?</h4>
                                <p>BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.

                                    BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.</p>
                            </div>

                            <div class="row">
                                <h4>How long does it take to respond to a report on the platform?</h4>
                                <p>BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.

                                    BugBounty is a program used by a company to engage independent researchers (called “white hats”, “bug hunters” or “researchers” in the industry) to identify vulnerabilities in information systems and resources for a monetary reward.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End FAQ --> */}

            </main>
            {/* <!-- End Main --> */}
            <Footer />
        </>
    );
};


export default About;