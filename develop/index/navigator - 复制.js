﻿
var Page = {

    //navigator:
    ver: '',

    //
    support: null,

    //检验浏览器版本的正则式方法(直接返回一个字符串，内容为浏览器版本)
    checkVersion:function(){

        var that = this;

        //检验正则式族群
        //最优先判断现代浏览器(2017.7)
        var verExp = /5.0 \(Windows/;

        //fireFox
        var ffverExp = /5.0 \(Windows\)/;

        //chrome、360
        var webkitverExp = /Chrome/;

        //safari预判
        var safariverExp = /Safari/;

        //IE系列
        var ieverExp = /.NET/;
        var edge = /Edge/;      //Edge

        //ie11
        ie11verExp = /rv:11.0\)/;

        //ie5~10
        var ie10Exp = /MSIE 10.0;/;
        var ie9Exp = /MSIE 9.0;/;
        var ie8Exp = /MSIE 8.0;/;
        var ie7Exp = /MSIE 7.0;/;

        //抽出版本串
        var theVersion = window.navigator.appVersion;


        //审查对象
        var checkOut;

        if(verExp.exec(theVersion)){
            checkOut = verExp.exec(theVersion);

            if (ffverExp.exec(theVersion)) {
                console.log('此乃火狐浏览器');
                that.ver = 'fireFox';
            }

            else if (ie11verExp.exec(theVersion) && ie11verExp.exec(theVersion)) {
                console.log('此乃IE 11浏览器');
                that.ver = 'IE11';
            }

            else if (edge.exec(theVersion)) {
                console.log('此乃Edge浏览器');
                that.ver = 'Edge';
            }

            else {
                console.log('此乃现代浏览器,可能版本为较新版本的chrome、Safari、360浏览器');
                that.ver = 'Chrome';
            }
            that.support = true;
        }

        else {
            if (ie10Exp.exec(theVersion)) {
                console.log('此乃IE 10浏览器');
                that.ver = 'IE10';
                that.support = true;
            }

            else if (ie9Exp.exec(theVersion)) {
                console.log('此乃IE 9浏览器');
                that.ver = 'IE9';
                that.support = true;
            }

            else if (ie8Exp.exec(theVersion)) {
                console.log('此乃IE 8浏览器');
                that.ver = 'IE8';
            }

            else if (ie7Exp.exec(theVersion)) {
                console.log('此乃IE 7或以下版本浏览器');
                that.ver = 'IE7';
            }
            else {
                console.log('此乃未知版本的旧时代浏览器');
            }
        }
    },

    //执行检测
    go: function () {

        console.log(window.navigator)

        this.checkVersion();

        return this.ver;
    },

    //针对支持版本进行操作
    DoByVer: function () {

        //如果是不支持的
        if (!this.support) {
            
            var div = document.createElement('div');
            div.style.position = 'fixed';
            div.style.top = 0;
            div.style.height = '100%';
            div.style.width = '100%';
            div.style.backgroundColor = '#fff';
            div.style.zIndex = '9999';
            div.style.fontSize = '20px';
            div.innerHTML = '不支持此浏览器,请更新版本至IE9或以上';

            window.document.getElementsByTagName('body')[0].appendChild(div);

        }

    }
};

Page.go();

Page.DoByVer();






