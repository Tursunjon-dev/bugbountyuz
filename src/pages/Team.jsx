import React from 'react';
import Footer from '../components/Footer';
import Cuate from "../images/cuate.svg"
import Tom from "../images/team/tom.png"
import instagram from "../images/team/instagram-icon.svg"
import telegram from "../images/team/telegram-icon.svg"
import facebook from "../images/team/facebook-icon.svg"
import Michael from "../images/team/michael.png"
import Anderson from "../images/team/anderson.png"
import Antony from "../images/team/antony.png"
import Peter from "../images/team/peter.png"
import Logo from '../images/nav-logo.svg'
import Navbar from '../components/Navbar';
const Team = () => {
    return (
        <div>
            <noscript>Sorry your browser is not supporting javaScript update your browser or use another browser</noscript>

            <Navbar />
            {/* <!-- Main --> */}
            <main>

                {/* <!-- Team --> */}
                <section id="team">
                    <section id="team-intro">
                        <h2>Jamoa haqida</h2>
                        <img src={Cuate} />
                        <p>Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. Quis luctus turpis semper venenatis orci arcu cursus. Blandit non integer sed condimentum et odio <b>nullam non</b>. Ullamcorper gravida aliquam sed <b>commodo</b> in pellentesque pretium nulla placerat.</p>
                    </section>

                    <section id="team-info">
                        <h2>Bizning jamoa</h2>
                        <div class="container team-group">
                            <div class="col">
                                <div class="header-image">
                                    <img src={Tom} />
                                </div>
                                <div class="header-content">
                                    <h3>Tom Cook</h3>
                                    <span class="role">Direktor, Product development</span>

                                    <ul class="socials">
                                        <li>
                                            <a href="https://instagram.com/tomcook"><img src={instagram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/tomcook"><img src={telegram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com/tomcook"><img src={facebook} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="header-image">
                                    <img src={Michael} />
                                </div>
                                <div class="header-content">
                                    <h3>Michael Jhonson</h3>
                                    <span class="role">Back-end developer</span>

                                    <ul class="socials">
                                        <li>
                                            <a href="https://instagram.com/michaeljohnson/"><img src={instagram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/michaeljohnson/"><img src={telegram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com/michaeljohnson/"><img src={facebook} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="header-image">
                                    <img src={Peter} />
                                </div>
                                <div class="header-content">
                                    <h3>Piter Parker</h3>
                                    <span class="role">Front-end developer</span>

                                    <ul class="socials">
                                        <li>
                                            <a href="https://instagram.com/michaeljohnson/"><img src={instagram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/michaeljohnson/"><img src={telegram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com/michaeljohnson/"><img src={facebook} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="header-image">
                                    <img src={Antony} />
                                </div>
                                <div class="header-content">
                                    <h3>Antony Smit</h3>
                                    <span class="role">UX/UI designer</span>

                                    <ul class="socials">
                                        <li>
                                            <a href="https://instagram.com/michaeljohnson/"><img src={instagram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/michaeljohnson/"><img src={telegram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com/michaeljohnson/"><img src={facebook} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="header-image">
                                    <img src={Tom} />
                                </div>
                                <div class="header-content">
                                    <h3>John Smith</h3>
                                    <span class="role">Project manager</span>

                                    <ul class="socials">
                                        <li>
                                            <a href="https://instagram.com/michaeljohnson/"><img src={instagram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/michaeljohnson/"><img src={telegram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com/michaeljohnson/"><img src={facebook} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <div class="header-image">
                                    <img src={Anderson} />
                                </div>
                                <div class="header-content">
                                    <h3>Anderson Silva </h3>
                                    <span class="role">Back-end developer</span>

                                    <ul class="socials">
                                        <li>
                                            <a href="https://instagram.com/michaeljohnson/"><img src={instagram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/michaeljohnson/"><img src={telegram} /></a>
                                        </li>
                                        <li>
                                            <a href="https://facebook.com/michaeljohnson/"><img src={facebook} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>
                </section>
                {/* <!-- End Team --> */}

            </main>
            {/* <!-- End Main --> */}


            <Footer />
        </div>
    );
};


export default Team;