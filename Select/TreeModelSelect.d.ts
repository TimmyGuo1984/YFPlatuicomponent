import React from 'react';
import { TreeSelectProps } from 'antd/lib/tree-select';
export interface TreeModelSelectProps<VT> extends TreeSelectProps<VT> {
    /** 数据标识字段 默认为id */
    valueField?: string;
    /** 数据展示字段 默认为name */
    displayField?: string;
    /** 树子节点字段 默认为treeChildren */
    childrenField?: string;
    onRequest: (value: any) => Promise<any[]>;
}
declare const TreeModelSelect: React.FC<TreeModelSelectProps<any>>;
export default TreeModelSelect;
