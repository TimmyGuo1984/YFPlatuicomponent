import { ParamsType } from '@ant-design/pro-provider';
import { ActionType } from '@ant-design/pro-table';
import React from 'react';
import { MetaTableProps } from './MetaTable';
export declare type BatchFunc = (selectedRowKeys: React.ReactText[], action?: React.MutableRefObject<ActionType | undefined> | ((actionRef: ActionType) => void)) => void;
export declare type DropMenu = {
    key: string;
    name: string;
    handleClick: BatchFunc;
};
export declare type OptionHandle<T> = {
    name: string;
    onClick: (record: T) => void;
};
export interface CRUDTableProps<T, U extends ParamsType> extends MetaTableProps<T, U> {
    /** YiPlat后端标准删除接口 */
    reqDels?: (Ids: React.ReactText[]) => Promise<any>;
    /** 添加新对象的方法，为空则不渲染添加按钮 */
    handleAdd?: () => void;
    /** 查看现有对象的方法，为空则不渲染查看按钮 */
    handleView?: (record: T) => void;
    /** 查看现有对象的方法，为空则不渲染编辑按钮 */
    handleEdit?: (record: T) => void;
    /** 多选下的下拉菜单，用于批量操作扩展*/
    dropMenus?: DropMenu[];
    /** 行内编辑按钮，用于单个模型操作扩展 */
    handles?: OptionHandle<T>[];
    /** 工具栏按钮扩展 */
    extraToolBarButtons?: JSX.Element[];
    /** 是否冻结Option列，默认为True */
    fixOption?: boolean;
    /** 扩展针对多选下的描述方法 */
    renderAlertDescr?: (rows: T[]) => React.ReactText;
}
declare const CRUDTable: <T extends {}, U extends ParamsType>(props: CRUDTableProps<T, U>) => JSX.Element;
export default CRUDTable;
