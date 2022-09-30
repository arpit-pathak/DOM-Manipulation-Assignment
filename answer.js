//------------------------------ ans 1 -----------------------------------
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2 ").innerHTML = "iNeuron";
document.querySelector(".side-bar .crayons-card .color-base-70").innerHTML = "I Write Code" ;


//------------------------------ ans 2 -----------------------------------
let values = [];
for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".as-imagegrid-item-title .a11y")[i].innerText = "";
    values.push(
        document.querySelectorAll(".as-imagegrid-item-title")[i].textContent
        );
    }
    // printing the array
    for (let i = 0; i < 6; i++) {
        console.log(values[i]);
    }
   
    
//------------------------------ ans 3 -----------------------------------
const text = document.createTextNode("My New FAQ");
const h3 = document.createElement("h3");
h3.appendChild(text);
const section = document.createElement("section");
section.appendChild(h3);
section.classList.add("parent");
const accordion = document.querySelector(".accordion-homepage");
accordion.appendChild(section);


//------------------------------ ans 4 -----------------------------------
document.querySelector(".one-tel-number").innerText = "+91 123456789"

//------------------------------ ans 5 -----------------------------------
// my way                                                                               
var btn = document.querySelectorAll(".diwali-deals-product-sale-btn")
btn.forEach((btn)=>{btn.innerText = "Check out"})


//------------------------------ ans 6 -----------------------------------
var search = document.querySelector(".searchinput___19uW0")
// for creating hover effect i use both mouseover & mouseout events. 
document.querySelector(".searchinput___19uW0").style.backgroundColor = "red";
search.addEventListener("mouseout",() => {search.style.backgroundColor = "white"});


//------------------------------ ans 7 -----------------------------------             
const form = document.querySelector("#top-nav-search-form");
form.submit();


//------------------------------ ans 8 -----------------------------------
var arr = document.querySelectorAll("#SIvCob a")
// for in loop because arr is a object
for(let key in arr){if(key%2 == 0)arr[key].remove()}


//------------------------------ ans 9 -----------------------------------
document.getElementsByClassName("display-heading-1")[0].style.color = "#b1361e"
document.getElementsByClassName("display-heading-1")[0].style.fontFamily = "monospace"


//------------------------------ ans 10 -----------------------------------
let loginButton = document.getElementsByClassName("login-btn-text")[1]
loginButton.addEventListener("mouseover", ()=>{loginButton.style.backgroundColor = "blue"})


//------------------------------ ans 11 -----------------------------------
document.querySelector(".icon-logo").style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')";
// for changing title of logo
document.querySelector(".wrapper a").title = "ineuron"


//------------------------------ ans 12 -----------------------------------
document.querySelector(".btn-primary").style.backgroundColor = "blue"


//------------------------------ ans 13 -----------------------------------
document.querySelector(".fl-heading-text").innerHTML = "JSBOOTCAMP"


//------------------------------ ans 14 -----------------------------------
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "4rem";


//------------------------------ ans 15 -----------------------------------
// this code for when we want target a specific laptop model  "G15 Gaming Laptop" (in this case)
var heading = document.querySelectorAll(".ps-top .ps-title")
heading.forEach((e) => {if(e.innerText == 'G15 Gaming Laptop') e.style.textAlign = "right"} )

// for changing style in all elements(products)
var heading = document.querySelectorAll(".ps-top .ps-title")
heading.forEach((e) => {e.style.textAlign = "right"});


//------------------------------ ans 16 -----------------------------------
document.querySelector(".section-title_title__VEDfK").innerText = "Start with Scratch"


//------------------------------ ans 17 -----------------------------------
document.querySelector(".btn-container").innerText = new Date();


//------------------------------ ans 18 -----------------------------------
document.querySelector(".p-f03-footer-container").style.background = "orange"


//------------------------------ ans 19 -----------------------------------
const logoLink = document.querySelector(".logo").src


//------------------------------ ans 20 -----------------------------------
// for first element 
document.querySelector(".desc").style.color = "orange"          

// for all elements in website
document.querySelectorAll(".desc").forEach((e) =>{e.style.color = 'orange'})    

// @arpit-pathak