

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

        if(handlersHelper.hasClass(x,'active'))
            handlersHelper.removeClass(x, 'active')

        else if(!handlersHelper.hasClass(x,'active'))
            handlersHelper.addClass(x,'active')

    }


    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo'],
            columns: [{
                dataIndex: 'oooo',
                dataName: '选择',
                renderer: function (x) {
                    if (x.oooo)
                        return "<div class='checkBox'></div>";
                    else{return "&nbsp;"}
                }
            }, {
                dataIndex: 'aaaa',
                dataName: '代号'

            }, {
                dataIndex: 'bbbb',
                dataName: '名称'

            }, {
                dataIndex: 'cccc',
                dataName: '台次'

            }, {
                dataIndex: 'dddd',
                dataName: '卡号'

            }, {
                dataIndex: 'eeee',
                dataName: '件次'
            }, {
                dataIndex: 'ffff',
                dataName: '工序'
            }, {
                dataIndex: 'gggg',
                dataName: '定额'
            }, {
                dataIndex: 'hhhh',
                dataName: '数量'
            }, {
                dataIndex: 'iiii',
                dataName: '设备码'
            }, {
                dataIndex: 'jjjj',
                dataName: '等级'
            }, {
                dataIndex: 'kkkk',
                dataName: '任务'
            }]
        })

        ret.tb.init(dao.getGridData());

        //添加
        ret.tb.on('click', 'checkBox', function (line, all, kid) {
                
            console.log('你点击了行内按钮');
            
            toggleClass(kid);
        })

        ////修改
        //ret.tb.on('click', 'tb-edit', function (line, all) {

        //    console.log('你点击了行内编辑按钮');
        //    console.log(line);

        //})

        ////删除
        //ret.tb.on('click', 'tb-delete', function (line, all) {

        //    console.log('你点击了行内删除按钮');
        //    console.log(line);

        //    ret.tb.loadData(dao.reGetGridData());

        //})
    }

    return ret;

})





















