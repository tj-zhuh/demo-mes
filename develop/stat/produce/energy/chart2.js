

define(function (require) {

    var echarts = require('echarts');
    var dao = require('dao');

    var ret = {
        chart:null
    };

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

    //
    ret.getOption = function () {
        return {
            textStyle: {
                color: 'white'
            },
            title: {
                text: '水电汽总费用',
                textStyle: {
                    color: 'white'
                },
            },
            tooltip:{},
            legend: {
                data: ['水', '电', '汽'],
                orient: 'vertical',
                right: '5%',
                top: '5%',
                textStyle: {
                    color: 'white'
                },
            },
            series: [{
                type: 'pie',
                name: '',
                data: [
                    { name: '水', value: getRandom(10, 100) },
                    { name: '电', value: getRandom(10, 100) },
                    { name: '汽', value: getRandom(10, 100) }
                ]
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart2'));

        var option = ret.getOption(type);

        ret.chart.setOption(option,true);

    }

    return ret;

})





















