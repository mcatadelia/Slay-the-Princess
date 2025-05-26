import './Home.css'
import { Link } from 'react-router-dom';
enum Princess {
    NONE        = "",
    ADVERSARY   = "The Adversary — The song we write in our blood.",
    TOWER       = "The Tower — Doubt forces the hand of fealty.",
    SPECTRE     = "The Spectre — The remains of violence free from hesitation.",
    NIGHTMARE   = "The Nightmare — Fear locked away in the basement of your mind.",
    RAZOR       = "The Razor — To look too closely is to redraw the lines.",
    BEAST       = "The Beast — Softness cornered turns to viciousness.",
    WITCH       = "The Witch — Offering one hand, while concealing the other.",
    STRANGER    = "The Stranger — A peek behind the courtains, likely far too soon.",
    PRISONER    = "The Prisoner — Doubt breaks one shackle while forcing another.",
    DAMSEL      = "The Damsel — Unquestioning commitment to the other.",
    NEEDLE      = "The Eye of the Needle — For those who dwell in caves, meaning lies beyond the shadows dancing on the walls.",
    FURY        = "The Fury — An angel felled is a demon scorned.",
    APOTHEOSIS  = "The Apotheosis — To struggle and fail against the divine is to welcome it into your heart.",
    DRAGON      = "The Princess and the Dragon — Sometimes, when you cut something out of you, a piece of you leaves with it.",
    WRAITH      = "The Wraith — A broken doll, a spirit slain.",
    CLARITY     = "The Moment of Clarity — Bear witness to one's darkest fears.",
    DEN         = "The Den — A creature's lair.",
    WILD        = "The Wild — Bodies fused. Where does one thing begin and another end?",
    THORN       = "The Thorn — Redemption in the thicket of distrust.",
    CAGE        = "The Cage — A vicious cycle framed in chain.",
    GREY        = "The Grey — Feelings buried like knives in hearts.",
    HAPPY       = "Happily Ever After — Everything you didn't know you wanted.",
    PRINCESS    = "The Hero and the Princess.",
    MIRROR      = "The Spaces Between.",
    FINALE      = "The End of Everything.",
}

function ChapterText (princess : Princess) {
    let divText = document.getElementById("princess-text");
    divText!.innerText = princess;
};

function CollapseSection (id : string) {
    let div = document.getElementById(id);
    let arrowText : string = id + "_arrow";

    let arrow = document.getElementById(arrowText);

    if(div!.style.display == "none") {
        div!.style.display = "grid";
        arrow!.style.backgroundImage = "url('/src/assets/collapse.png')";
        
    } else {
        div!.style.display = "none";
        arrow!.style.backgroundImage = "url('/src/assets/collapsed.png')";
    }
}


