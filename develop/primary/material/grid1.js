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
                dataIndex: 'aa',
                dataName: '物料名称'
            }, {
                dataIndex: 'bb',
                dataName: '物料编码'
            }, {
                dataIndex: 'cc',
                dataName: '物料分类'
            }, {
                dataIndex: 'dd',
                dataName: '物料描述'
            }, {
                dataIndex: 'ee',
                dataName: '生产厂家'
            }, {
                dataIndex: 'ff',
                dataName: '用途'
            }, {
                dataIndex: 'gg',
                dataName: '备注'
            },
            //{
            //    dataIndex: 'hh',
            //    dataName: '每件毛坯公斤'
            //}, {
            //    dataIndex: 'ii',
            //    dataName: '探伤等级'
            //}, {
            //    dataIndex: 'jj',
            //    dataName: '锻件标识'
            //},
            //{
            //    dataIndex: 'kk',
            //    dataName: '产品总金额'
            //},
            //{
            //    dataIndex: 'll',
            //    dataName: '客户合同号'
            //},
            {
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