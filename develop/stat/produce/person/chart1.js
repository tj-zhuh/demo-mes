

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
                data: ['张博超', '王博超', '李博超', '谢博超', '接博超', '快博超', '朱博超', '文博超', '赵博超', '欧阳博超', '张军', '于博超']
            },
            grid: {
                top: '6%',
                bottom: '15%',
                left: '10%',
                right:'10%'
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
                }
            },
            series: [{
                type: type,
                name: '',
                data: getRadomNums(12,100,1000),
                label: {
                    normal: {
                        show: 1,
                        position:'inside'
                    }
                }
            }]
        }
    }


    ret.draw = function (type) {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption(type);

        ret.chart.setOption(option,true);

    }

    return ret;

})





















