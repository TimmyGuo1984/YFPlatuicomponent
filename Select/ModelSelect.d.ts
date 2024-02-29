import { SelectProps } from 'antd/lib/select';
import React from 'react';
export interface ModelSelectProps<VT> extends SelectProps<VT> {
    /** 数据标识字段 默认为id */
    valueField?: string;
    /** 数据展示字段 默认为name */
    displayField?: string;
    onRequest: (value: any) => Promise<any[]>;
}
declare const ModelSelect: React.FC<ModelSelectProps<any>>;
export default ModelSelect;
