define(function (require) {
    var echarts = require('echarts');
    var dao = require('dao');

    var ret = {
        chart: null
    };

    //取随机数组工具函数(获得固定数量的数组型数据)
    function getRadomNums(nums, min, max) {
        var _temp = [];

        for (var i = 0; i < nums; i++) {
            var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

            _temp.push(__temp__);
        }

        for (var i = 0; i < 24 - nums; i++) {
            _temp.push(0);
        }

        return _temp;
    }

    //获得一个随机数工具函数
    function getRandom(min, max) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
        return __temp__;
    }

    //
    ret.getOption = function (type) {
        return {
            textStyle: {
                color: 'white'
            },
            title: {
                text: '',
                textStyle: {
                    color: 'white'
                }
            },
            tooltip: {},
            xAxis: {
                type: 'category',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white'
                    }
                },
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1000,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white'
                    }
                },
            },
            series: [{
                type: type,
                name: '',
                data: getRadomNums(6, 100, 1000)
            }]
        }
    }

    ret.draw = function (type) {
        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption(type);

        ret.chart.setOption(option, true);
    }

    return ret;
})