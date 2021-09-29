// provide functionality to the Wiki search API
// 1. listen to the form
// 2. 

const search = document.querySelector("#searchForm");

search.addEventListener("submit", (e) => {
    e.preventDefault();
    let entry = search.querySelector("#searchText").value;
    entry = entry.replace("_", " ");
    let url = `https://en.wikipedia.org/wiki/${entry}`;
    window.open(url);

    search.getElementById("searchText").value = "";
});                                     