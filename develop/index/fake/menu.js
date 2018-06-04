define(function () {
    return [
        {
            menuId: "1",
            menuName: "生产计划",
            folder: "plan",
            parentId: "root"
        }
        , {
            menuId: "1-1",
            menuName: "生产管理",
            folder: "produce",
            parentId: "1"
        }
        , {
            menuId: "1-1-1",
            menuName: "订单管理",
            folder: "order",
            parentId: "1-1"
        }
        , {
            menuId: "1-1-2",
            menuName: "手工订单管理",
            folder: "manual",
            parentId: "1-1",
            suspend: "1"
        }
        , {
            menuId: "1-1-3",
            menuName: "主计划维护",
            folder: "main",
            parentId: "1-1",
            suspend: "1"
        }
        , {
            menuId: "1-1-4",
            menuName: "机加任务维护",
            folder: "machine",
            parentId: "1-1",
            suspend: "1"
        }
        , {
            menuId: "1-1-5",
            menuName: "装配任务维护",
            folder: "setup",
            parentId: "1-1",
            suspend: "1"
        }
        , {
            menuId: "1-1-6",
            menuName: "生产计划汇总",
            folder: "all",
            parentId: "1-1"
        }
        , {
            menuId: "1-2",
            menuName: "APS排产管理",
            folder: "aps",
            parentId: "1"
        }
        , {
            menuId: "1-2-1",
            menuName: "基础数据管理",
            folder: "basic",
            parentId: "1-2",
            suspend: "1"
        }
        , {
            menuId: "1-2-2",
            menuName: "排产任务管理",
            folder: "task",
            parentId: "1-2",
            suspend: "1"
        }
        , {
            menuId: "1-2-3",
            menuName: "排产运算",
            folder: "calc",
            parentId: "1-2",
            suspend: "1"
        }
        , {
            menuId: "1-2-4",
            menuName: "排产甘特图展示",
            folder: "gantt",
            parentId: "1-2"
        }
        , {
            menuId: "1-2-5",
            menuName: "物料需求计划",
            folder: "material",
            parentId: "1-2"
        }
        , {
            menuId: "1-2-6",
            menuName: "排产结果展示和调整",
            folder: "display",
            parentId: "1-2",
            suspend: "1"
        }
        , {
            menuId: "1-2-7",
            menuName: "排产结果审批",
            folder: "exam",
            parentId: "1-2",
            suspend: "1"
        }
        , {
            menuId: "1-2-8",
            menuName: "排产结果发布",
            folder: "publish",
            parentId: "1-2",
            suspend: "1"
        }
        , {
            menuId: "1-2-9",
            menuName: "排产结果跟踪",
            folder: "track",
            parentId: "1-2",
            suspend: "1"
        }
        , {
            menuId: "2",
            menuName: "生产作业",
            folder: "operation",
            parentId: "root"
        }
        , {
            menuId: "2-1",
            menuName: "生产准备",
            folder: "prepare",
            parentId: "2"
        }
        , {
            menuId: "2-1-1",
            menuName: "物料齐套检查",
            folder: "material",
            parentId: "2-1"
        }
        , {
            menuId: "2-1-2",
            menuName: "图纸工艺检查",
            folder: "blueprint",
            parentId: "2-1"
        }
        , {
            menuId: "2-1-3",
            menuName: "计划检查",
            folder: "plan",
            parentId: "2-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-4",
            menuName: "工装检查",
            folder: "tool",
            parentId: "2-1",
            suspend: "1"
        }
        , {
            menuId: "2-1-5",
            menuName: "设备班组检查",
            folder: "device",
            parentId: "2-1",
            suspend: "1"
        }
        , {
            menuId: "2-2",
            menuName: "生产调度",
            folder: "schedule",
            parentId: "2"
        }
        , {
            menuId: "2-2-1",
            menuName: "机加任务派工",
            folder: "machine",
            parentId: "2-2",
            suspend: "1"
        }
        , {
            menuId: "2-2-2",
            menuName: "装配任务派工",
            folder: "setup",
            parentId: "2-2"
        }
        , {
            menuId: "2-2-3",
            menuName: "手工任务派工",
            folder: "manual",
            parentId: "2-2",
            suspend: "1"
        }
        , {
            menuId: "3",
            menuName: "生产进度",
            folder: "progress",
            parentId: "root"
        }
        , {
            menuId: "3-1",
            menuName: "生产作业任务接收",
            folder: "receive",
            parentId: "3"
        }
        , {
            menuId: "3-2",
            menuName: "生产报工",
            folder: "time",
            parentId: "3"
        }
        , {
            menuId: "3-3",
            menuName: "质检",
            folder: "check",
            parentId: "3"
        }
        , {
            menuId: "3-4",
            menuName: "完工管理",
            folder: "complete",
            parentId: "3",
            suspend: "1"
        }
        , {
            menuId: "3-5",
            menuName: "例外转序",
            folder: "exception",
            parentId: "3",
            suspend: "1"
        }
        , {
            menuId: "3-6",
            menuName: "冲销报工",
            folder: "cancel",
            parentId: "3",
            suspend: "1"
        }
        , {
            menuId: "3-7",
            menuName: "产成品入库",
            folder: "storage",
            parentId: "3",
            suspend: "1"
        }
        , {
            menuId: "3-8",
            menuName: "车间工时统计",
            folder: "hour",
            parentId: "3"
        }
        , {
            menuId: "4",
            menuName: "外协管理",
            folder: "external",
            parentId: "root"
        }
        , {
            menuId: "4-1",
            menuName: "外协计划编制",
            folder: "plan",
            parentId: "4",
            suspend: "1"
        }
        , {
            menuId: "4-2",
            menuName: "外协生产状态上报",
            folder: "report",
            parentId: "4",
            suspend: "1"
        }
        , {
            menuId: "4-3",
            menuName: "外协计划跟踪查询",
            folder: "track",
            parentId: "4"
        }
        , {
            menuId: "4-4",
            menuName: "外协任务",
            folder: "task",
            parentId: "4",
            suspend: "1"
        }
        , {
            menuId: "4-5",
            menuName: "外协台账",
            folder: "book",
            parentId: "4"
        }
        , {
            menuId: "4-6",
            menuName: "外协带料加工",
            folder: "material",
            parentId: "4",
            suspend: "1"
        }
        , {
            menuId: "4-7",
            menuName: "外协入库",
            folder: "storage",
            parentId: "4",
            suspend: "1"
        }
        , {
            menuId: "5",
            menuName: "质量管理",
            folder: "qc",
            parentId: "root"
        }
        , {
            menuId: "5-1",
            menuName: "基础数据管理",
            folder: "basic",
            parentId: "5"
        }
        , {
            menuId: "5-1-1",
            menuName: "检验项目管理",
            folder: "item",
            parentId: "5-1",
            suspend: "1"
        }
        , {
            menuId: "5-1-2",
            menuName: "检验标准管理",
            folder: "standard",
            parentId: "5-1",
            suspend: "1"
        }
        , {
            menuId: "5-1-3",
            menuName: "检验方法管理",
            folder: "method",
            parentId: "5-1",
            suspend: "1"
        }
        , {
            menuId: "5-2",
            menuName: "质检申请管理",
            folder: "apply",
            parentId: "5",
            suspend: "1"
        }
        , {
            menuId: "5-3",
            menuName: "质检审核管理",
            folder: "check",
            parentId: "5"
        }
        , {
            menuId: "5-4",
            menuName: "不合格品管理",
            folder: "reject",
            parentId: "5"
        }
        , {
            menuId: "5-4-1",
            menuName: "不合格品单生成",
            folder: "add",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-2",
            menuName: "不合格品维护",
            folder: "manage",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-3",
            menuName: "质控信息维护",
            folder: "info",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-4",
            menuName: "业务员不合格统计表",
            folder: "stat",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-5",
            menuName: "不合格品单查询",
            folder: "query",
            parentId: "5-4"
        }
        , {
            menuId: "5-4-6",
            menuName: "不合格品单分析",
            folder: "analyze",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-7",
            menuName: "不合格率统计表",
            folder: "rate",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "5-4-8",
            menuName: "业务员不合格品率",
            folder: "clerk",
            parentId: "5-4",
            suspend: "1"
        }
        , {
            menuId: "6",
            menuName: "设备管理",
            folder: "device",
            parentId: "root"
        }
        , {
            menuId: "6-1",
            menuName: "设备基本信息管理",
            folder: "basic",
            parentId: "6",
            suspend: "1"
        }
        , {
            menuId: "6-2",
            menuName: "设备状态监控",
            folder: "monitor",
            parentId: "6"
        }
        , {
            menuId: "6-3",
            menuName: "设备运行记录与分析",
            folder: "record",
            parentId: "6"
        }
        , {
            menuId: "6-4",
            menuName: "设备点检管理",
            folder: "exam",
            parentId: "6",
            suspend: "1"
        }
        , {
            menuId: "6-5",
            menuName: "设备负荷管理",
            folder: "load",
            parentId: "6"
        }
        , {
            menuId: "7",
            menuName: "仓储物流",
            folder: "stock",
            parentId: "root"
        }
        , {
            menuId: "7-1",
            menuName: "发料",
            folder: "send",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "7-2",
            menuName: "入库",
            folder: "in",
            parentId: "7"
        }
        , {
            menuId: "7-3",
            menuName: "出库",
            folder: "out",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "7-4",
            menuName: "库存",
            folder: "inventory",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "7-5",
            menuName: "领料",
            folder: "get",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "7-6",
            menuName: "调拨",
            folder: "allocate",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "7-7",
            menuName: "退库",
            folder: "return",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "7-8",
            menuName: "物料配送",
            folder: "delivery",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "7-9",
            menuName: "批次追踪",
            folder: "track",
            parentId: "7",
            suspend: "1"
        }
        , {
            menuId: "8",
            menuName: "产品发运",
            folder: "deliver",
            parentId: "root"
        }
        , {
            menuId: "8-1",
            menuName: "发运指令下达",
            folder: "transmit",
            parentId: "8"
        }
        , {
            menuId: "8-2",
            menuName: "发运指令质量审核",
            folder: "quality",
            parentId: "8",
            suspend: "1"
        }
        , {
            menuId: "8-3",
            menuName: "发运指令财务审核",
            folder: "finance",
            parentId: "8",
            suspend: "1"
        }
        , {
            menuId: "8-4",
            menuName: "发运指令确认",
            folder: "confirm",
            parentId: "8",
            suspend: "1"
        }
        , {
            menuId: "8-5",
            menuName: "产成品缺件查询",
            folder: "shortage",
            parentId: "8",
            suspend: "1"
        }
        , {
            menuId: "9",
            menuName: "统计分析",
            folder: "stat",
            parentId: "root"
        }
        , {
            menuId: "9-1",
            menuName: "生产分析",
            folder: "produce",
            parentId: "9"
        }
        , {
            menuId: "9-1-1",
            menuName: "企业产能分析",
            folder: "capacity",
            parentId: "9-1",
            suspend: "1"
        }
        , {
            menuId: "9-1-2",
            menuName: "质量改进分析",
            folder: "improve",
            parentId: "9-1",
            suspend: "1"
        }
        , {
            menuId: "9-1-3",
            menuName: "产成品入库状态跟踪分析",
            folder: "instock",
            parentId: "9-1",
            suspend: "1"
        }
        , {
            menuId: "9-1-4",
            menuName: "在制品状态跟踪分析",
            folder: "running",
            parentId: "9-1",
            suspend: "1"
        }
        , {
            menuId: "9-1-5",
            menuName: "外协任务执行进度跟踪分析",
            folder: "external",
            parentId: "9-1",
            suspend: "1"
        }
        , {
            menuId: "9-1-6",
            menuName: "订单执行进度跟踪分析",
            folder: "order",
            parentId: "9-1"
        }
        , {
            menuId: "9-1-7",
            menuName: "生产统计分析",
            folder: "produce",
            parentId: "9-1",
            suspend: "1"
        }
        , {
            menuId: "9-1-8",
            menuName: "人员报工统计分析",
            folder: "person",
            parentId: "9-1"
        }
        , {
            menuId: "9-1-9",
            menuName: "设备生产统计分析",
            folder: "device",
            parentId: "9-1"
        }
        , {
            menuId: "9-1-10",
            menuName: "能源消耗统计分析",
            folder: "energy",
            parentId: "9-1"
        }
        , {
            menuId: "9-2",
            menuName: "成本分析",
            folder: "cost",
            parentId: "9"
        }
        , {
            menuId: "9-2-1",
            menuName: "人员成本分析",
            folder: "person",
            parentId: "9-2",
            suspend: "1"
        }
        , {
            menuId: "9-2-2",
            menuName: "能源成本分析",
            folder: "energy",
            parentId: "9-2",
            suspend: "1"
        }
        , {
            menuId: "9-2-3",
            menuName: "原材料成本分析",
            folder: "material",
            parentId: "9-2",
            suspend: "1"
        }
        , {
            menuId: "9-2-4",
            menuName: "外协成本分析",
            folder: "external",
            parentId: "9-2",
            suspend: "1"
        }
        , {
            menuId: "9-2-5",
            menuName: "订单生产成本分析",
            folder: "order",
            parentId: "9-2",
            suspend: "1"
        }
        , {
            menuId: "9-2-6",
            menuName: "产品生产成本分析",
            folder: "product",
            parentId: "9-2"
        }
        , {
            menuId: "9-3",
            menuName: "库存分析",
            folder: "stock",
            parentId: "9"
        }
        , {
            menuId: "9-3-1",
            menuName: "产成品缺件分析",
            folder: "shortage",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "9-3-2",
            menuName: "产成品库存统计分析",
            folder: "stock",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "9-3-3",
            menuName: "库存物资统计分析",
            folder: "goods",
            parentId: "9-3"
        }
        , {
            menuId: "9-3-4",
            menuName: "采购物资价格分析",
            folder: "price",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "9-3-5",
            menuName: "物资库存走势分析",
            folder: "trend",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "9-3-6",
            menuName: "物资资金占用分析",
            folder: "rate",
            parentId: "9-3"
        }
        , {
            menuId: "9-3-7",
            menuName: "物资周转速度分析",
            folder: "speed",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "9-3-8",
            menuName: "物资库存预警分析",
            folder: "warning",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "9-3-9",
            menuName: "外协任务执行分析",
            folder: "external",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "9-3-10",
            menuName: "采购任务执行分析",
            folder: "buy",
            parentId: "9-3",
            suspend: "1"
        }
        , {
            menuId: "10",
            menuName: "主数据",
            folder: "primary",
            parentId: "root"
        }
        , {
            menuId: "10-1",
            menuName: "组织架构管理",
            folder: "organization",
            parentId: "10"
        }
        , {
            menuId: "10-1-1",
            menuName: "企业主数据",
            folder: "company",
            parentId: "10-1"
        }
        , {
            menuId: "10-1-2",
            menuName: "工厂主数据",
            folder: "factory",
            parentId: "10-1"
        }
        , {
            menuId: "10-1-3",
            menuName: "车间主数据",
            folder: "department",
            parentId: "10-1"
        }
        , {
            menuId: "10-1-4",
            menuName: "工段主数据",
            folder: "workshop",
            parentId: "10-1"
        }
        , {
            menuId: "10-1-5",
            menuName: "班组主数据",
            folder: "shift",
            parentId: "10-1"
        }
        , {
            menuId: "10-1-6",
            menuName: "人员主数据",
            folder: "person",
            parentId: "10-1"
        }
        , {
            menuId: "10-1-7",
            menuName: "设备主数据",
            folder: "device",
            parentId: "10-1"
        }
        , {
            menuId: "10-2",
            menuName: "物料管理",
            folder: "material",
            parentId: "10"
        }
        , {
            menuId: "10-3",
            menuName: "工艺管理",
            folder: "technology",
            parentId: "10"
        }
        , {
            menuId: "10-3-1",
            menuName: "产品工艺路线信息",
            folder: "product",
            parentId: "10-3",
            suspend: "1"
        }
        , {
            menuId: "10-3-2",
            menuName: "产品工艺层级管理",
            folder: "level",
            parentId: "10-3",
            suspend: "1"
        }
        , {
            menuId: "10-3-3",
            menuName: "工艺路线管理",
            folder: "way",
            parentId: "10-3"
        }
        , {
            menuId: "10-3-4",
            menuName: "工艺规程管理",
            folder: "standard",
            parentId: "10-3",
            suspend: "1"
        }
        , {
            menuId: "10-3-5",
            menuName: "二维工艺图纸管理",
            folder: "two",
            parentId: "10-3",
            suspend: "1"
        }
        , {
            menuId: "10-3-6",
            menuName: "三维工艺图纸管理",
            folder: "three",
            parentId: "10-3"
        }
        , {
            menuId: "10-4",
            menuName: "BOM管理",
            folder: "bom",
            parentId: "10"
        }
        , {
            menuId: "10-4-1",
            menuName: "BOM同步管理",
            folder: "sync",
            parentId: "10-4",
            suspend: "1"
        }
        , {
            menuId: "10-4-2",
            menuName: "BOM清单查询",
            folder: "list",
            parentId: "10-4"
        }
        , {
            menuId: "10-4-3",
            menuName: "BOM历史版本管理",
            folder: "history",
            parentId: "10-4",
            suspend: "1"
        }
        , {
            menuId: "11",
            menuName: "系统管理",
            folder: "system",
            parentId: "root"
        }
        , {
            menuId: "11-1",
            menuName: "人员管理",
            folder: "user",
            parentId: "11"
        }
        , {
            menuId: "11-2",
            menuName: "角色管理",
            folder: "role",
            parentId: "11"
        }
        , {
            menuId: "11-3",
            menuName: "菜单管理",
            folder: "menu",
            parentId: "11"
        }
        , {
            menuId: "11-4",
            menuName: "权限管理",
            folder: "auth",
            parentId: "11"
        }
        , {
            menuId: "11-5",
            menuName: "日志管理",
            folder: "log",
            parentId: "11",
            suspend: "1"
        }
        , {
            menuId: "11-6",
            menuName: "语言管理",
            folder: "lang",
            parentId: "11"
        }
    ];
})
