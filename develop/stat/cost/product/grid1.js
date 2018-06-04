

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
            fields: ['Id', 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff', 'gggg', 'hhhh', 'iiii', 'jjjj', 'kkkk', 'llll', 'mmmm', 'nnnn', 'oooo', 'pppp','qqqq','ecolor', 'fcolor', 'gcolor', 'hcolor', 'icolor', 'jcolor', 'kcolor', 'lcolor', 'mcolor' ],
            columns: [{
                dataIndex: 'aaaa',
                dataName: '序号'
            
            }, {
                dataIndex: 'bbbb',
                dataName: '年份'

            }, {
                dataIndex: 'cccc',
                dataName: '月份'

            }, {
                dataIndex: 'dddd',
                dataName: '客户名称'

            }, {
                dataIndex: 'eeee',
                dataName: '合同号'
            }, {
                dataIndex: 'ffff',
                dataName: '总制令号'

            }, {
                dataIndex: 'gggg',
                dataName: '分制令号'

            }, {
                dataIndex: 'hhhh',
                dataName: '总数量'
            }, {
                dataIndex: 'iiii',
                dataName: '完工数量'
            }, {
                dataIndex: 'jjjj',
                dataName: '平均成本'

            }, {
                dataIndex: 'kkkk',
                dataName: '费用合计'

            }, {
                dataIndex: 'llll',
                dataName: '总工时'
            }, {
                dataIndex: 'mmmm',
                dataName: '直接材料费'
            }, {
                dataIndex: 'nnnn',
                dataName: '外协费'

            }, {
                dataIndex: 'oooo',
                dataName: '加工费'

            }, {
                dataIndex: 'pppp',
                dataName: '管理费'
            }, {
                dataIndex: 'qqqq',
                dataName: '能耗费'
            }, ]
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





















