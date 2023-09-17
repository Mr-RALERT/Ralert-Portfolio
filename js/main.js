

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






// Start Setting Box :
let settingBox = document.querySelector(".setting-box");
let settingBtn = document.querySelector(".setting-box .btn");

settingBtn.addEventListener("click",(e) => {
    settingBox.classList.toggle("active")
})


let pages  = ["home" , "about" , "skills" , "projects" , "contact"];

document.body.addEventListener("click",(e) => {
    if (pages.includes(e.target.classList[0])) {
        settingBox.classList.remove("active")        
    }
})








// Start Colors : 

let colors = document.querySelectorAll(".setting-box .setting-container .box ul li")

colors.forEach((li) => {
    li.style.backgroundColor = `${li.dataset.color}`
    li.addEventListener("click",(e) => {
        colors.forEach((li) => {
            li.classList.remove("active")
        })
        e.target.classList.add("active")
        document.documentElement.style.setProperty("--green-color",e.target.dataset.color)
        window.localStorage.setItem("color",e.target.dataset.color)
    })  
})


// Start Background :
let wallpaper = document.querySelectorAll(".setting-box .setting-container .box .back-count img");

wallpaper.forEach((img) => {
    img.addEventListener("click",() => {
        document.body.style.cssText = `background-image : url(../images/${img.dataset.na});`
        window.localStorage.setItem("back",img.dataset.na)
    })
})


// Start Sidebar "min-active"


let btnsSide = document.querySelectorAll(".setting-box .setting-container .box .sideCont span");
let sidebar = document.querySelector(".page .side-bar");

btnsSide.forEach((sp) => {
    sp.addEventListener("click",(e) => {
        btnsSide.forEach((sp) => {
            sp.classList.remove("active")
        })
        e.target.classList.add("active")
        if (e.target.dataset.ch == "big") {
            window.localStorage.setItem("sidebar","big")
            sidebar.classList.remove("min-active")
        }else if (e.target.dataset.ch == "min") {
            window.localStorage.setItem("sidebar","min")
            sidebar.classList.add("min-active")
        }
    })
})





// Start Window Local Storage : 

window.onload = function () {
    if (window.localStorage.length != 0) {
        if (window.localStorage.getItem("color")) {
            document.documentElement.style.setProperty("--green-color",window.localStorage.getItem("color"));
            colors.forEach((li) => {
                li.classList.remove("active")
                if (li.dataset.color == window.localStorage.getItem("color")) {
                    li.classList.add("active")
                }
            })
            
        }
        if (window.localStorage.getItem("sidebar")) {
            if (window.localStorage.getItem("sidebar") == "big") {
                sidebar.classList.remove("min-active")
            } else {
                sidebar.classList.add("min-active")
            }
            btnsSide.forEach((sp) => {
                sp.classList.remove("active")
                if (sp.dataset.ch == window.localStorage.getItem("sidebar")) {
                    sp.classList.add("active")
                }
            })
        }
        if (window.localStorage.getItem("back")) {
            document.body.style.cssText = `background-image : url(../images/${window.localStorage.getItem("back")});`
        }
    }
}

        


