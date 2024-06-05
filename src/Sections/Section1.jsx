import { sectionData } from "./SectionData";
import { Sections } from "./Sections";
import Image from '../assets/bernudarzs.jpg';

export const Section1 = () => {
    
    const title = sectionData['1'].title;
    const text = sectionData['1'].text;
    const img = Image;
    const imgAlt = "Divi mazi zēni no kāzām";
    const imgClasses = "scale-up";
    const imgTitle = "Bilde no bērnudārza laika";
    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt} imgClasses={imgClasses} imgTitle={imgTitle}/>
    );
};