import { ParamsType } from '@ant-design/pro-provider';
import { SimpleCRUDTableProps } from './SimpleCRUDTable';
export interface TreeCRUDTableProps<T, U extends ParamsType> extends SimpleCRUDTableProps<T, U> {
    /** 是否默认全展开，默认为False */
    defaultExpand?: boolean;
    /** 子节点属性索引，默认为treeChildren */
    childrenDataIndex?: string;
}
declare const TreeTable: <T extends {}, U extends ParamsType>(props: TreeCRUDTableProps<T, U>) => JSX.Element;
export default TreeTable;
