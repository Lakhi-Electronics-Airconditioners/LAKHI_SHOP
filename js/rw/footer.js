const footerElement = document.getElementById('footer');

const footerContent = `
    <div class="container">
        <div class="row">
            <div class="foot-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android but not <u>iphone</u> for now</p>
                <div class="app-logo">
                    <a href="http://apk.download.lakhiairconditioners.com/">
                        <img src="https://shop.lakhiairconditioners.com/img/NABR/apk-down.jpeg" alt="apk download button">
                    </a>
                </div>
            </div>
            <div class="foot-col-2">
                <img src="https://shop.lakhiairconditioners.com/img/log-w.png" width="200px" alt="lakhi airconditioners white logo">
                <p>Our Purpose Is to give the best deal and products to the Many.</p>
            </div>
            <div class="foot-col-3">
                <h3>Useful links</h3>
                <ul>
                    <li><a href="https://main.lakhiairconditioners.com/TAC">Terms and Conditions</a></li>
                    <li><a href="https://main.lakhiairconditioners.com/PP">Privacy Policy</a></li>
                    <li><a href="https://lakhiairconditioners.com">INFO</a></li>
                    <li><a href="https://maps.lakhiairconditioners.com">G-MAPS</a></li>
                </ul>
            </div>
            <div class="foot-col-4">
                <h3>Follow us</h3>
                <ul>
                    <li><a href="https://insta.lakhiairconditioners.com">Instagram</a></li>
                    <li><a href="https://fb.lakhiairconditioners.com">Facebook</a></li>
                    <li><a href="https://x.lakhiairconditioners.com">X(Twitter)</a></li>
                    <li><a href="https://yt.lakhiairconditioners.com">YouTube</a></li>
                </ul>
                <h3 style="margin-top: 20px">Contact info</h3>
                <ul>
                    <li><a href="tel:+919998021446">+91 99980 21446 <br> (11am - 7pm)</a><br>or<br><a href="tel:+919825513000"> +91 98255 13000</a></li>
                    <li><a href="mailto:info@lakhiairconditioners?subject=Feedback&body=Hi%20there,%20I%20have%20some%20feedback%20for%20you.">info@lakhiairconditioners.com</a></li>
                    <li><a href="https://bc.lakhiairconditioners.com">Business-card</a></li>
                </ul>
            </div>
        </div>
        <hr>
        <center>
            <div class="row">
                <div class="col-2">
                    <div class="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="66d2011df3f7fe4eab3948e1" data-style-height="52px" data-style-width="50%" data-token="90f6214c-ff58-439e-8e8e-cd4fccd0223b">
                        <button class="greview" onclick="window.open('https://uk.trustpilot.com/review/lakhiairconditioners.com', '_blank')" style="background: white; display: inline; color: rgb(35, 35, 35); border: 1px solid #18f268; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 16px;">
                            review us on <br>
                            <span style="font-weight: bold;"><i class="fab fa-trustpilot"></i> Trustpilot</span>
                        </button>
                    </div>
                </div>
                <div class="col-2">
                    <div class="greview">
                        <button class="greview" onclick="window.open('https://g-review.lakhiairconditioners.com', '_blank')" style="background: white; display: inline; color: rgb(35, 35, 35); border: 1px solid #1877F2; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 16px;">
                            review us on <br>
                            <span style="font-weight: bold;"><i class="fab fa-google"></i> Google maps</span>
                        </button>
                    </div>
                </div>
            </div>
        </center>
        <hr>
        <p class="copyright">&copy; ${new Date().getFullYear()} Lakhi Airconditioners. All rights reserved.<br>
            All rights given to FontAwesome for their icons.
            <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by ariefstudio - Flaticon</a>
        </p>
    </div>
`;

if (footerElement) {
    footerElement.innerHTML = footerContent;
}