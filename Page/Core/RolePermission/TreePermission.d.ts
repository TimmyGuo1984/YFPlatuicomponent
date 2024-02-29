import React from 'react';
import { RoleData } from '.';
import './Permission.less';
export interface TreePermissionProps {
    keyField?: string;
    titleField?: string;
    grantListUrl: string;
    grantSaveUrl: string;
    treeQueryUrl: string;
    innerParams?: RoleData;
    checkAlone?: boolean;
    [x: string]: any;
}
declare const TreePermission: React.FC<TreePermissionProps>;
export default TreePermission;
