

define(function (require) {

    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb:null
    };

    ret.drawGrid = function () {

        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '总制令号'
            
            }, {
                dataIndex: 'bbbb',
                dataName: '客户名称'

            }, {
                dataIndex: 'cccc',
                dataName: '合同金额'

            }, {
                dataIndex: 'dddd',
                dataName: '交货期'

            }, {
                dataIndex: 'eeee',
                dataName: '设计',
                renderer: function (x) {
                    return "<div class='" + x.ecolor + "Div'>" + x.eeee + "</div>";
                }
            }, {
                dataIndex: 'ffff',
                dataName: '计划',
                renderer: function (x) {
                    return "<div class='" + x.fcolor + "Div'>" + x.ffff + "</div>";
                }

            }, {
                dataIndex: 'gggg',
                dataName: '采购',
                renderer: function (x) {
                    return "<div class='" + x.gcolor + "Div'>" + x.gggg + "</div>";
                }

            }, {
                dataIndex: 'hhhh',
                dataName: '制造入库',
                renderer: function (x) {
                    return "<div class='" + x.hcolor + "Div'>" + x.hhhh + "</div>";
                }

            }, {
                dataIndex: 'iiii',
                dataName: '发运',
                renderer: function (x) {
                    return "<div class='" + x.icolor + "Div'>" + x.iiii + "</div>";
                }

            }, {
                dataIndex: 'jjjj',
                dataName: '回款',
                renderer: function (x) {
                    return "<div class='" + x.jcolor + "Div'>" + x.jjjj + "</div>";
                }

            }, {
                dataIndex: 'kkkk',
                dataName: '开票',
                renderer: function (x) {
                    return "<div class='" + x.kcolor + "Div'>" + x.kkkk + "</div>";
                }

            }, {
                dataIndex: 'llll',
                dataName: '生产成本',
                renderer: function (x) {
                    return "<div class='" + x.lcolor + "Div'>" + x.llll + "</div>";
                }

            }, {
                dataIndex: 'mmmm',
                dataName: '毛利率(%)',
                renderer: function (x) {
                    return "<div class='" + x.mcolor + "Div'>" + x.mmmm + "</div>";
                }

            }, {
                dataIndex: 'nnnn',
                dataName: '售后'

            }, {
                dataIndex: 'oooo',
                dataName: '物流情况'

            }]
        })

        ret.tb.init(dao.getGridData());

        ////添加
        //ret.tb.on('click', '.add', function (line, all) {
                
        //    console.log('你点击了行内添加按钮');
        //})

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





















