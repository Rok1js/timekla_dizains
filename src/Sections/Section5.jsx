import { Sections } from "./Sections";
import { sectionData } from "./SectionData";
import Image from '../assets/dators.jpg';

export const Section5 = () => {
    
    const title =  sectionData['5'].title;
    const text = sectionData['5'].text
    const img = Image;
    const imgAlt = "Stacionārā datora komponentes";
    const imgClasses = "transform-5 h-[600px] object-cover max-w-none";
    const imgTitle = "Attēls ar datoru komponentēm";

    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt} imgClasses={imgClasses} imgTitle={imgTitle}/>
    );
};