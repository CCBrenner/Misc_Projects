let headerFooterHeight = 50;
let navbarHeight = headerFooterHeight;
let footerHeight = headerFooterHeight;

let navbarVisible = true;
let sidebarStatus = true;
let fullOptionsStatus = true;
let footerStatus = true;

let navbarOn = () => {
    document.getElementById("navbar").style.display = "flex";
    document.querySelector(":root").style.setProperty("--navbar-height", `${navbarHeight}px`);
}
let navbarOff = () => {
    document.querySelector(":root").style.setProperty("--navbar-height", "0px");
}
let setNavbar = (setterStatus) => {
    if (setterStatus == "toggle") {
        if (navbarVisible == true) {
            navbarVisible = false;
            navbarOff();
        }
        else {
            navbarVisible = true;
            navbarOn();
        }
    }
    else {
        if (setterStatus) {
            navbarVisible = true;
            navbarOn();
        }
        else {
            navbarVisible = false;
            navbarOff();
        }
    }
}
let sidebarOn = () => {
    document.querySelector(":root").style.setProperty("--sidebar-width", "200px");
}
let sidebarOff = () => {
    document.querySelector(":root").style.setProperty("--sidebar-width", "0px");
}
let setSidebar = (setterStatus) => {
    if (setterStatus == "toggle") {
        if (sidebarStatus == true){
            sidebarStatus = false;
            sidebarOff();
        }
        else {
            sidebarStatus = true;
            sidebarOn();
        }
    }
    else {
        if (setterStatus) {
            sidebarStatus = true;
            sidebarOn();
        }
        else {
            sidebarStatus = false;
            sidebarOff();
        }
    }
}
let fullOptionsOn = () => {
    let option1 = document.getElementById("toolbutton1");
    let option3 = document.getElementById("toolbutton3");
    let button = document.getElementById("sidebarbutton1");
    option1.style.display = "block";
    option3.style.display = "block";
    button.textContent = "Full Options: true";
}
let fullOptionsOff = () => {
    let option1 = document.getElementById("toolbutton1");
    let option3 = document.getElementById("toolbutton3");
    let button = document.getElementById("sidebarbutton1");
    option1.style.display = "none";
    option3.style.display = "none";
    button.textContent = "Full Options: false";
}
let setFullOptions = (setterStatus) => {
    if (setterStatus == "toggle") {
        if (fullOptionsStatus == true) {
            fullOptionsStatus = false;
            fullOptionsOff();
        } else {
            fullOptionsStatus = true;
            fullOptionsOn();
        }
    }
    else {
        if (setterStatus) {
            fullOptionsStatus = true;
            fullOptionsOn();
        }
        else {
            fullOptionsStatus = false;
            fullOptionsOff();
        }
    }
}
let openWindow = () => {
    document.getElementById("overlayWindowContainer").style.height = "100%";
    document.getElementById("overlayWindowContainer").style.visibility = "visible";
}
let closeWindow = () => {
    document.getElementById("overlayWindowContainer").style.height = 0;
    document.getElementById("overlayWindowContainer").style.visibility = "hidden";
}
let footerOn = () => {
    document.querySelector(":root").style.setProperty("--footer-height", `${footerHeight}px`);
}
let footerOff = () => {
    document.querySelector(":root").style.setProperty("--footer-height", "0px");
}
let setFooter = (setterStatus) => {
    // takes "toggle", true, or false
    if (setterStatus == "toggle") {
        if (footerStatus == true) {
            footerStatus = false;
            footerOff();
        }
        else {
            footerStatus = true;
            footerOn();
        }
    }
    else {
        if (setterStatus) {
            footerStatus = true;
            footerOn();
        }
        else {
            footerStatus = false;
            footerOff();
        }
    }    
}
let setAll = (navbar, sidebar, fullOptions, footer) => {
    setNavbar(navbar);
    setSidebar(sidebar);
    setFullOptions(fullOptions);
    setFooter(footer);
}
function areas() {
    // this button is used less and is kept heere as an example of 
    // what isn't the best option
    let selection = document.getElementById("areasSelector").value;
    let twoA = document.getElementById("section2A");
    let twoB = document.getElementById("section2B");
    let twoC = document.getElementById("section2C");
    let twoD = document.getElementById("section2D");
    let twoE = document.getElementById("section2E");
    let twoF = document.getElementById("section2F");
    let twoG = document.getElementById("section2G");
    let twoH = document.getElementById("section2H");

    switch (selection) {
        case "A":
            twoA.style.display = "flex";
            twoB.style.display = "none";
            twoC.style.display = "none";
            twoD.style.display = "none";
            twoE.style.display = "none";
            twoF.style.display = "none";
            twoG.style.display = "none";
            twoH.style.display = "none";
            break;
        case "B":
            twoA.style.display = "flex";
            twoB.style.display = "flex";
            twoC.style.display = "none";
            twoD.style.display = "none";
            twoE.style.display = "none";
            twoF.style.display = "none";
            twoG.style.display = "none";
            twoH.style.display = "none";
            break;
        case "C":
            twoA.style.display = "flex";
            twoB.style.display = "flex";
            twoC.style.display = "flex";
            twoD.style.display = "none";
            twoE.style.display = "none";
            twoF.style.display = "none";
            twoG.style.display = "none";
            twoH.style.display = "none";
            break;
        case "D":
            twoA.style.display = "flex";
            twoB.style.display = "flex";
            twoC.style.display = "flex";
            twoD.style.display = "flex";
            twoE.style.display = "none";
            twoF.style.display = "none";
            twoG.style.display = "none";
            twoH.style.display = "none";
            break;
        case "E":
            twoA.style.display = "flex";
            twoB.style.display = "flex";
            twoC.style.display = "flex";
            twoD.style.display = "flex";
            twoE.style.display = "flex";
            twoF.style.display = "none";
            twoG.style.display = "none";
            twoH.style.display = "none";
            break;
        case "F":
            twoA.style.display = "flex";
            twoB.style.display = "flex";
            twoC.style.display = "flex";
            twoD.style.display = "flex";
            twoE.style.display = "flex";
            twoF.style.display = "flex";
            twoG.style.display = "none";
            twoH.style.display = "none";
            break;
        case "G":
            twoA.style.display = "flex";
            twoB.style.display = "flex";
            twoC.style.display = "flex";
            twoD.style.display = "flex";
            twoE.style.display = "flex";
            twoF.style.display = "flex";
            twoG.style.display = "flex";
            twoH.style.display = "none";
            break;
        case "H":
            twoA.style.display = "flex";
            twoB.style.display = "flex";
            twoC.style.display = "flex";
            twoD.style.display = "flex";
            twoE.style.display = "flex";
            twoF.style.display = "flex";
            twoG.style.display = "flex";
            twoH.style.display = "flex";
            break;
    }
}
let areas2 = (amtOfAreas) => {
    
    let areas = ["section2A", "section2B", "section2C", "section2D", "section2E", "section2F", "section2G", "section2H"];
    let areaCount = 0;

    // foreach will not work here; you need the i for the if's conditional statement
    for (let i=0; i < areas.length; i++) {
        let area = areas[i]
        if (i < amtOfAreas) {
            document.getElementById(area).style.display = "flex";
            areaCount++;
        }
        else {
            document.getElementById(area).style.display = "none";
        }
    }

    let s = (areaCount == 1) ? "" : "s";
    document.getElementById("sidebarbutton3").textContent = `Selected: ${areaCount} Area${s}`;
}
let areaOptionsDropdown = () => {
    let areaOptions = document.getElementById("areaOptions");
    if (areaOptions.style.display == "block"){
        areaOptions.style.display = "none";
    }
    else {
        areaOptions.style.display = "block";
    }
}
let resizeWindow = () => {
    resizeTo(300, 300);
}


// KEEP AT BOTTOM OF JS SCRIPT:
let loadingCompleted = () => {
    document.getElementById("loadingScreen").style.height = 0;
    document.getElementById("loadingScreen").style.visibility = "hidden";
}
loadingCompleted();
