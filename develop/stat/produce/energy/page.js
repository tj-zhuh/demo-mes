
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    var chart1 = require('chart1');
    var chart2 = require('chart2');
    var chart3 = require('chart3');
    var grid1 = require('grid1');
    var dao = require('dao');
    
    $(function () {

 

        chart1.draw();
        chart2.draw();
        chart3.draw();
        grid1.drawGrid();







    })
})