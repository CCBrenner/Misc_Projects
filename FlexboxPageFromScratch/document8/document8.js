function toggleNav() {
    let section1 = document.getElementById("section1");
    let toolbutton1 = document.getElementById("toolbutton1");
    if (section1.style.display === "none") {
        section1.style.display = "block";
    }
    else {
        section1.style.display = "none";
    }
}
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toolbutton2 = document.getElementById("toolbutton2");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    }
    else {
        sidebar.style.display = "none";
    }
}
function toggleFooter() {
    let section3 = document.getElementById("section3");
    let toolbutton3 = document.getElementById("toolbutton3");
    if (section3.style.display === "none") {
        section3.style.display = "block";
    }
    else {
        section3.style.display = "none";
    }
}
function toggleFullOptions() {
    let option1 = document.getElementById("toolbutton1");
    let option3 = document.getElementById("toolbutton3");
    let button = document.getElementById("sidebarbutton1")
    if (option1.style.display != "none") {
        option1.style.display = "none";
        option3.style.display = "none";
        button.textContent = "Full Options: false";
    } else {
        option1.style.display = "block";
        option3.style.display = "block";
        button.textContent = "Full Options: true";
    }
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