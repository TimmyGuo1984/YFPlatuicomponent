import React from 'react';
import { UserManager } from 'oidc-client';
export declare type PermissionType = 'Tree' | 'List';
export declare type PermissionSetting = {
    name: string;
    type: PermissionType;
    keyField?: string;
    titleField?: string;
    grantListUrl: string;
    grantSaveUrl: string;
    treeQueryUrl: string;
    checkAlone?: boolean;
    [x: string]: any;
};
export declare type AppSetting = {
    /** 模拟身份令牌 */
    access_token?: string;
    /** 平台logo地址 */
    logoUrl?: string;
    /** 后端api url前缀 */
    apiBaseUrl?: string;
    /** oidc client 实例 */
    userManager?: UserManager;
    /** 前端page页面集合 */
    pages?: {
        [key: string]: any;
    };
    /** tab为空时首页内容 */
    IndexPage?: JSX.Element;
    extraPermissionSetting?: PermissionSetting[];
    /** publicUrl与项目名称映射关系 */
    prefixDic?: {
        [key: string]: any;
    };
    /** 为True跳过初始的单点登录验证*/
    skipOAuth?: boolean;
    [key: string]: any;
};
declare const AppContext: React.Context<AppSetting>;
export default AppContext;
