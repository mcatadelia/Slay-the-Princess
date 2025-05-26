import { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';

interface Props {
    children? : ReactNode;
    id : string;
}


export const SidebarText = ({ children, id } : Props) => {
    id = "#" + id;
    return <>
        <div className="sidebar-text"><HashLink to={id}>· { children }</HashLink></div>
        </>
}