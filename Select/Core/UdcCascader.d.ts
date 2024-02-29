import { CascaderProps } from 'antd/lib/cascader';
import React from 'react';
export interface UdcCascaderSelectProps extends CascaderProps {
    udcTypeCodes: string[];
}
declare const Ret: React.FC<UdcCascaderSelectProps>;
export default Ret;
