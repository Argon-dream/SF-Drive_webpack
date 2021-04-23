// menu
export const menu = document.querySelector(".menu__mobile");
import {openMenu,closeMenu} from "./menu";


document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
    const menuBurger = document.querySelector(".mobile__burger");
    const menuCloseBtn = document.querySelector(".menu__mobile-close");
    menuBurger.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);


    // collapsible
    let coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

}