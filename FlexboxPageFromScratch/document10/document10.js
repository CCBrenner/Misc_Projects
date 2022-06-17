let veritcleIntersect = 50;
let navBodyIntersect = veritcleIntersect;
let bodyFooterIntersect = veritcleIntersect;

let navbarStatus = true;
let sidebarStatus = true;
let fullOptionsStatus = true;
let footerStatus = true;

function toggleNav() {
    let section1 = document.getElementById("section1");
    let r = document.querySelector(":root");
    if (navbarStatus == true) {
        navbarStatus = false;
        r.style.setProperty("--nav-body-intersect", "0px");
        // section1.style.display = "none";
    }
    else {
        navbarStatus = true;
        section1.style.display = "flex";
        r.style.setProperty("--nav-body-intersect", `${navBodyIntersect}px`);
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
    document.querySelector(":root").style.setProperty("--body-footer-intersect", `${bodyFooterIntersect}px`);
}
let footerOff = () => {
    document.querySelector(":root").style.setProperty("--body-footer-intersect", "0px");
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
let toggleAll = () => {
    toggleNav();
    setSidebar("toggle");
    setFullOptions("toggle");
    setFooter("toggle");
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
let areas2 = (val) => {
    let selectedAreas = document.getElementById("sidebarbutton3");
    let areaOptions = document.querySelector("#areaOptions");
    let twoA = document.getElementById("section2A");
    let twoB = document.getElementById("section2B");
    let twoC = document.getElementById("section2C");
    let twoD = document.getElementById("section2D");
    let twoE = document.getElementById("section2E");
    let twoF = document.getElementById("section2F");
    let twoG = document.getElementById("section2G");
    let twoH = document.getElementById("section2H");
    switch (val) {
        case "A":
            twoA.style.display = "flex";
            twoB.style.display = "none";
            twoC.style.display = "none";
            twoD.style.display = "none";
            twoE.style.display = "none";
            twoF.style.display = "none";
            twoG.style.display = "none";
            twoH.style.display = "none";
            selectedAreas.textContent = "Selected: 1 Area";
            areaOptions.style.display = "none";
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
            selectedAreas.textContent = "Selected: 2 Areas";
            areaOptions.style.display = "none";
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
            selectedAreas.textContent = "Selected: 3 Areas";
            areaOptions.style.display = "none";
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
            selectedAreas.textContent = "Selected: 4 Areas";
            areaOptions.style.display = "none";
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
            selectedAreas.textContent = "Selected: 5 Areas";
            areaOptions.style.display = "none";
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
            selectedAreas.textContent = "Selected: 6 Areas";
            areaOptions.style.display = "none";
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
            selectedAreas.textContent = "Selected: 7 Areas";
            areaOptions.style.display = "none";
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
            selectedAreas.textContent = "Selected: 8 Areas";
            areaOptions.style.display = "none";
            break;
    }
}
let showAreaOptions = () => {
    let areaOptions = document.getElementById("areaOptions");
    if (areaOptions.style.display == "block"){
        areaOptions.style.display = "none";
    }
    else {
        areaOptions.style.display = "block";
    }
}