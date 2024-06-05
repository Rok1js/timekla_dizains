import { sectionData } from "./SectionData";
import { Sections } from "./Sections";
import Image from '../assets/futbols.jpg';

export const Section3 = () => {
    
    const title =  sectionData['3'].title;
    const text = sectionData['3'].text
    const img = Image;
    const imgAlt = "Sportists - futbolists koncentrējās uz treniņu melnā formā";
    const imgClasses = "transform-3";
    const imgTitle = "Attēls no futbola treniņa";

    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt} imgClasses={imgClasses} imgTitle={imgTitle}/>
    );
};