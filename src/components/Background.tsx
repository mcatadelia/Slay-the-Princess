import { ReactNode } from 'react';

interface Props {
    princess : string;
    title : string; 
    chapter : string;
    children? : ReactNode;
    
}

export const Background = ({ children, princess, title, chapter }: Props) => {
    return <>
        <div className="background-princess" style={{backgroundImage: "url('/src/assets/images/background/" + princess + ".webp')"}}>
            <div className="title">{ chapter }<br/>{ title } </div>
            <div className="background">
                <div className="text">
                    { children }
                </div>
            </div>
        </div>
    </>
}
