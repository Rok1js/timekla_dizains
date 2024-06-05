import { Sections } from "./Sections";
import { sectionData } from "./SectionData";
import Image from '../assets/1.gimnazija.jpg';

export const Section6 = () => {
    
    const title =  sectionData['6'].title;
    const text = sectionData['6'].text
    const img = Image;
    const imgAlt = "Māsa un brālis svētku apģērbā pirmajā septembrī";
    const imgClasses = "transform-6";
    const imgTitle = "Attēls no pirmā septembra";

    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt} imgClasses={imgClasses} imgTitle={imgTitle}/>
    );
};