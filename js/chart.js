plastin=1300;
jwish=1400;
total=plastin+jwish

series=[plastin/total*100, jwish/total*100]
var options = {
    chart: {
        type: 'pie',
        width: '100%',
        height: 500
    },
    series,
    labels: ['Palestine', 'Jewish'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
