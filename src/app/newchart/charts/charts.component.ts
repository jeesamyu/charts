import { Component, OnInit, Type } from '@angular/core';
declare var google:any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(this.chartdetails);
  }


  chartdetails(): void{
  var data = new google.visualization.DataTable();
      data.addColumn('string', 'topings');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['benz', 3],
        ['tata', 2],
        ['bmw', 5], 
        ['lamborgini', 10],
        ['ferraris', 40]
      ]);

var stylish = {'title':'best selling cars',
'width':1800,
'height':600,
is3D:true};

      var chart = new google.visualization.AreaChart(document.getElementById('areachart'));
      chart.draw(data, stylish); 

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, stylish);

      var chart = new google.visualization.LineChart(document.getElementById('linechart'));
      chart.draw(data, stylish);

      var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
      chart.draw(data, stylish);
      


    }
  }
