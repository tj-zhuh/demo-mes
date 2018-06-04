define(function (require) {
    var ret = {};

    //
    ret.getGridData = function () {
        return [
            { ID: 1, aa: '工段1', bb: '1', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 2, aa: '工段2', bb: '1', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 3, aa: '工段3', bb: '2', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 4, aa: '工段4', bb: '2', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 5, aa: '工段5', bb: '3', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 6, aa: '工段6', bb: '3', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' }
        ]
    }

    ret.reGetGridData = function () {
        return [
            { ID: 1, aa: '车间1', bb: '1', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 2, aa: '车间2', bb: '1', cc: '', dd: '45', ee: 'BS-300F-04-12-12-03', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' }
        ]
    }

    return ret;
})