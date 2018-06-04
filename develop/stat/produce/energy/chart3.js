

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
                text: '月总费用对比',
                textStyle: {
                    color: 'white'
                },
            },
            tooltip:{},
            xAxis: {
                type: 'category',
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white'
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
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
            grid: {
                top: '10%',
                bottom: '10%',
                left: '20%',
                right: '20%'
            },
            series: [{
                type: 'bar',
                name: '',
                data: getRadomNums(12,100,1000)
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart3'));

        var option = ret.getOption(type);

        ret.chart.setOption(option,true);

    }

    return ret;

})





















