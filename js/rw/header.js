const headerElement = document.getElementById('header');

const headerContent = `
    <div class="container">
        <div class="banner">
            <p></p>
        </div>
        <div class="navbar">
            <div class="logo"><img src="https://shop.lakhiairconditioners.com/img/NABR/log.jpg" width="125px" alt="Company Logo"></div>
            <nav>
                <ul id="Menuitems">
                    <li><a href="https://shop.lakhiairconditioners.com">Home</a></li>
                    <li><a href="https://shop.lakhiairconditioners.com/about">About Us</a></li>
                    <li><a href="https://shop.lakhiairconditioners.com/products">All Products</a></li>
                    <li><a href="https://shop.lakhiairconditioners.com/AC-only">All Airconditionrs</a></li>
                    <li><a href="https://shop.lakhiairconditioners.com/contact">Contact Us</a></li>
                    <li><a href="https://shop.lakhiairconditioners.com/account">Account</a></li>
                </ul>
            </nav>
            <a href="https://shop.lakhiairconditioners.com/cart"><img src="https://shop.lakhiairconditioners.com/img/NABR/SCI.png" width="30px" height="30px" alt="Shopping Cart Icon"></a>
            <img src="https://shop.lakhiairconditioners.com/img/NABR/menu.png" class="menu-icon" onclick="menutoggle()" alt="menu icon">
            <script src="https://shop.lakhiairconditioners.com/menubar.js"></script>
        </div>
    </div>
`;

if (headerElement) {
    headerElement.innerHTML = headerContent;
}
var Menuitems = document.getElementById('Menuitems');
Menuitems.style.maxHeight ="0px";
function menutoggle(){
    if(Menuitems.style.maxHeight == "0px")
       { 
         Menuitems.style.maxHeight= "200px"
        }
    else
        {
        Menuitems.style.maxHeight ="0px";
        }
}
