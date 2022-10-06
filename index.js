document.addEventListener('DOMContentLoaded' , () =>{
    Highcharts.chart('container', {
        xAxis: {
            categories: ['apple' , 'banana' , 'orenge']
        },
        series: [
            {
                name: 'jhon',
                data: [1 , 3 , 4]
            },
            {
                name:'jana',
                data: [2 , 5,7]
            }
        ]
    });
});