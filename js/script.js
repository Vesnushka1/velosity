const btn1 = document.getElementById("Sect4--button1");
const btn2 = document.getElementById("Sect4--button2");
const btn3 = document.getElementById("Sect4--button3");

const sect4Img1 = document.getElementById("Section--4__img1");
const sect4Img2 = document.getElementById("Section--4__img2");
const sect4Img3 = document.getElementById("Section--4__img3");

const title1 = document.getElementById("Sect4__title1");
const title2 = document.getElementById("Sect4__title2");
const title3 = document.getElementById("Sect4__title3");

const text1 = document.getElementById("Section--4__text1");
const text2 = document.getElementById("Section--4__text2");
const text3 = document.getElementById("Section--4__text3");



function active_btn(){
    btn1.onclick = function (){
        btn1.classList.add("section--4__buttons__active--button");
        btn1.classList.remove("section--4__buttons__noactive--button");
        btn2.classList.add("section--4__buttons__noactive--button")
        btn2.classList.remove("section--4__buttons__active--button") 
        btn3.classList.add("section--4__buttons__noactive--button");
        btn3.classList.remove("section--4__buttons__active--button");
        
        sect4Img1.style.display = "block";
        sect4Img2.style.display = "none";
        sect4Img3.style.display = "none";

        title1.style.display = "block";
        title2.style.display = "none";
        title3.style.display = "none";

        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
    }
    btn2.onclick = function (){
        btn2.classList.add("section--4__buttons__active--button");
        btn2.classList.remove("section--4__buttons__noactive--button");
        btn1.classList.add("section--4__buttons__noactive--button")
        btn1.classList.remove("section--4__buttons__active--button") 
        btn3.classList.add("section--4__buttons__noactive--button");
        btn3.classList.remove("section--4__buttons__active--button");

        sect4Img1.style.display = "none";
        sect4Img3.style.display = "none";
        sect4Img2.style.display = "block";
        
        title2.style.display = "block";
        title1.style.display = "none";
        title3.style.display = "none";

        text2.style.display = "block";
        text1.style.display = "none";
        text3.style.display = "none";
    }
    btn3.onclick = function (){
        btn3.classList.add("section--4__buttons__active--button");
        btn3.classList.remove("section--4__buttons__noactive--button");
        btn1.classList.add("section--4__buttons__noactive--button")
        btn1.classList.remove("section--4__buttons__active--button") 
        btn2.classList.add("section--4__buttons__noactive--button");
        btn2.classList.remove("section--4__buttons__active--button");

        sect4Img1.style.display = "none";
        sect4Img2.style.display = "none";
        sect4Img3.style.display = "block";

        title3.style.display = "block";
        title1.style.display = "none";
        title2.style.display = "none";

        text3.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
    }
}
active_btn()