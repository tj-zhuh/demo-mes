require.config({
    paths: config.getPaths(3)
})

define(function (require) {
    var $ = require('jquery');
    //var grid1 = require('grid1');

    $('#query').click(function () {
        $('#table11 #deviceTableName').html($('#deviceList option:selected').html());
    });

    //$(function () {
    //    grid1.drawGrid();
    //})
})