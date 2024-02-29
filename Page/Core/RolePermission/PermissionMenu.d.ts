import React from 'react';
import { RoleData } from '.';
import './Permission.less';
export interface PermissionMenuProps {
    innerParams: RoleData;
    [x: string]: any;
}
declare const PermissionMenu: React.FC<PermissionMenuProps>;
export default PermissionMenu;
