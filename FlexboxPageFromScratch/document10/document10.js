let headerFooterHeight = 50;
let navbarHeight = headerFooterHeight;
let footerHeight = headerFooterHeight;

let navbarStatus = true;
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
        if (navbarStatus == true) {
            navbarStatus = false;
            navbarOff();
        }
        else {
            navbarStatus = true;
            navbarOn();
        }
    }
    else {
        if (setterStatus) {
            navbarStatus = true;
            navbarOn();
        }
        else {
            navbarStatus = false;
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

    for (let i=0; i < areas.length; i++) {
        let area = areas[i]
        if (i < amtOfAreas) {
            document.getElementById(area).style.display = "flex";
        }
        else {
            document.getElementById(area).style.display = "none";
        }
    }
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
let triggerPopup = () => {
    let popup = document.createElement("div");
    popup.classList.add("section2I", "sec2");
    popup.style.display = "fixed";
    popup.style.backgroundColor = "black";
    popup.style.left = 0;
    popup.style.right = 0;
    popup.style.bottom = 0;
    popup.style.top = 0;
    // popup.style.width = "100%";
    // popup.style.height = "100%";
    popup.style.zIndex = 1;
    // popup.style.display = "flex";
    // popup.style.flexFlow = "row wrap";
    // popup.style.justifyContent = "center";
    // popup.style.alignItems = "center";
    
    let popupWindow = document.createElement("div");
    popupWindow.style.padding = 20;
    popupWindow.textContent = "This is a freaking popup window!";

    popup.innerHTML = popupWindow;

    document.getElementsByClassName("main-content").appendChild(popup);
}
let resizeWindow = () => {
    resizeTo(300, 300);
}