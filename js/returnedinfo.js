
async function msg() {
    const response = await fetch('http://localhost:8080/cityComparator');
    const myJson = await response.json(); //extract JSON from the http response
}
let searchParams=new URLSearchParams(window.location.search);
var city1 = (searchParams.get("city1"));
var city2 = (searchParams.get("city2"));
var sal1 = (searchParams.get("salary1"));
var sal2 = (searchParams.get("salary2"));

 req = {
    "city1": city1,
    "city2": city2,
    "country1": "Spain",
    "country2": "Spain",
    "amountCity1": sal1,
    "amountCity2": sal2
};

jQuery.ajax ({
    url: 'http://localhost:8080/cityComparator',
    type: "POST",
    data: JSON.stringify(req),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function(res){
       console.log(res);
        $("valueCity1").value = "66666"

    }
});

