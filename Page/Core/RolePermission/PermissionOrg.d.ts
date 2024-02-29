import React from 'react';
import { RoleData } from '.';
import './Permission.less';
export interface PermissionOrgProps {
    innerParams: RoleData;
    [x: string]: any;
}
declare const PermissionOrg: React.FC<PermissionOrgProps>;
export default PermissionOrg;
