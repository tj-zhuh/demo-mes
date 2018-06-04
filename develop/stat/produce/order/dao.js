


define(function (require) {

    var ret = {};

    //
    ret.getGridData = function () {

        return [
            {
                Id: 11, aaaa: 'EP-ZBC01', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '1/3', ffff: '1/3', gggg: '1/3', hhhh: '3/3', iiii: '1/3', jjjj: '3000', kkkk: '0.00', llll: '5000', mmmm: '66.67', nnnn: '', oooo: '良',
                ecolor: 'red', fcolor: 'red', gcolor: 'yellow', hcolor: 'green', icolor: 'red', jcolor: 'yellow', kcolor: 'gray', lcolor: 'yellow', mcolor: 'yellow'
            }, {
                Id: 11, aaaa: 'EP-ZBC02', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '2/3', ffff: '2/3', gggg: '3/3', hhhh: '3/3', iiii: '3/3', jjjj: '93000', kkkk: '0.00', llll: '123031', mmmm: '30.24', nnnn: '', oooo: '良',
                ecolor: 'red', fcolor: 'red', gcolor: 'green', hcolor: 'green', icolor: 'green', jcolor: 'yellow', kcolor: 'gray', lcolor: 'yellow', mcolor: 'yellow'
            }, {
                Id: 11, aaaa: 'EP-ZBC03', bbbb: '企业一部', cccc: '所有数据', dddd: '机密', eeee: '3/5', ffff: '3/5', gggg: '3/5', hhhh: '3/5', iiii: '3/5', jjjj: '100000', kkkk: '0.00', llll: '140321', mmmm: '40.32', nnnn: '', oooo: '良',
                ecolor: 'yellow', fcolor: 'yellow', gcolor: 'yellow', hcolor: 'yellow', icolor: 'red', jcolor: 'yellow', kcolor: 'gray', lcolor: 'yellow', mcolor: 'yellow'
            }
            
            //{ Id: 14, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 15, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 16, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 17, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 18, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 19, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 20, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 21, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' },
            //{ Id: 22, aaaa: '数据1', bbbb: '数据2', cccc: '数据3', dddd: '数据4', eeee: '数据5' }
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
        return ['全部']
    }


    return ret;

})



















