﻿
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    var chart1 = require('chart1');
    var dao = require('dao');
    

   
    $(function () {

        //dao.loadSelect(document.getElementById('select1'), dao.selectData1())

        //dao.loadSelect(document.getElementById('select2'), dao.selectData2())

        //dao.loadSelect(document.getElementById('select3'), dao.selectData3())

        //dao.loadSelect(document.getElementById('select4'), dao.selectData4())


        chart1.draw('bar');

        //document.getElementById('select4').onchange = function () {
            
        //    if(this.value === '柱状图')
        //        chart1.draw('bar')
        //    else if(this.value === '折线图')
        //        chart1.draw('line')
        //}








    })
})