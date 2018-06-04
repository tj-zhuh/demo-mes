
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    var grid1 = require('grid1');
    var dao = require('dao');
    

   
    $(function () {



        grid1.drawGrid();



    })
})