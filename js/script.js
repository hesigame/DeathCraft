function copyIP(){

    navigator.clipboard.writeText("play.deathcraft.ir");

    alert("IP سرور کپی شد!");

}
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}