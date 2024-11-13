$(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000, // AnimationTime let you define how long each section takes to animate
        pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) {
            flush();
            switch (index){
                case 1:
                    pg = document.getElementsByClassName("page1");
                    pg[0].setAttribute('class','page1 col-lg-4 animate__animated animate__fadeInLeft')
                    pg[1].setAttribute('class','page1 col-lg-8 animate__animated animate__fadeInRight')
                    break;
                case 2:
                    pg = document.getElementsByClassName("page2");
                    pg[0].setAttribute('class','page2 col-lg-4 animate__animated animate__fadeInLeft')
                    pg[1].setAttribute('class','page2 col-lg-8 animate__animated animate__fadeInRight')
                    break;
                case 3:
                    pg = document.getElementsByClassName("page3");
                    pg[0].setAttribute('class','page3 text-center animate__animated animate__fadeIn')
                    pg[1].setAttribute('class','page3 col-lg-4 col-md-6 animate__animated animate__fadeInLeft')
                    pg[2].setAttribute('class','page3 col-lg-4 col-md-6 animate__animated animate__fadeInDown')
                    pg[3].setAttribute('class','page3 col-lg-4 col-md-6 animate__animated animate__fadeInRight')
                    pg[4].setAttribute('class','page3 col-lg-4 col-md-6 animate__animated animate__fadeInLeft')
                    pg[5].setAttribute('class','page3 col-lg-4 col-md-6 animate__animated animate__fadeInUp')
                    pg[6].setAttribute('class','page3 col-lg-4 col-md-6 animate__animated animate__fadeInRight')
                    break;
                case 4:
                    pg = document.getElementsByClassName("page4");
                    pg[0].setAttribute('class','page4 text-center animate__animated animate__fadeIn')
                    pg[1].setAttribute('class','page4 col-lg-4 col-md-6 animate__animated animate__fadeInLeft')
                    pg[2].setAttribute('class','page4 col-lg-4 col-md-6 animate__animated animate__fadeInDown')
                    pg[3].setAttribute('class','page4 col-lg-4 col-md-6 animate__animated animate__fadeInRight')
                    pg[4].setAttribute('class','page4 col-lg-4 col-md-6 animate__animated animate__fadeInLeft')
                    pg[5].setAttribute('class','page4 col-lg-4 col-md-6 animate__animated animate__fadeInUp')
                    pg[6].setAttribute('class','page4 col-lg-4 col-md-6 animate__animated animate__fadeInRight')
                    break;
                case 5:
                    pg = document.getElementsByClassName("page5");
                    pg[0].setAttribute('class','page5 text-center animate__animated animate__fadeIn')
                    pg[1].setAttribute('class','page5 col-12 col-lg-3 animate__animated animate__fadeInLeft')
                    pg[2].setAttribute('class','page5 col-12 col-lg-3 animate__animated animate__fadeInUp')
                    pg[3].setAttribute('class','page5 col-12 col-lg-3 animate__animated animate__fadeInUp')
                    pg[4].setAttribute('class','page5 col-12 col-lg-3 animate__animated animate__fadeInRight')
                    break;
                case 6:break;

            }
        }, // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function (index) {


        }, // This option accepts a callback function. The function will be called after the page moves.
        loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
            keyboard: true, // You can activate the keyboard controls
        responsiveFallback: 1000, // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".

    });


    lightbox.option({
       'resizeDuration': 200
    });
});
function flush(){
    pg = document.getElementsByClassName("page2");
    pg[0].setAttribute('class','page2 col-lg-4  ')
    pg[1].setAttribute('class','page2 col-lg-8  ')
    pg = document.getElementsByClassName("page3");
    pg[0].setAttribute('class','page3 text-center  ')
    pg[1].setAttribute('class','page3 col-lg-4 col-md-6  ')
    pg[2].setAttribute('class','page3 col-lg-4 col-md-6  ')
    pg[3].setAttribute('class','page3 col-lg-4 col-md-6  ')
    pg[4].setAttribute('class','page3 col-lg-4 col-md-6  ')
    pg[5].setAttribute('class','page3 col-lg-4 col-md-6  ')
    pg[6].setAttribute('class','page3 col-lg-4 col-md-6  ')
    pg = document.getElementsByClassName("page4");
    pg[0].setAttribute('class','page4 text-center  ')
    pg[1].setAttribute('class','page4 col-lg-4 col-md-6  ')
    pg[2].setAttribute('class','page4 col-lg-4 col-md-6  ')
    pg[3].setAttribute('class','page4 col-lg-4 col-md-6  ')
    pg[4].setAttribute('class','page4 col-lg-4 col-md-6  ')
    pg[5].setAttribute('class','page4 col-lg-4 col-md-6  ')
    pg[6].setAttribute('class','page4 col-lg-4 col-md-6  ')
    pg = document.getElementsByClassName("page5");
    pg[0].setAttribute('class','page5 text-center ')
    pg[1].setAttribute('class','page5 col-12 col-lg-3 ')
    pg[2].setAttribute('class','page5 col-12 col-lg-3 ')
    pg[3].setAttribute('class','page5 col-12 col-lg-3 ')
    pg[4].setAttribute('class','page5 col-12 col-lg-3 ')
    pg = document.getElementsByClassName("page1");
    pg[0].setAttribute('class','page1 col-lg-4 ')
    pg[1].setAttribute('class','page1 col-lg-8 ')
}