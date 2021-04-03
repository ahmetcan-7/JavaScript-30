//give an affect when page scroll

AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});

const line = document.querySelector(".line")
const navUl = document.querySelector(".line ul");
const navli = document.querySelectorAll(".line li");
const nava = document.querySelectorAll(".line a");
const newli = document.createElement("li");
var myVar = null;
var adam;

let copyLi = [];
navli.forEach((li) => {
    li.classList.remove("info");
    copyLi.push(li);
})

console.log(copyLi);


//changing information text 

function index() {



    if (window.outerWidth < 1100) {
        navUl.innerHTML = "";
        navUl.appendChild(copyLi[0]);
        let i = 1;
        adam = setInterval(() => {
            navUl.innerHTML = "";
            navUl.appendChild(copyLi[i]);
            i += 1;
            if (i == copyLi.length) {
                i = 0;
            }

        }, 2000);


    } else {
        clearInterval(adam);
        navUl.innerHTML = "";
        navli.forEach((li) => {
            navUl.appendChild(li);
        })




    }

}

index();
window.addEventListener("resize", index);

