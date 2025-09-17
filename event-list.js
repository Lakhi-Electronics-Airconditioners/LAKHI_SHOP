// event-list.js
// 0 = N/A, 1 = Happening, 3 = Coming Soon, 4 = Done
export const events = [
    {
        name: "Diwali 2025",
        slug: "diwali-2025",
        from: {
            day: 20, month: 10, year: 2025
        },
        to: {
            day: 30, month: 10, year: 2025          
        },
        state: 3,
        link: "https://shop.lakhiairconditioners.com/event/2025/diwali",
        img: "img/events/2025/diwali/main-img.png",
        bannerimg: "img/events/2025/diwali/banner-img.png",
        col2img: "img/events/2025/diwali/col2-img.png",
        maincolor: "#ff9800",
        secondarycolor: "#704c14",
        textcolor: "#000000",
        buttoncolor: "#ff5722",
        buttontextcolor: "#ffffff",
        text1: "Wishing you a joyous and prosperous Diwali!",
        text2: "Celebrate the festival of lights with us. Enjoy special offers and discounts on all air conditioners this Diwali season!",
        bannerhtml: `<div class="row">
                <div class="col-2" style="padding-right: 20px;">
                    <h1>Happy Diwali to all</h1>
                    <p>Wishing you a joyous and prosperous Diwali! Celebrate the festival of lights with us. Enjoy special offers and discounts on all air conditioners this Diwali season!</p>
                    <a href="https://shop.lakhiairconditioners.com/event/2025/diwali" class="btn">Learn More &#10132;</a>
                </div>
               <div class="col-2">
                    <img src="img/events/2025/test-event/col2-img.png" min-width="1000" min-height="1000"  width="1000%" alt="test event col2 image" style="display: inline-block;margin-left:10px;item-align: center;">
                </div>
                <div class="col-1">
                    <img src="img/events/2025/test-event/banner-img.png" alt="Test Event 2025 Celebration" style="max-width:300px; width:1000%"; height:1000%;  max-height: 300px; display:flex; ">
                    <br><br>
                </div>
            </div>`,
        bannerstyle: `background: radial-gradient(#ff9800, #fff2e6) color: #704c14;`
    },
    {
        name: "Blue Day 2025",
        slug: "blue-day-2025",
        from: {
            day: 1, month: 10, year: 2025
        },
        to: {
            day: 10, month: 10, year: 2025
        },
        state: 3,
        link: "https://shop.lakhiairconditioners.com/event/2025/blue-day",
        img: "img/events/2025/blue-day/main-img.png",
        bannerimg: "img/events/2025/blue-day/banner-img.png",
        col2img: "img/events/2025/blue-day/col2-img.png",
        maincolor: "#0000ff",
        secondarycolor: "#00008b",
        textcolor: "#000000",
        buttoncolor: "#1e90ff",
        buttontextcolor: "#ffffff",
        text1:"Blue day is a day which are website becomes blue theme for 10 days",
        text2: "Hope you enjoy it (not all will be blue example: red text may not be blue)",
        bannerhtml: `<div class="row">
                <div class="col-2" style="padding-right: 20px;">
                    <h1>Blue Day</h1>
                    <p>Blue day is a day which are website becomes blue theme for 10 days</p>
                    <a href="https://shop.lakhiairconditioners.com/event/2025/blue-day" class="btn">Learn More &#10132;</a>
                </div> 
                <div class="col-2">
                    <img src="img/events/2025/blue-day/col2-img.png" display: inline-block;background: #1e90ff;color: #ffffff;padding: 8px 30px;border-radius: 30px;margin: 30px 0;transition: background 0.3s" alt="blue day celebration col2 image">
                </div>
                <div class="col-1">
                    <img src="img/events/2025/blue-day/banner-img.png" alt="Blue Day 2025 Celebration" style="width:100%; max-width:400px; margin-top:20px; border-radius:10px;">
                </div>
            </div>`,
        bannerstyle: `background: radial-gradient(#0000ff, #d6e0ff) color: #00008b;`
    },
    {
        name: "Navratri 2025",
        slug: "navratri-2025",
        from: {
            day: 22, month: 9, year: 2025
        },
        to: {
            day: 22, month: 9, year: 2025
        },
        state: 3,
        link: "https://shop.lakhiairconditioners.com/event/2025/navratri",
        img: "img/events/2025/navratri/main-img.png",
        bannerimg: "img/events/2025/navratri/banner-img.png",
        col2img: "img/events/2025/navratri/col2-img.png",
        maincolor: "#ff1493",
        secondarycolor: "#8b008b",
        textcolor: "#000000",
        buttoncolor: "#ff69b4",
        buttontextcolor: "#ffffff",
        text1:"May you and your family be graced by the blessing of the nine Goddesses: Maa Shailputri, Maa Brahmacharini, Maa Chandraghanta, Maa Kushmanda, Maa Skandamata, Maa Katyayani, Maa Kalaratri, Maa Mahagauri and Maa Siddhidatri. May the first morning of Navratri start with renewed hope and joy.",
        Text2:"Wishing you a joyous and prosperous Navratri! Celebrate the festival of nine nights with us.",
        bannerhtml: `<div class="row">
                <div class="col-2" style="padding-right: 20px;">
                    <h1>Happy Navratri to all</h1>
                    <p>May you and your family be graced by the blessing of the nine Goddesses: Maa Shailputri, Maa Brahmacharini, Maa Chandraghanta, Maa Kushmanda, Maa Skandamata, Maa Katyayani, Maa Kalaratri, Maa Mahagauri and Maa Siddhidatri. May the first morning of Navratri start with renewed hope and joy.</p>
                    <a href="https://shop.lakhiairconditioners.com/event/2025/navratri" class="btn">Learn More &#10132;</a>
                </div>
                <div class="col-2">
                    <img src="/img/events/2025/navratri/col2-img.png" style="display: inline-block;background: #ff69b4;color: #ffffff;padding: 8px 30px;border-radius: 30px;margin: 30px 0;transition: background 0.3s" alt="navratri celebration col2 image">
                </div>
                <div class="col-1">
                    <img src="img/events/2025/navratri/banner-img.png" alt="Navratri 2025 Celebration" style="width:100%; max-width:400px; margin-top:20px; border-radius:10px;">
                </div>
            </div>`,
        bannerstyle: `background: radial-gradient(#ff1493, #ffd6d6) color: #8b008b;`
    }
];