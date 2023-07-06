// Import stylesheets
import './style.css';

// Write Javascript code!

d3.csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv", function(error, data)
{
if(error){console.log("Error al leer el fichero titanic.csv");
} else {
//Incorporación de gráficos
// .....
var visualization = d3plus.viz()
  .container("#viz")
  .data([{"year": 1991, "name":"alpha", "value": 15},
  {"year": 1992, "name":"alpha", "value": 20},])
  .type("bar")
  .id("name")
  .x("year")
  .y("value")
  .draw()
}
});

d3.json("https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json", function(data) {
var visualization = d3plus.viz()
.container("#viz1")
.data(data)
.type('bar')
.id('name')
.x('year')
.y('value')
.axes({ ticks: 'false' })
.draw();
});


var data1 = [
{"year": 1991, "name": "alpha", "value": 15}, 
{"year": 1992, "name": "alpha","value": 34},
{"year": 1991,"'name": "alpha2", "value": 17},
{"year": 1992,"name": "alpha2", "value": 65},
{"year": 1991, "name": "beta","value": 10},
{"year": 1992, "name": "beta","value": 10},
{"year": 1991, "name": "beta2", "value": 40},
{"year": 1992, "name": "beta2", "value": 38},
{"year": 1991, "name": "gamma",  "value": 5},
{"year": 1992, "name": "gamma", "value": 10},
{"year": 1991, "name": "gamma2", "value": 20},
{"year": 1992, "name": "gamma2", "value": 34},
{"year": 1991, "name": "delta", "value": 50},
{"year": 1992, "name": "delta",  "value": 43},
{"year": 1991, "name": "delta2", "value": 17},
{"year": 1992, "name": "delta2",  "value": 35}
]


var visualization = d3plus.viz()
.container("#viz2")
.data(data1)
.type('box')
.id('name')
.x('year')
.y('value')
.draw();
