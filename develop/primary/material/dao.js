define(function (require) {
    var ret = {};

    //
    ret.getGridData = function () {
        return [
            { ID: 1, aa: '物料A', bb: 'YU01-11-01-07', cc: 'YU01', dd: '', ee: '厂家01', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 2, aa: '物料B', bb: 'YU01-11-02-07', cc: 'YU01', dd: '', ee: '厂家01', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 3, aa: '物料C', bb: 'YU02-11-03-07', cc: 'YU02', dd: '', ee: '厂家02', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 4, aa: '物料D', bb: 'YU02-11-04-07', cc: 'YU02', dd: '', ee: '厂家02', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 5, aa: '物料E', bb: 'YU03-11-05-07', cc: 'YU03', dd: '', ee: '厂家03', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 6, aa: '物料F', bb: 'YU03-11-06-07', cc: 'YU03', dd: '', ee: '厂家03', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' }
        ]
    }

    ret.reGetGridData = function () {
        return [
            { ID: 1, aa: '物料A', bb: 'YU01-11-01-07', cc: 'YU01', dd: '', ee: '厂家01', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' },
            { ID: 2, aa: '物料B', bb: 'YU01-11-02-07', cc: 'YU01', dd: '', ee: '厂家01', ff: '', gg: '', hh: '0.000', ii: '', jj: '', kk: '6000', ll: '' }
        ]
    }

    return ret;
})