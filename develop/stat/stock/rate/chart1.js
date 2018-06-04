

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
                text: '2014年库存走势分析(月份)',
                textStyle: {
                    color: 'white'
                },
            },
            tooltip:{},
           
            series: [{
                type: 'pie',
                name: '',
                data: [
                    { name: '原材料库', value: getRandom(10, 120) },
                    { name: '行政采购库', value: getRandom(10, 120) },
                    { name: '锻件、铸件库', value: getRandom(10, 120) },
                    { name: '整箱外协件库', value: getRandom(10, 120) },
                    { name: '五金库', value: getRandom(10, 120) },
                ],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: 'white'
                        },
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'white'
                        }
                    }
                }
            }]
        }
    }


    ret.draw = function () {

        if (ret.chart)
            ret.chart.clear();

        ret.chart = echarts.init(document.getElementById('chart1'));

        var option = ret.getOption();

        ret.chart.setOption(option,true);

    }

    return ret;

})





















