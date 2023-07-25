
let formbtn = document.querySelector("#transfer");
let backbtn = document.querySelector("#back");
let middlecontainer = document.querySelector(".ticket");
let middlecontainer2 = document.querySelector(".ticket01");
let middlecontainer1 = document.querySelector(".ticket02");
let map = document.querySelector(".map")


// formbtn.onclick = () =>{
//     middlecontainer1.classList.add('active');
//     middlecontainer2.classList.add('active');
    
//     setTimeout(() => {
//        middlecontainer.classList.add('active');

//    }, 2000)

// }


window.addEventListener("load", function (){
    formbtn.addEventListener("click", function() {
        middlecontainer.style.display = "block";
        map.style.display = "none";
        setTimeout(function() {
            middlecontainer.style.display = "none";
            middlecontainer1.style.display = "none";
            middlecontainer2.style.display = "block";
            map.style.display = "block";
        }, 2000);
    });
});





backbtn.onclick = () =>{
   middlecontainer2.style.display = "none";
   middlecontainer.style.display = "none";
   middlecontainer1.style.display = "block";
   map.style.display = "block";

}
