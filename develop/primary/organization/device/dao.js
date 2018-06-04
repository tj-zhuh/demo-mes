define(function (require) {
    var ret = {};

    //
    ret.getGridData = function () {
        return [
            { ID: 1, aa: '设备1', bb: '生产设备', cc: '厂家A', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 2, aa: '设备2', bb: '生产设备', cc: '厂家B', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 3, aa: '设备3', bb: '运输设备', cc: '厂家C', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 4, aa: '设备4', bb: '运输设备', cc: '厂家A', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 5, aa: '设备5', bb: '辅助设备', cc: '厂家B', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 6, aa: '设备6', bb: '辅助设备', cc: '厂家C', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' }
        ]
    }

    ret.reGetGridData = function () {
        return [
            { ID: 1, aa: '设备1', bb: '生产设备', cc: '厂家A', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 2, aa: '设备2', bb: '生产设备', cc: '厂家B', dd: '', ee: '', ff: '', gg: '0.000', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' }
        ]
    }

    return ret;
})