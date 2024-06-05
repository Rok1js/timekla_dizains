import { Sections } from "./Sections";
import { sectionData } from "./SectionData";
import Image from '../assets/LU.png';

export const Section7 = () => {
    
    const title =  sectionData['7'].title;
    const text = sectionData['7'].text
    const img = Image;
    const imgAlt = "Īsziņa no Latvijas universitātes par iestāšanos Latvijas universitātē";
    const imgClasses = "transform-7";
    const imgTitle = "Ekrānšaviņš no īsziņas par pieteikšanos Latvijas universitātei";

    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt} imgClasses={imgClasses} imgTitle={imgTitle}/>
    );
};