function copyIP(){

    navigator.clipboard.writeText("play.deathcraft.ir");

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2000);

}const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.onscroll = function () {

        if (document.documentElement.scrollTop > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    };

    topBtn.onclick = function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    };

}/* ===== Typing Effect ===== */

const texts = [
    "بهترین سرور ماینکرفت فارسی",
    "BedWars حرفه‌ای",
    "Survival بدون لگ",
    "OneBlock هیجان‌انگیز",
    "SkyMine اختصاصی"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");

function typeText() {

    if (!typingElement) return;

    if (charIndex < texts[textIndex].length) {

        typingElement.textContent += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 70);

    } else {

        setTimeout(deleteText, 1800);

    }

}

function deleteText() {

    if (charIndex > 0) {

        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 35);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {

            textIndex = 0;

        }

        setTimeout(typeText, 300);

    }

}

window.addEventListener("load", () => {

    typeText();

});
console.log("Script Loaded");
console.log(document.getElementById("typing-text"));
