

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb:null
    };

    var handlersHelper = {

        hasClass: function (node, cls) {

            var _temp = node.className;
            var classes;
            if (_temp) {
                classes = _temp.split(" ")
            }
            else {
                classes = [];
            }

            for (var i = 0; i < classes.length; i++) {
                if (classes[i] === cls)
                    return true;
            }
        },

        addClass: function (node, cls) {
            var reg = /\s$/;
            if (!reg.exec(node.className)) {
                node.className += ' ' + cls;
            }
            else {
                node.className += cls;
            }
        },

        removeClass: function (node, cls) {
            if (!node)
                throw new Error("您的添加类操作没有指定一个正确的元素标签");
            if (!cls || typeof cls !== "string")
                throw new Error("您添加的类名称不是一个字符串");

            if (node.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                node.className = node.className.replace(reg, ' ');
            }
        },





    }




    function toggleClass(x) {

        var _temp = x.className;

        if (handlersHelper.hasClass(x, 'active'))
            handlersHelper.removeClass(x, 'active')

        else if (!handlersHelper.hasClass(x, 'active'))
            handlersHelper.addClass(x, 'active')

    }

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: [ 'Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '授权',
                renderer: function () {
                        return "<div class='checkBox'></div>";
                }
            }, {
                dataIndex: 'bbbb',
                dataName: '菜单名称'

            }, {
                dataIndex: '',
                dataName: '操作',
                renderer: function (line, all) {
                    return "<div class='tb-edit'></div><div class='tb-delete'></div>"
                }
            }]
        })

        ret.tb.init(dao.getGridData());

        ////添加
        //ret.tb.on('click', '.add', function (line, all) {
                
        //    console.log('你点击了行内添加按钮');
        //})

        //添加
        ret.tb.on('click', 'checkBox', function (line, all, kid) {

            console.log('你点击了行内按钮');

            toggleClass(kid);
        })

        //修改
        ret.tb.on('click', 'tb-edit', function (line, all) {

            console.log('你点击了行内编辑按钮');
            console.log(line);

        })

        //删除
        ret.tb.on('click', 'tb-delete', function (line, all) {

            console.log('你点击了行内删除按钮');
            console.log(line);

            ret.tb.loadData(dao.reGetGridData());

        })
    }

    return ret;

})





















