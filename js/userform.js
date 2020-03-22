$("#compareButton").click(function(e) {
    e.preventDefault();
var city1=$("#currentCity")[0].value;
var salaryCity1=$("#salaryCity1")[0].value;
var city2=$("#destinationCity")[0].value;
var salaryCity2=$("#salaryCity2")[0].value;

window.location.replace("returnedinfo.html?city1="+city1+"&city2="+city2+"&salary1="+salaryCity1+"&salary2="+salaryCity2);

});




let datos;
$.get("http://localhost:8080/cities", function(data, status){
    console.log(data);
     datos = JSON.parse(data);
});

$("#currentCity").autocomplete({
    lookup: datos,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
    }
});
