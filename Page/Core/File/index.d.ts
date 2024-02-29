import React from 'react';
export interface FolderData {
    id: React.Key;
    name: string;
    description: string;
}
export interface FilePageProps {
    /** 根文件夹名 */
    root: string;
    /** 是否使用验证获取文件夹 */
    auth?: boolean;
    /** 是否允许下载 */
    allowDownload?: boolean;
    /** 预览url */
    previewUrl?: string;
    /** 文件url */
    fileUrl?: string;
    [x: string]: any;
}
declare const PermissionPage: React.FC<FilePageProps>;
export default PermissionPage;
