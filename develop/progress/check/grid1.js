

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
                dataName: '序号',
                renderer: function (x) {
                    if (x.aaaa)
                        return x.aaaa;
                    else { return "&nbsp;" }
                }
            
            }, {
                dataIndex: 'bbbb',
                dataName: '制令号'

            }, {
                dataIndex: 'cccc',
                dataName: '工单号'

            }, {
                dataIndex: 'dddd',
                dataName: '质检状态'

            }, {
                dataIndex: 'eeee',
                dataName: '报检状态'
            }, {
                dataIndex: 'ffff',
                dataName: '报检时间'
            }, {
                dataIndex: 'gggg',
                dataName: '备注'
            }, {
                dataIndex: 'hhhh',
                dataName: '质检结果'
            }, {
                dataIndex: 'iiii',
                dataName: '质检人员'
            }, {
                dataIndex: 'jjjj',
                dataName: '质检时间'
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





















