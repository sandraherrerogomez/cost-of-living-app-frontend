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

        var r = JSON.parse(res[0])
        console.log(r.amountCity1Numbeo)
        $("#valueCity1").text(r.amountCity1Numbeo+" €")
        $("#valueCity2").text(r.amountCity2Numbeo+" €")
        $("#nameCity1").text(r.city1Numbeo)
        $("#nameCity2").text(r.city2Numbeo)
        $("#salariesCompare").html("You will need <b>"+r.amountCity2Numbeo+"€</b> in <b>"+r.city2Numbeo+ "</b> to have same cost of living than in <b>"+
            r.city1Numbeo+"</b> with <b>"+r.amountCity1Numbeo+ "</b>€")
    }
});


