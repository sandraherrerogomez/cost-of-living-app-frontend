let searchParams=new URLSearchParams(window.location.search);
var city1 = (searchParams.get("city1"));
var country1 = (searchParams.get("country1"));
var country2 = (searchParams.get("country2"));
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


function renderBars(res){

    var rIndexes = JSON.parse(res[3]);
    var rIndexes2 = JSON.parse(res[4]);
    new Chart($("#groupedBars"), {
        type: 'bar',
        data: {
            labels: ["Crime", "Traffic Time", "Health care", "Pollution", "CPI Rent", "Climate", "Safety"],
            datasets: [
                {
                    label: city1,
                    backgroundColor: "#3e95cd",
                    data: [rIndexes.crime_index,rIndexes.traffic_time_index,rIndexes.health_care_index,rIndexes.pollution_index, rIndexes.cpi_and_rent_index, rIndexes.climate_index, rIndexes.safety_index ]
                }, {
                    label: city2,
                    backgroundColor: "#8e5ea2",
                    data: [rIndexes2.crime_index,rIndexes2.traffic_time_index,rIndexes2.health_care_index,rIndexes2.pollution_index, rIndexes2.cpi_and_rent_index, rIndexes2.climate_index, rIndexes2.safety_index ]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'City Indexes compared with New York (100)'
            }
        }
    });

}

function renderChart(res){
    Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#858796';

    var rSal2 = JSON.parse(res[2]);
    var rSal1 = JSON.parse(res[1]);
    $("#chartTitle1").text("Salary Taxes Distribution " +city1 +", " +country1);
    $("#chartTitle2").text("Salary Taxes Distribution " +city2 +", " +country2);

    var ctx =   $("#COLChart")
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Taxes", "Net"],
            datasets: [{
                data: [sal1/12-rSal1.netSalary, rSal1.netSalary],
                backgroundColor: ['#4e73df', '#1cc88a'],
                hoverBackgroundColor: ['#2e59d9', '#17a673'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        },
    });



    var ctx =   $("#COLChart2")
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Taxes", "Net"],
            datasets: [{
                data: [sal2/12-rSal2.netSalary, rSal2.netSalary],
                backgroundColor: ['#4e73df', '#1cc88a'],
                hoverBackgroundColor: ['#2e59d9', '#17a673'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
            },
            legend: {
                display: false
            },
            cutoutPercentage: 80,
        },
    });



}



function renderSalaries(res){
    var r = JSON.parse(res[0]);
    var rSal1 = JSON.parse(res[1]);
    var rSal2 = JSON.parse(res[2]);


    $("#valueCity1").text(r.amountCity1Numbeo + "€");
    $("#valueCity2").text(r.amountCity2Numbeo + "€");
    $("#nameCity1").text("Salary in " + r.city1Numbeo);
    $("#nameCity2").text("Required Salary in "+ r.city2Numbeo+" to match " + r.city1Numbeo);
    // Madrid 15k Bcn 18k      ---- Numbeo 21
    var res = sal2 < r.amountCity2Numbeo ? r.city1Numbeo : r.city2Numbeo;
    var rateDif = sal2/r.amountCity2Numbeo;

    $("#salariesCompare").html("You will need <b>"+r.amountCity2Numbeo+"€</b> in <b>"+r.city2Numbeo+ "</b> to have same cost of living than in <b>"+
        r.city1Numbeo+"</b> with <b>"+r.amountCity1Numbeo+ "</b>€ , As your estimated salary for " + city2 + " is <b>" +sal2 + "€</b> , you will have a better economic level of life in <b>" +res  + "</b> <br> Your expected salary its " + rateDif.toFixed(2) + " times the required salary in <b> "+r.city2Numbeo +"</b> to match the level of income in <b>"+city1 +"</b>.");


    $("#netSal1title").text("Monthly Net Salary in " + city1 + ", " + rSal1.countryName)
    $("#netSal1").text(rSal1.netSalary + " €")
    $("#netSalTitle2").text("Monthly Net Salary in " + city2 + ", " + rSal2.countryName)
    $("#netSal2").text(rSal2.netSalary + " €")
}

function renderGroceries(res){
    console.log(JSON.parse(res[5]))
    var rGroceries = JSON.parse(res[5]);
    var rGroceries2 = JSON.parse(res[6]);

    new Chart(document.getElementById("priceGroceries"), {
        type: 'line',
        data: {
            labels: ["Crime", "Traffic Time", "Health care", "Pollution", "CPI Rent", "Climate", "Safety"],
            datasets: [ {
                data: [rIndexes.crime_index,rIndexes.traffic_time_index,rIndexes.health_care_index,rIndexes.pollution_index, rIndexes.cpi_and_rent_index, rIndexes.climate_index, rIndexes.safety_index ],
                label: city1,
                borderColor: "#3cba9f",
                fill: false
            },  {
                data: [rIndexes2.crime_index,rIndexes2.traffic_time_index,rIndexes2.health_care_index,rIndexes2.pollution_index, rIndexes2.cpi_and_rent_index, rIndexes2.climate_index, rIndexes2.safety_index ],
                label: city2,
                borderColor: "#c45850",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        }
    });

}


jQuery.ajax ({
    url: 'http://localhost:8080/cityComparator',
    type: "POST",
    data: JSON.stringify(req),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function(res){

        renderSalaries(res);
        renderChart(res);
        renderBars(res);
        renderGroceries(res);

        console.log(res)

    }
});
