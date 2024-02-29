import React from 'react';
import { RoleData } from '.';
export interface RoleTableProps {
    onChange: (value: any) => void;
    innerParams?: RoleData;
    authAccess?: boolean;
    [x: string]: any;
}
declare const RoleTable: React.FC<RoleTableProps>;
export default RoleTable;
