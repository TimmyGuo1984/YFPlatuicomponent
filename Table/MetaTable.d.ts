import { ProTableProps, ProColumns, RequestData } from '@ant-design/pro-table';
import { ParamsType } from '@ant-design/pro-provider';
import React from 'react';
import { Comparison, ExpressionParam, QueryParam } from '../utils/CommonRequest';
export declare type ComparisionFunc = (param: React.ReactText | React.ReactText[]) => ExpressionParam[];
export declare type FieldComparison = Comparison | ComparisionFunc;
export declare const GetQueryExpression: (propName: string, comparison: Comparison, value: string | number | boolean) => ExpressionParam;
export declare type PagingRequestFunc<T> = (params: QueryParam & {
    pageSize?: number;
    pageNumber?: number;
}) => Promise<RequestData<T>>;
export declare type ExternalColumn<T = any> = ProColumns<T> & {
    comparison?: FieldComparison;
};
export interface MetaTableProps<T, U extends ParamsType> extends Omit<ProTableProps<T, U>, 'columns'> {
    columns: ExternalColumn<T>[];
    /** YiPlat后台标准分页查询接口 */
    reqQuery?: PagingRequestFunc<T>;
    /** 是否需要包裹返回值 默认为False */
    /** 默认排序字段设置 */
    defaultSort?: {
        [key: string]: Boolean;
    };
}
/**
 * wrapper for hyit backend api
 * @param props
 */
declare const MetaTable: <T extends {}, U extends ParamsType>(props: MetaTableProps<T, U>) => JSX.Element;
export default MetaTable;
