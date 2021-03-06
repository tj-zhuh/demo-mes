﻿

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
                dataName: '出量(台)',
                renderer: function (x) {
                    if (x.aaaa)
                        return x.aaaa;
                    else { return "&nbsp;" }
                }

            
            }, {
                dataIndex: 'bbbb',
                dataName: '投入工时（小时）'

            }, {
                dataIndex: 'cccc',
                dataName: '非生产性（小时）'

            }, {
                dataIndex: 'dddd',
                dataName: '生产性工时（小时）'

            }, {
                dataIndex: 'eeee',
                dataName: '产出工时（小时）'
            }, {
                dataIndex: 'ffff',
                dataName: '人员移动率'
            }, {
                dataIndex: 'gggg',
                dataName: '作业效率'
            }, {
                dataIndex: 'hhhh',
                dataName: '生产效率'
            }, {
                dataIndex: 'iiii',
                dataName: '单人产能（台/人/小时）'
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





















