// Start Side Bar :


// Select Ul Bar : 
let ulSide = document.querySelectorAll(".page .side-bar ul li");





ulSide.forEach((li) => {
    li.addEventListener("click",(e) => {
        if (e.target.dataset.tp) {
            window.open(`../Ralert-Portfolio/${e.target.dataset.tp}`,"_self")
        }else {
            window.open(`../Ralert-Portfolio/${e.target.parentElement.dataset.tp}`,"_self")
        }
    })
})
