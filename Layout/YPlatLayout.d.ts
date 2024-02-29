import 'moment/locale/zh-cn';
import React from 'react';
import { AppSetting } from './Context/AppContext';
import './index.less';
export declare const RouterMapper: {
    Home: string;
    SignIn: string;
    Silent: string;
};
export declare type AppProps = {
    /**  应用的基本配置  */
    appSetting: AppSetting;
    /** 扩展路由配置 */
    extraRouter?: {
        [key: string]: any;
    };
    /** 是否使用路由 默认为True 调试组件时可以开启False */
    useRouter?: boolean;
};
declare const _default: React.NamedExoticComponent<AppProps>;
export default _default;
