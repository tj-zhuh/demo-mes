
require.config({
    paths: config.getPaths(3)
})

define(function (require) {

    var $ = require('jquery');
    //var grid1 = require('grid1');
    var dao = require('dao');
    
    //取随机数组工具函数(获得固定数量的数组型数据)
    function getRadomNums(nums, min, max) {
        var _temp = [];

        for (var i = 0; i < nums; i++) {
            var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

            _temp.push(__temp__);
        }

        return _temp;
    }

    //获得一个随机数工具函数
    function getRandom(min, max) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
        return __temp__;
    }

   
    $(function () {

        dao.loadSelect(document.getElementById('select1'), dao.selectData1())


        for (var i = 0; i < 22; i++) {
            if (i === 0) {
                for (var j = 0; j < 30; j++) {
                    var th = $('<th>');
                    th.html(j+1);
                    $('#tr1').append(th);
                }
            }
            else {
                for (var j = 0; j < 30; j++) {
                    var td = $('<td>');
                    td.html(getRandom(0, 100));
                    var pp = $('#tr' + (i+1));
                    pp.append(td);
                }

            }
        }
        //grid1.drawGrid();



    })
})