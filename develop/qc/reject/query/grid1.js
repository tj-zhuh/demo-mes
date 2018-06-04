define(function (require) {
    var tb = require('tb');
    var dao = require('dao');

    var ret = {
        tb: null
    };

    ret.drawGrid = function () {
        ret.tb = new tb();

        ret.tb.config({
            container: document.getElementById('grid1'),
            fields: ['ID', 'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll'],
            columns: [{
                dataIndex: 'ID',
                dataName: '序号'
            }, {
                dataIndex: 'aa',
                dataName: '组件条码'
            }, {
                dataIndex: 'bb',
                dataName: '工单号'
            }, {
                dataIndex: 'cc',
                dataName: '不良原因'
            }, {
                dataIndex: 'dd',
                dataName: '不良位置'
            }, {
                dataIndex: 'ee',
                dataName: '结果'
            }, {
                dataIndex: 'ff',
                dataName: '编号'
            }, {
                dataIndex: 'gg',
                dataName: '班次'
            }, {
                dataIndex: 'hh',
                dataName: '操作员'
            }, {
                dataIndex: 'ii',
                dataName: '时间'
            }
            //,
            //{
            //    dataIndex: 'jj',
            //    dataName: '下发人'
            //},
            //{
            //    dataIndex: 'kk',
            //    dataName: '响应部门'
            //},
            //{
            //    dataIndex: 'll',
            //    dataName: '客户合同号'
            //},
            //{
            //    dataIndex: '',
            //    dataName: '操作',
            //    renderer: function (line, all) {
            //        return "<div class='tb-edit'></div><div class='tb-delete'></div>"
            //    }
            //}
            ]
        })

        ret.tb.init(dao.getGridData());

        ////添加
        //ret.tb.on('click', '.add', function (line, all) {
        //    console.log('你点击了行内添加按钮');
        //})

        //修改
        ret.tb.on('click', 'tb-edit', function (line, all) {
            console.log('你点击了行内编辑按钮');
            console.log(line);
        })

        //删除
        ret.tb.on('click', 'tb-delete', function (line, all) {
            console.log('你点击了行内删除按钮');
            console.log(line);

            //ret.tb.loadData(dao.reGetGridData());
        })
    }

    return ret;
})