document.getElementById("open-popup").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
})

document.getElementById("dismiss-popup-btn").addEventListener("click", function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
})

function toggle(){
   var blur = document.getElementById('overlay');
   blur.classList.toggle('active')
   var popup = document.getElementById('popup-section');
   popup.classList.toggle('active')
}