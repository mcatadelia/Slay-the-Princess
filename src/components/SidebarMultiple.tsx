import { ReactNode } from 'react';

interface Props {
    id : string;
    option1 : string;
    option2 : string;
    numberOptions : number;
    option3? : string;
    option4? : string;
    
}


export const SidebarMultiple = ({ id, numberOptions, option1, option2, option3 } : Props) => {
    let text : ReactNode;

    if (numberOptions == 2) {
        text = <>
        <div className="sidebar-text-reply" style={{display: "grid"}}>
            · { option1 }
        </div>
        <div className="sidebar-text-reply" style={{display: "grid"}}>
            · { option2 }
        </div>
        </>
    } else if (numberOptions == 3) {
        text = <>
        <div className="sidebar-text-reply" style={{display: "grid"}}>
            · { option1 }
        </div>
        <div className="sidebar-text-reply" style={{display: "grid"}}>
            · { option2 }
        </div>
        <div className="sidebar-text-reply" style={{ gridRow: 1/3, display: "grid"}}>
            · { option3 }
        </div>
        </>
    }
    
    return <>
    <div className="sidebar-multiple-wrapper" id={ id }>
        { text } 
    </div>
    </>
}