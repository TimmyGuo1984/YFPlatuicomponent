import React from 'react';
export interface RoleData {
    id: React.Key;
    roleName: string;
    description: string;
}
export interface PermissionPageProps {
    [x: string]: any;
}
declare const PermissionPage: React.FC<PermissionPageProps>;
export default PermissionPage;
