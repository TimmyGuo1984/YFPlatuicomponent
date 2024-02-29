import React from 'react';
import { ListProps } from 'antd';
export interface FileCardListProps<T> extends ListProps<T> {
    /** 目录编号组 */
    folderIds?: React.Key[];
    fileIds?: React.Key[];
    fileUrl?: string;
    onBack?: () => void;
}
declare const FileCardListPage: React.FC<any>;
export default FileCardListPage;
