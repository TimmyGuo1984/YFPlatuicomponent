import React from 'react';
export interface TabPageProps {
    /** 标签键值 */
    key: React.Key;
    /** 标签标题 */
    tab: string;
    /** 标签页面 */
    page: React.ReactNode;
}
export interface SplitPageProps {
    /** 样式 */
    style?: React.CSSProperties | undefined;
    /** 分割方式 */
    splitMode?: 'vertical' | 'horizontal' | undefined;
    /** 分页面大小 */
    splitSpan?: string;
    /** 分页面标题 */
    subTitle?: React.ReactNode;
    /** 分页面 */
    subPage: React.ReactNode;
    /** 主页面是否显示 */
    mainVisible?: boolean | undefined;
    /** 主页面标题 */
    mainTitle?: React.ReactNode;
    /** 主页面或标签页面 */
    mainPage: TabPageProps[] | React.ReactNode;
    /** 默认页面 */
    defaultPage?: string | undefined;
    [x: string]: any;
}
declare const SplitPage: React.FC<SplitPageProps>;
export default SplitPage;
