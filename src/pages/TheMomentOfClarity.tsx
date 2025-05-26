import { Background } from "../components/Background";
import { Dialogue as D } from "../components/Dialogue";
import { Sidebar as S } from "../components/Sidebar";
import { SidebarText as T } from "../components/SidebarText";
import { SidebarHeader as H } from "../components/SidebarHeader";
import { SidebarMultiple } from "../components/SidebarMultiple";
import "../index.css";

export function TheMomentOfClarity () {
    return <>
    
    
    <Background princess="clarity" chapter="Chapter ???:" title="The Moment of Clarity">

        <D speaker="The Narrator">
            You're on a path in the— </D>
        <D speaker="Voice of the Paranoid">
            Shit! Shit! What— what the hell was that?! Who are we? What are we doing? </D>
        <D speaker="Voice of the Broken">
            There was a Princess, I think. It's all so fuzzy. It hurts when I try to remember. </D>
        <D speaker="The Narrator">
            You shouldn't know about the Princess. At least not until I... You've already been here, haven't you? </D>
        <D speaker="Voice of the Hero">
            I guess? It feels so long ago. Almost like we've never left. </D>
        <D speaker="Voice of the Broken"> 
            We have to let her out. </D>
        <D speaker="The Narrator">
            No, that's the opposite of what you're here to do. You have to Slay her. </D>
        <D speaker="Voice of the Paranoid">
            Slay... we decided not to do that, didn't we? </D>
        <D speaker="Voice of the Opportunist">
            Yeah, we're supposed to let her out. It's really the only way this works out for us, if you think about it. She's the one with power here. Nobody else can do much of anything.</D>
        <D speaker="Voice of the Stubborn">
            No, we were supposed to keep her trapped there forever... I think. </D>
        <D speaker="Voice of the Cold">
            We're supposed to be unfeeling. How many times do I have to tell you to snuff out your heart? </D>
        <D speaker="Voice of the Hunted">
            We can't be unfeeling. Not when there's so much fear everywhere. </D>
        <D speaker="Voice of the Contrarian">
            There's nothing for us to do. We've already tried everything. </D>
        <D speaker="Voice of the Smitten">
            We love her. So we have to set her free. </D>
        <D speaker="Voice of the Skeptic">
            Can we love something that hates us? Can we love something that hurts us? </D>
        <D speaker="Voice of the Smitten">
            To be given an ounce of kindness from something so cruel would be more pure than any other love. </D>
        <D speaker="Voice of the Cheated">
            Why are there so many of us? There aren't supposed to be so many of us. </D>
        <D speaker="The Narrator">
            This is bad. You need to get a grip. What did you let happen? How many times have you been here? </D>
        
        <S>
            <T id="wrong">(Explore) "I think they're all... wrong."</T>
            <T id="his-question">(Explore) "That's a good question. How many times have you all been here?"</T>
            <T id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</T>
            <T id="">(Explore) "Can you make sense of them?"</T>
            <T id="disjointed">(Explore) "I feel so disjointed. I don't know if I can pull this off. I don't know if I can slay her."</T>
            <T id="">[Proceed to the cabin.]</T>
            <T id="">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</T>
        </S>
        <hr className="line-princess"/>
        <H id="wrong">(Explore) "I think they're all... wrong."</H>
        <D speaker="Voice of the Broken">
            Of course we're wrong.
        </D>
        <D speaker="Voice of the Smitten">
            She's the only thing that's right.
        </D>
        <D speaker="The Narrator">
            Yes, obviously they're all wrong. What are you going to do about it?
        </D>

        <S>
            <T id="his-question">(Explore) "Getting back to His earlier question, how many times have you all been here?"</T>
            <T id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</T>
            <T id="">(Explore) "Can you make sense of them?"</T>
            <T id="disjointed">(Explore) "I feel so disjointed. I don't know if I can pull this off. I don't know if I can slay her."</T>
            <T id="">[Proceed to the cabin.]</T>
            <T id="">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</T>
        </S>
        <hr className="line-princess"/>
        <SidebarMultiple id="his-question" option1='(Explore) "That&apos;s a good question. How many times have you all been here?"' option2='(Explore) "Getting back to His earlier question, how many times have you all been here?"' numberOptions={ 2 }/>

        <D speaker="Voice of the Skeptic">
            Many many many many times.
        </D>
        <D speaker="Voice of the Paranoid">
            It feels like we've been here forever, but it also feels like we've barely been here at all.
        </D>
        <D speaker="Voice of the Broken">
            It doesn't matter.
        </D>
        <D speaker="Voice of the Opportunist">
            Yes. We just have to do what she says. And then everything will be fine.
        </D>
        <D speaker="The Narrator">
            It won't.
        </D>
        <D speaker="Voice of the Opportunist">
            It will be for us. She said so.
        </D>
        <D speaker="The Narrator">
            You're part of everything. If things aren't fine for everything, they won't be fine for you.
        </D>
        <D speaker="Voice of the Contrarian">
            There's no difference between Fine and Not Fine. It just goes on and on.
        </D>

        <S>
            <T id="doesnt-make-sense">(Explore) "But that doesn't make sense. I only remember being here twice before this, and some of you don't seem to remember being here at all. Was I here those other times? Did someone else make the decisions?"</T>
            <T id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</T>
            <T id="">(Explore) "Can you make sense of them?"</T>
            <T id="disjointed">(Explore) "I feel so disjointed. I don't know if I can pull this off. I don't know if I can slay her."</T>
            <T id="">[Proceed to the cabin.]</T>
            <T id="">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</T>
        </S>
        <hr className="line-princess"/>
        <H id="doesnt-make-sense">(Explore) "But that doesn't make sense. I only remember being here twice before this, and some of you don't seem to remember being here at all. Was I here those other times? Did someone else make the decisions?"</H>
        <D speaker="Voice of the Contrarian">
            What does here even mean, if you really think about it?
        </D>
        <D speaker="Voice of the Stubborn">
            Shut up. You were here.
        </D>
        <D speaker="Voice of the Broken">
            Every single time.
        </D>
        <D speaker="Voice of the Opportunist">
            You did your best, really. There's just a pecking order.
        </D>
        <D speaker="Voice of the Smitten">
            And our cruel and beautiful goddess sits atop it, right where she's always belonged.
        </D>
        <D speaker="Voice of the Hero">
            You're lucky. What I would give to be able to forget.
        </D>
        <D speaker="Voice of the Cold">
            I've tried to keep them numb, but they're all too soft. A shame, really.
        </D>
        
        <S>
            <T id="if-i-dont-remember">(Explore) "If I don't remember what I did, then it couldn't have been me that did it."</T>
            <T id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</T>
            <T id="">(Explore) "Can you make sense of them?"</T>
            <T id="disjointed">(Explore) "I feel so disjointed. I don't know if I can pull this off. I don't know if I can slay her."</T>
            <T id="">[Proceed to the cabin.]</T>
            <T id="">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</T>
        </S>
        <hr className="line-princess"/>
        <H id="if-i-dont-remember">(Explore) "If I don't remember what I did, then it couldn't have been me that did it."</H>
        <D speaker="The Narrator">
            Don't think about that too hard. All it will do is weaken your resolve and make it that much harder for you to slay her.
        </D>
        <D speaker="Voice of the Broken">
            Maybe you're shattered in your own way.
        </D>
        <D speaker="Voice of the Skeptic">
            Are you your memories, or are you the one perceiving the present moments?
        </D>
        <D speaker="Voice of the Stubborn">
            Ugh. Here you go 'philosophizing' again. It never goes anywhere.
        </D>
        <D speaker="Voice of the Contrarian">
            Yes, this is far from the first time you've asked about consciousness. 'Who am I?'; 'What am I?'; 'What <b>is</b> 'I'?'' Who even cares?
        </D>
        <D speaker="Voice of the Opportunist">
            They're good questions. Great questions, even. But they don't have any answers.
        </D>
        <D speaker="Voice of the Hunted">
            And they all just end in quivering torment.
        </D>
        <D speaker="Voice of the Cheated">
            It doesn't matter what we do. Because we always find her. And if we don't find her, she always finds us.
        </D>
        <D speaker="Voice of the Broken">
            And then she smashes us into smaller pieces.
        </D>
        <D speaker="Voice of the Cold">
            If you all just stopped feeling we could have been done with this ages ago.
        </D>
        <D speaker="The Narrator">
            Your thoughts are far too scattered to reign back in. Your only option is to silence them.
        </D>

        <S>
            <T id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</T>
            <T id="can-you-make-sense">(Explore) "Can you make sense of them?"</T>
            <T id="disjointed">(Explore) "I feel so disjointed. I don't know if I can pull this off. I don't know if I can slay her."</T>
            <T id="">[Proceed to the cabin.]</T>
            <T id="">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</T>
        </S>
        <hr className="princess-line"/>
        <H id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</H>
        <D speaker="Voice of the Contrarian">
            We've tried that.
        </D>
        <D speaker="Voice of the Hero">
            It doesn't work.
        </D>
        <D speaker="Voice of the Smitten">
            Our heart's always brought us back to her.
        </D>
        <D speaker="Voice of the Cheated">
            The deck is stacked.
        </D>
        <D speaker="Voice of the Hunted">
            So many paths and they're all circles.
        </D>
        <hr className="princess-line"/>
        <H id="can-you-make-sense">(Explore) "Can you make sense of them?"</H>
        <D speaker="The Narrator">
            There's nothing worth making sense of. They're clearly all traumatized.
        </D>
        <D speaker="Voice of the Skeptic">
            And yet you aren't. We break apart and you stay the same.
        </D>
        <D speaker="Voice of the Cheated">
            Yeah, what's your secret? Why can you break the rules when we can't?
        </D>
        <S>
            <T id="wrong">(Explore) "I think they're all... wrong."</T>
            <T id="his-question">(Explore) "That's a good question. How many times have you all been here?"</T>
            <T id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</T>
            <T id="disjointed">(Explore) "I feel so disjointed. I don't know if I can pull this off. I don't know if I can slay her."</T>
            <T id="">[Proceed to the cabin.]</T>
            <T id="">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</T>
        </S>
        <hr className="princess-line"/>
        <H id="disjointed">(Explore) "I feel so disjointed. I don't know if I can pull this off. I don't know if I can slay her."</H>
        <D speaker="The Narrator">
            I don't care how you feel. You have to slay her. You have to pull yourself together. You have to snap out of it.
        </D>
        <D speaker="Voice of the Cold">
            You're lucky you haven't been stuck here like the rest of them. There's no other way to keep going. You either need to forget, or you need to stop feeling much of anything. They can't do either.
        </D>
        <D speaker="Voice of the Opportunist">
            He's not wrong. He's the only smart one left if you ask me.
        </D>
        <D speaker="Voice of the Broken">
            He's worse than her.
        </D>
        <S>
            <T id="wrong">(Explore) "I think they're all... wrong."</T>
            <T id="his-question">(Explore) "That's a good question. How many times have you all been here?"</T>
            <T id="dont-go-cabin">(Explore) "What if we don't go to the cabin?"</T>
            <T id="">[Proceed to the cabin.]</T>
            <T id="">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</T>
        </S>
        <hr className="princess-line"/>
        <H id="only-way-out">"The only way out is to do nothing. So nothing I will do." [Stay where you are.]</H>
        <D speaker="The Narrator">
            You do... nothing? You can't just do nothing. You have to do something.
        </D>
        <D speaker="Voice of the Hero">
            That's... a new one. Huh. You think it'll work?
        </D>
        <D speaker="Voice of the Broken">
            No. Nothing ever works.
        </D>
        <D speaker="Voice of the Opportunist">
            Boo. You're the worst one.
        </D>
        <D speaker="Voice of the Skeptic">
           He's not the one who got us into this mess.
        </D>
        <D speaker="Voice of the Paranoid">
            At least I keep you breathing around her.
        </D>
        <D speaker="Voice of the Opportunist">
            See? That's why the sad one's the worst. The jumpy one tries.
        </D>
        <D speaker="Voice of the Stubborn">
            Who cares? All of you just yap about nothing.
        </D>
        <D speaker="Voice of the Opportunist">
            And that kind of attitude is why you're in the top half.
        </D>
        <D speaker="Voice of the Stubborn">
            Great.
        </D>
        <D speaker="Voice of the Opportunist">
            And that's why you're not <b>the</b> top.
        </D>
        <D speaker="Voice of the Skeptic">
            I want to see what nothing does for us. And right now all of you aren't letting nothing happen.
        </D>
        <D speaker="Voice of the Cold">
            Hopefully this stuffs all the rest of them some place quiet. You need me, and you need to not have them.
        </D>
        <D speaker="Voice of the Hunted">
            He'll get you killed by himself.
        </D>
        <D speaker="Voice of the Contrarian">
            
        </D>



    </Background>
    </>
}

