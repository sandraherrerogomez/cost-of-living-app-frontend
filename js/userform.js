$("#compareButton").click(function(e) {
    e.preventDefault();
var city1=$("#currentCity")[0].value;
var salaryCity1=$("#salaryCity1")[0].value;
var city2=$("#destinationCity")[0].value;
var salaryCity2=$("#salaryCity2")[0].value;

window.location.replace("returnedinfo.html?city1="+city1+"&city2="+city2+"&salary1="+salaryCity1+"&salary2="+salaryCity2);

});
