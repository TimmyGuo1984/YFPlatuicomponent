import { MetaTableProps, PagingRequestFunc } from '../../Table/MetaTable';
import React from 'react';
import { ParamsType } from '@ant-design/pro-provider';
import './index.less';
export interface TableSelectProps<T, U extends ParamsType> extends Omit<MetaTableProps<T, U>, 'reqQuery'> {
    /** 下拉选择器的宽度 */
    width?: React.ReactText;
    /** 下拉选择器的高度 */
    height?: React.ReactText;
    /** 展示字段的数组，字段值之间以-连接 */
    showValue: string[];
    selectValue?: string;
    value?: React.ReactText;
    onChange?: any;
    disabled?: boolean;
    /** YiPlat后台标准分页查询 */
    reqQuery: PagingRequestFunc<T>;
}
declare const TableSelect: <T extends {}, U extends ParamsType>(props: TableSelectProps<T, U>) => JSX.Element;
export default TableSelect;
