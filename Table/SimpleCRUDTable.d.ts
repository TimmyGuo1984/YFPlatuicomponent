import { ParamsType } from '@ant-design/pro-provider';
import { CRUDTableProps } from './CRUDTable';
import { ExternalColumn } from './MetaTable';
export interface SimpleCRUDTableProps<T, U extends ParamsType> extends Omit<CRUDTableProps<T, U>, 'columns'> {
    columns: CRUDColumn<T>[];
    /** 增量保存方法，Insert or Update */
    reqSave: (params: any) => Promise<any>;
    beforeSubmit?: (params: any) => {
        result: boolean;
        message?: string;
    };
}
export declare type CRUDColumn<T = any> = ExternalColumn<T> & {
    /** 修改时隐藏 */
    hideInEdit?: boolean;
    /** 添加时隐藏 */
    hideInAdd?: boolean;
};
declare const SimpleCRUDTable: <T extends {}, U extends ParamsType>(props: SimpleCRUDTableProps<T, U>) => JSX.Element;
export default SimpleCRUDTable;
