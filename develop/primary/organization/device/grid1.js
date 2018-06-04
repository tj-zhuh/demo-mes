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
                dataName: '设备ID'
            }, {
                dataIndex: 'aa',
                dataName: '设备名称'
            }, {
                dataIndex: 'bb',
                dataName: '设备描述'
            }, {
                dataIndex: 'cc',
                dataName: '生产厂家'
            }, {
                dataIndex: 'dd',
                dataName: '加工能力'
            }, {
                dataIndex: 'ee',
                dataName: '备注'
            },
            //{
            //    dataIndex: 'ff',
            //    dataName: '特征码'
            //}, {
            //    dataIndex: 'gg',
            //    dataName: '每件净重公斤'
            //}, {
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