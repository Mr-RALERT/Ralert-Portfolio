// Start Side Bar :


// Select Ul Bar : 
let ulSide = document.querySelectorAll(".page .side-bar ul li");





ulSide.forEach((li) => {
    li.addEventListener("click",(e) => {
        if (e.target.dataset.tp) {
            window.open(`../${e.target.dataset.tp}`,"_self")
        }else {
            window.open(`../${e.target.parentElement.dataset.tp}`,"_self")
        }
    })
})



// Start Boxes Projects 


let boxesProject = document.querySelectorAll(".projects .box");

boxesProject.forEach((box) => {
    box.addEventListener("click",(e) => {
        if (e.target.dataset.link) {
            window.open(e.target.dataset.link)
        }else {
            window.open(e.target.parentElement.dataset.link)
        }
    })
})


