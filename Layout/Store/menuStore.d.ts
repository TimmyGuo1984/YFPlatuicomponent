export declare const TABS: string;
export declare const ACTIVE_TAB_KEY: string;
export declare type TabModel = {
    id: string;
    name: string;
    url: string;
    urlType: Number;
    params: string;
    props: {
        [key: string]: string | Number;
    };
};
export declare type MenuModel = {
    id: string;
    name: string;
    url?: string;
    urlType?: Number;
    icon?: string;
    params?: string;
    children?: MenuModel[];
};
export declare const INTERNAL_MENU = 1;
export declare const EXTERNAL_MENU = 2;
export declare const OPEN_WINDOW_MENU = 3;
export declare class MenuStore {
    allMenu: MenuModel[];
    tabs: TabModel[];
    activeTabKey: string;
    constructor();
    /** 设置当前菜单 */
    setMenus(menus: MenuModel[]): void;
    get emptyTab(): boolean;
    get currentTab(): {};
    changeTab(id: string): void;
    addTab(tab: TabModel): void;
    closeTab(id: string): void;
    closeOtherTabs(id: string): void;
    closeRightTabs(id: string): void;
    onMoveTab(dstKey: string, srcKey: string): void;
    closeAllTabMenu(): void;
}
export declare const menuStore: MenuStore;
