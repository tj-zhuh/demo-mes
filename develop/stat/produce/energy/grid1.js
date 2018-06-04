

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
                dataName: '日期'
            
            }, {
                dataIndex: 'bbbb',
                dataName: '班次'

            }, {
                dataIndex: 'cccc',
                dataName: '负责人'

            }, {
                dataIndex: 'dddd',
                dataName: '工序'

            }, {
                dataIndex: 'eeee',
                dataName: '部门'
            }, {
                dataIndex: 'ffff',
                dataName: '能耗类型'

            }, {
                dataIndex: 'gggg',
                dataName: '使用量'

            }, {
                dataIndex: 'hhhh',
                dataName: '单位'
            }, {
                dataIndex: 'iiii',
                dataName: '利用率'

            }, {
                dataIndex: 'jjjj',
                dataName: '产量'

            }, {
                dataIndex: 'kkkk',
                dataName: '成本'

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





















