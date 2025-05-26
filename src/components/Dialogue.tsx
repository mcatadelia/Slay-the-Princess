import { ReactNode } from 'react';

interface Props {
    speaker : string;
    color? : boolean; //Only used for the Princess. true: light pink; false: dark pink
    caps? : boolean;
    font? : boolean; //Two different Princess fonts. true: Amatic SC; false: East Sea Dokdo

    children?: ReactNode;
}

export const Dialogue = ({speaker, color, caps, font, children}: Props) => {
    
    let text: ReactNode;
    
    if (speaker == "The Princess") {
        let divClass : string = "dpink"

        if (font) divClass = "lpink caps amatic";
        else {
            
            if (color) divClass = "lpink";
            if (caps) divClass += " caps";
            divClass += " east-sea";
        }
        divClass = "dialogue " +  divClass;
        text = (<div className= { divClass }>
                <div className="speaker">{ speaker }</div>{ children }
                </div>)

    } else if (speaker == "tlq") {
        text = (<div className="dialogue">
            <span className="long-quiet east-sea"> { children } </span>
        </div>)
    }
    else {
        text = (<div className="dialogue">
            <div className="speaker"> { speaker } </div>
            { children }
        </div>)
    }
    
    return text;

}