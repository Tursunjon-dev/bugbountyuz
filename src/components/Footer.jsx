import React from 'react';

import instagram from "../images/instagram-icon.svg"
import facebook from "../images/facebook-icon.svg"
import telegram from "../images/telegram-icon.svg"
const Footer = () => {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer>
                <ul class="footer-links">
                    <li><a href="#whyus">Nega biz?</a></li>
                    <li><a href="#company">Kompaniya </a></li>
                    <li><a href="#rules">Qoidalar</a></li>
                    <li><a href="#team">Jamoa</a></li>
                </ul>
                <ul class="footer-socials">
                    <li><a href="https://www.instagram.com">
                        <img src={instagram} />
                    </a></li>
                    <li><a href="https://www.facebook.com">
                        <img src={facebook} />
                    </a></li>
                    <li><a href="https://www.t.me/bugbountyuz">
                        <img src={telegram} />
                    </a></li>
                </ul>
                <p>2022 Bugbounty,BBPuz. All right reserved</p>
            </footer>
            {/* <!-- End Footer --> */}
        </>
    );
};


export default Footer;