export function Home () {
    return <>
        <div id="home-background">
            <div id="desktop">
                <div className="home-title">Memories</div>

                <div className="home-subtitle">Beginnings and Endings</div>
                <div className="endings-wrapper" onMouseLeave={ () => ChapterText(Princess.NONE) }>
                    <div className="princess" id="ch1" onMouseOver={ () => ChapterText(Princess.PRINCESS) }/>
                    <div className="princess" id="tlq" onMouseOver={ () => ChapterText(Princess.MIRROR) }/>
                    <div className="princess" id="finale" onMouseOver={ () => ChapterText(Princess.FINALE) }/>
                </div>
                <div className="home-subtitle">Vessels</div>
                <div className="vessel-wrapper" onMouseLeave={ () => ChapterText(Princess.NONE) }>
                    <div className="princess" onMouseOver={ () => ChapterText(Princess.NONE) }/>
                    <div className="princess" id="adversary" onMouseOver={ () => ChapterText(Princess.ADVERSARY) } />
                    <div className="princess" id="tower" onMouseOver={ () => ChapterText(Princess.TOWER) }/>
                    <div className="princess" id="spectre" onMouseOver={ () => ChapterText(Princess.SPECTRE) }/>
                    <div className="princess" id="nightmare" onMouseOver={ () => ChapterText(Princess.NIGHTMARE) }/>
                    <div className="princess" id="razor" onMouseOver={ () => ChapterText(Princess.RAZOR) }/>
                    <div className="princess" id="beast" onMouseOver={ () => ChapterText(Princess.BEAST) }/>
                    <div className="princess" id="witch" onMouseOver={ () => ChapterText(Princess.WITCH) }/>
                    <div className="princess" id="stranger" onMouseOver={ () => ChapterText(Princess.STRANGER) }/>
                    <div className="princess" id="prisoner" onMouseOver={ () => ChapterText(Princess.PRISONER) }/>
                    <div className="princess" id="damsel" onMouseOver={ () => ChapterText(Princess.DAMSEL) }/>
                    <div className="princess" onMouseOver={ () => ChapterText(Princess.NONE) }/>
                    <div className="princess" id="needle" onMouseOver={ () => ChapterText(Princess.NEEDLE) }/>
                    <div className="princess" id="fury" onMouseOver={ () => ChapterText(Princess.FURY) }/>
                    <div className="princess" id="apotheosis" onMouseOver={ () => ChapterText(Princess.APOTHEOSIS) }/>
                    <div className="princess" id="dragon" onMouseOver={ () => ChapterText(Princess.DRAGON) }/>
                    <div className="princess" id="wraith" onMouseOver={ () => ChapterText(Princess.WRAITH) }/>
                    <Link to="/The-Moment-of-Clarity"><div className="princess" id="clarity" onMouseOver={ () => ChapterText(Princess.CLARITY) }/></Link>
                    <div className="princess" id="den" onMouseOver={ () => ChapterText(Princess.DEN) }/>
                    <div className="princess" id="wild" onMouseOver={ () => ChapterText(Princess.WILD) }/>
                    <div className="princess" id="thorn" onMouseOver={ () => ChapterText(Princess.THORN) }/>
                    <div className="princess" id="cage" onMouseOver={ () => ChapterText(Princess.CAGE) }/>
                    <div className="princess" id="grey" onMouseOver={ () => ChapterText(Princess.GREY) }/>
                    <div className="princess" id="happy" onMouseOver={ () => ChapterText(Princess.HAPPY) }/>
                </div>
                <div id="princess-text" className="home-text"></div>
            </div>
            <div id="mobile">
                <div className="home-title">Memories</div>
                <div className="title-wrapper">
                    <div className="home-subtitle">Beginnings and Endings</div>
                    <div className="arrow"><div className="arrow-image" id="beginnings_arrow" onClick={ () => CollapseSection("beginnings")}/></div>
                </div>
                <hr className="home-mobile"/>
                
                <div className="princess-wrapper-mobile" id="beginnings">
                    <div className="princess" id="ch1"/> <div className="home-text">{ Princess.PRINCESS }</div>
                    <div className="princess" id="tlq"/> <div className="home-text">{ Princess.MIRROR }</div>
                    <div className="princess" id="finale"/> <div className="home-text">{ Princess.FINALE }</div>
                </div>
                <div className="home-subtitle">Vessels</div>
                <div className="title-wrapper header2">
                    <div className="home-header2">Chapter II</div>
                    <div className="arrow"><div className="arrow-image" id="chapter2_arrow" onClick={ () => CollapseSection("chapter2")}/></div>
                </div>
                <hr className="home-mobile2"/>
                <div className="princess-wrapper-mobile" id="chapter2">
                    <div className="princess" id="adversary"/> <div className="home-text">{ Princess.ADVERSARY }</div>
                    <div className="princess" id="tower"/> <div className="home-text">{ Princess.TOWER }</div>
                    <div className="princess" id="spectre"/> <div className="home-text">{ Princess.SPECTRE }</div>
                    <div className="princess" id="nightmare"/> <div className="home-text">{ Princess.NIGHTMARE }</div>
                    <div className="princess" id="razor"/> <div className="home-text">{ Princess.RAZOR }</div>
                    <div className="princess" id="beast"/> <div className="home-text">{ Princess.BEAST }</div>
                    <div className="princess" id="witch"/> <div className="home-text">{ Princess.WITCH }</div>
                    <div className="princess" id="stranger"/> <div className="home-text">{ Princess.STRANGER }</div>
                    <div className="princess" id="prisoner"/> <div className="home-text">{ Princess.PRISONER }</div>
                    <div className="princess" id="damsel"/> <div className="home-text">{ Princess.DAMSEL }</div>
                </div>
                <div className="title-wrapper header2">
                    <div className="home-header2">Chapter III</div>
                    <div className="arrow"><div className="arrow-image" id="chapter3_arrow" onClick={ () => CollapseSection("chapter3")}/></div>
                </div><hr className="home-mobile2"/><br/>
                <div className="princess-wrapper-mobile" id="chapter3">
                    <div className="princess" id="needle"/> <div className="home-text">{ Princess.NEEDLE }</div>
                    <div className="princess" id="fury"/> <div className="home-text">{ Princess.FURY }</div>
                    <div className="princess" id="apotheosis"/> <div className="home-text">{ Princess.APOTHEOSIS }</div>
                    <div className="princess" id="dragon"/> <div className="home-text">{ Princess.DRAGON }</div>
                    <div className="princess" id="wraith"/> <div className="home-text">{ Princess.WRAITH }</div>
                    <Link to="/The-Moment-of-Clarity"><div className="princess" id="clarity"/></Link><div className="home-text">{ Princess.CLARITY }</div>
                    <div className="princess" id="den"/> <div className="home-text">{ Princess.DEN }</div>
                    <div className="princess" id="wild"/> <div className="home-text">{ Princess.WILD }</div>
                    <div className="princess" id="thorn"/> <div className="home-text">{ Princess.THORN }</div>
                    <div className="princess" id="cage"/> <div className="home-text">{ Princess.CAGE }</div>
                    <div className="princess" id="grey"/> <div className="home-text">{ Princess.GREY }</div>
                    <div className="princess" id="happy"/> <div className="home-text">{ Princess.HAPPY }</div>
                </div>
            </div>
        </div>
    </>
}