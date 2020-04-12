$("#compareButton").click(function(e) {
    e.preventDefault();
var city1=$("#currentCity")[0].value;
var salaryCity1=$("#salaryCity1")[0].value;
var city2=$("#destinationCity")[0].value;
var salaryCity2=$("#salaryCity2")[0].value;

    if(city1 === "" || city1 === null || city2 === "" || city2 === null || salaryCity1 === "" || salaryCity1 === null ||  salaryCity2 === "" || salaryCity2 === null){
        alert("The form its not filled");
        return;
    }


    if(city1===city2){
        alert("The value cannot be duplicate, please enter a different city to compare");
    }
    else{
window.location.replace("returnedinfo.html?city1="+city1+"&city2="+city2+"&salary1="+salaryCity1+"&salary2="+salaryCity2);
    }
});




jQuery.ajax ({
    url: 'http://localhost:8080/cities',
    type: "GET",


    success: function(res){

        var datos = (res);

        $( function() {
            $( "#currentCity" ).autocomplete({
                source: datos
            });
        } );

        $( function() {
            $( "#destinationCity" ).autocomplete({
                source: datos
            });
        } );

    }
});


