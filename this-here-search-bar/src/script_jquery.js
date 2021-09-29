$(document).ready(function() {
  $("#search").on("click", function() {
    var searchText = $("#searchText").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchText + "&limit=10&namespace=0&format=json&callback=?";
    console.log(url);
    $.ajax({
      type:"GET", 
      url: url,
      async: false,
      dataType: "json",
      success: function(data) {
        for (var i=0; i<data[1].length; i++)
        $("#searchResults").append(
          "<br><a href='" + data[3][i] +"' class='text-format' target='_blank'><div class='well'><br><li class='searchResultTitle'>" + data[1][i] + "</li><li>" + data[2][i] + "</li><br></div></a>"
        );
      },
      error: function() {
        alert("There was an issue loading the Wikipedia API.");
      }
    });
  });
  $("#searchText").on("click", function() {
    $("#searchResults").html("");
  });
});