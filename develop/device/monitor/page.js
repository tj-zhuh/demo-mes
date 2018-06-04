
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    var chart1 = require('chart1');
    var dao = require('dao');
    

   
    $(function () {



        chart1.draw2();




    })
})