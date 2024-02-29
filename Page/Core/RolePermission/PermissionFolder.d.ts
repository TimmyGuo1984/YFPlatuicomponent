import React from 'react';
import { RoleData } from '.';
import './Permission.less';
export interface PermissionFolderProps {
    innerParams: RoleData;
    [x: string]: any;
}
declare const PermissionFolder: React.FC<PermissionFolderProps>;
export default PermissionFolder;
