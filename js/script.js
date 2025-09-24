var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}




(function(){
    var headerText = document.querySelector('.header-text');
    var intro = document.querySelector('.intro');
    if(!headerText || !intro) return;
    function onScroll(){
        var viewportH = window.innerHeight;
        var scrolled = Math.min(window.scrollY || window.pageYOffset || 0, viewportH);
        var progress = scrolled / viewportH; // 0 -> 1 during first viewport scroll
        var translateY = -progress * viewportH; // move up to -100vh
        headerText.style.transform = 'translateY(' + translateY + 'px)';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();



var sm = document.getElementById("sidemenu");
function openmenu() {
    sm.style.right = "0";
}
function closemenu() {
    sm.style.right = "-200px";
}
