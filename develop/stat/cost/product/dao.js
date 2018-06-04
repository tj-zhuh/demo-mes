


define(function (require) {

    var ret = {};

    //
    ret.getGridData = function () {

        return [
            {
                Id: 11, aaaa: '1', bbbb: 'GT678778', cccc: '未知', dddd: '13', eeee: '无', ffff: '16-0073', gggg: '16-0073-001-1004',
                hhhh: '1', iiii: '0', jjjj: '0.00', kkkk: '78880.72', llll: '6578.64', mmmm: '66871.74', 
                nnnn: '2715.79', oooo: '4905.26',pppp: '1901.76', qqqq: '6142.89', 
                ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'blue', kcolor: 'red',
                 lcolor: 'red', mcolor: 'red'
            }, {
                Id: 11, aaaa: '2', bbbb: 'GT66777', cccc: '未知', dddd: '12', eeee: '无', ffff: '16-0073', gggg: '16-0073-001-1004',
                hhhh: '1', iiii: '0', jjjj: '0.00', kkkk: '78880.72', llll: '6578.64', mmmm: '66871.74', 
                nnnn: '2715.79', oooo: '4905.26',pppp: '1901.76', qqqq: '6142.89', 
                ecolor: 'red', fcolor: 'red', gcolor: 'green', hcolor: 'green', icolor: 'green', jcolor: 'blue', kcolor: 'red',
                 lcolor: 'blue', mcolor: 'red'
            }, {
                Id: 11, aaaa: '3', bbbb: 'GF8888', cccc: '未知', dddd: '1', eeee: '无', ffff: '16-0073', gggg: '16-0073-001-1004',
                hhhh: '1', iiii: '0', jjjj: '0.00', kkkk: '78880.72', llll: '6578.64', mmmm: '66871.74', 
                nnnn: '2715.79', oooo: '4905.26',pppp: '1901.76', qqqq: '6142.89', 
                ecolor: 'yellow', fcolor: 'yellow', gcolor: 'yellow', hcolor: 'yellow', icolor: 'red', jcolor: 'red', kcolor: 'red',
                 lcolor: 'red', mcolor: 'red'
            }
            

         ]

    }


    ret.reGetGridData = function () {

        return [
            { Id: 11, aaaa: 'zzbc', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 12, aaaa: 'zhuh', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 13, aaaa: 'zrd', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '增删改查' },
            { Id: 14, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 15, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 16, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 17, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 18, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 19, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 20, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 21, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            { Id: 22, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' }
        ]

    }

    ret.loadSelect = function (id, data) {

        for (var i = 0; i < data.length; i++) {
            var op = document.createElement('option');
            op.innerHTML = data[i];
            id.appendChild(op);
        }
    }

    ret.selectData1 = function () {
        return ['全部']
    }

    ret.selectData2 = function () {
        return ['全部']
    }

    ret.selectData3 = function () {
        return ['全部']
    }

    ret.selectData4 = function () {
        return ['已完成']
    }

    ret.selectData5 = function () {
        return ['生产部']
    }

    return ret;

})



















