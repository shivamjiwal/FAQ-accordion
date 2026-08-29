const sections = document.querySelectorAll(".section")
const plusIcon = document.querySelectorAll(".plus-icon")
// const info = document.querySelectorAll(".info")
let answers = [`<p class = "info">
                    Frontend Mentor offers realistic coding challenges to help developers improve their 
                    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                    all levels and ideal for portfolio building.
                </p>`, `<p class = "info">
                    Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                    option providing access to a range of projects suitable for all skill levels.
                </p>`, `<p class = "info">
                    Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                    way to showcase your skills to potential employers!
                </p>`, `<p class = "info">
                    The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                    channel where you can ask questions and seek support from other community members.
                </p>`]

for(let i=0; i < plusIcon.length; i++){
plusIcon[i].addEventListener("click", function(){
    // console.log("icon clicked")
    plusIcon[i].src = "assets/images/icon-minus.svg";
    plusIcon[i].alt = "Collapse Icon"
    const existingAnswers = sections[i].querySelector(".info")
        if(!existingAnswers){
            sections[i].insertAdjacentHTML("beforeend", answers[i])
        // sections[i].innerHTML += answers[i]
        }else{
             plusIcon[i].src = "assets/images/icon-plus.svg"
             plusIcon[i].alt = "Expand icon"
             existingAnswers.remove();
        }

    
})
}