import { ReactNode } from 'react';

interface Props {
    children? : ReactNode;
}


export const Sidebar = ({ children } : Props) => {
    return <>
    <div className="sidebar">
        { children }
    </div></>
}