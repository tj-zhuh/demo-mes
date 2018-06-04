

define(function (require) {

    var $ = require('jquery');
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

    //随机颜色工具函数
    function getColorjichuang() {

        var pp = getRandom(0, 120);

        if(pp<=33)
            return 'redK'
        else if(pp>=33&&pp<=66)
            return 'yellowK'
        else if(pp>=66)
            return 'greenK'
    }

    function showDivInfo() {
        if ($('#dianjishijian').hasClass('display')) {
            $('#dianjishijian').removeClass('display');

            //change its position
            var _X = event.clientX;
            var _Y = event.clientY;

            $('#dianjishijian').css('top', _Y + 'px');
            $('#dianjishijian').css('left', _X + 'px');
        }
    }

    function hideIt() {
        $('#dianjishijian').addClass('display');
    }

    //
    ret.getOption = function (type) {
        return {
            title: {
                text:'2014年库存走势分析(月份)'
            },
            tooltip:{},
            xAxis: {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1000
            },
            series: [{
                type: type,
                name: '',
                data: getRadomNums(12,100,1000)
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

    ret.draw2 = function () {

        //#kuaC5
        for (var i = 0; i < 8; i++) {
            var img = $('<div class="' + getColorjichuang() + '"></div>');
            $('#kuaC5').append(img);
            img.dblclick(function () {
                showDivInfo();
            })
        }
     
        //#kuaC4
        for (var i = 0; i < 6; i++) {
            var img = $('<div class="' + getColorjichuang() + '"></div>');
            $('#kuaC4').append(img);
            img.dblclick(function () {
                showDivInfo();
            })
        }


        //#kuaC3
        for (var i = 0; i < 10; i++) {
            var img = $('<div class="' + getColorjichuang() + '"></div>');
            $('#kuaC3').append(img);
            img.dblclick(function () {
                showDivInfo();
            })
        }


        //#kuaC2
        for (var i = 0; i < 5; i++) {
            var img = $('<div class="' + getColorjichuang() + '"></div>');
            $('#kuaC2').append(img);
            img.dblclick(function () {
                showDivInfo();
            })
        }

        //#kuaC1
        for (var i = 0; i < 7; i++) {
            var img = $('<div class="' + getColorjichuang() + '"></div>');
            $('#kuaC1').append(img);
            img.dblclick(function () {
                showDivInfo();
            })
        }


        document.onclick = function () {
            hideIt();
        }

    }






    return ret;

})





















