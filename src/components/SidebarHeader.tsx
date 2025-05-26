import { ReactNode } from 'react';

interface Props {
    children? : ReactNode;
    id : string;
}


export const SidebarHeader = ({ children, id } : Props) => {
    return <>
    <div className="sidebar reply" id={id}> <span className="sidebar-text-reply">
    · { children }
    </span>
    </div></>
}