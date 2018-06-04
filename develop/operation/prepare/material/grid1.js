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
                dataName: '代号'
            }, {
                dataIndex: 'bb',
                dataName: '物料位置',
                renderer: function (line) {
                    if (line.bb == '无库存') {
                        return "<div class='colorDiv redDiv'>" + "" + "</div>";
                    }
                    else {
                        return line.bb;
                    }
                }
            }, {
                dataIndex: 'cc',
                dataName: '业务描述'
            }, {
                dataIndex: 'dd',
                dataName: '借用描述'
            },
            {
                dataIndex: '',
                dataName: '操作',
                renderer: function (line, all) {
                    if (line.ID) {
                        return "<div class='tb-edit'></div><div class='tb-delete'></div>";
                    }
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