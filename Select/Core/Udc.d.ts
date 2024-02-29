import React from 'react';
import { SelectProps } from 'antd/lib/select';
export declare type UdcSelectProps<T> = {
    UdcTypeCode: string;
} & SelectProps<T>;
declare const Ret: React.FC<UdcSelectProps<any>>;
export default Ret;
