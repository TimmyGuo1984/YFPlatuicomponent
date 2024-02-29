export interface FilterDropdownProps {
    setSelectedKeys: (keys: string[]) => void;
    selectedKeys: string[];
    confirm: any;
    clearFilters: () => void;
}
declare const GetColumnSearchProps: (dataIndex: any) => {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, }: FilterDropdownProps) => JSX.Element;
    filterIcon: (filtered: any) => JSX.Element;
    onFilter: (value: any, record: any) => any;
    onFilterDropdownVisibleChange: (visible: any) => void;
};
export default GetColumnSearchProps;
