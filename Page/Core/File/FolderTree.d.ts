import React from 'react';
export interface FolderTreeProps {
    root: string;
    auth?: boolean;
    onChange: (value: React.Key[] | undefined) => void;
    innerParams: React.Key[] | undefined;
    [x: string]: any;
}
declare const FolderTree: React.FC<FolderTreeProps>;
export default FolderTree;
