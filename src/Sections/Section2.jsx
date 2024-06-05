import { sectionData } from "./SectionData";
import { Sections } from "./Sections";
import Image from '../assets/1-6klase.jpg';

export const Section2 = () => {
    
    const title =  sectionData['2'].title;
    const text = sectionData['2'].text
    const img = Image;
    const imgAlt = "Kolāžas bilde ar diviem zēniem - klasesbiedriem no sākumskolas";
    const imgTitle = "Attēls no sākumskolas laikā izveidotā bloga";

    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt} imgTitle={imgTitle}/>
    );
};