import React from 'react';
import { TreeProps } from 'antd';
export interface MetaTreeData {
    id: React.Key;
    key?: React.Key;
    title?: string;
    treeParentId?: React.Key;
    treeChildren?: MetaTreeData[];
    [x: string]: any;
}
export interface RequestTreeData {
    data?: MetaTreeData[];
    success?: boolean;
}
export interface MetaTreeProps extends Omit<TreeProps, ''> {
    /** 键值属性 */
    keyField?: string;
    /** 标题属性 */
    titleField?: string;
    /** 数据查询方法 */
    onRequest?: () => Promise<MetaTreeData[]>;
    /** 数据查询方法 */
    onChecked?: (keys: React.Key[]) => void;
    /** 是否受控勾选模式 */
    checkStrictly?: boolean;
    /** 勾选的Key（受控模式启用） */
    checkedKeys?: React.Key[];
    /** 是否受控选择模式 */
    selectStrictly?: boolean;
    /** 选择的Key（受控模式启用） */
    selectedKeys?: React.Key[];
    /** 独立选择模式 */
    checkAlone?: boolean;
    /** 显示勾选项 */
    checkable?: boolean;
    /** 数据查询方法 */
    onSelected?: (keys: React.Key[]) => void;
    /** 显示选中项 */
    selectable?: boolean;
    /** 是否显示工具栏 */
    showToolbar?: {
        /** 刷新按钮 */
        refresh?: boolean;
        /** 全选按钮 */
        all?: boolean;
        /** 清除按钮 */
        clear?: boolean;
        /** 数量统计 */
        total?: boolean;
    } | false;
}
declare const MetaTree: React.FC<MetaTreeProps>;
export default MetaTree;
