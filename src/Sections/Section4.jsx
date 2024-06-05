import { Sections } from "./Sections";
import { sectionData } from "./SectionData";
import Image from '../assets/2.gimnazija.jpg';

export const Section4 = () => {
    
    const title =  sectionData['4'].title;
    const text = sectionData['4'].text
    const img = Image;
    const imgAlt = "Fonā Rīgas valsts 2.ģimnāzijas ieejas durvis ar skolas uzrakstu un karogu, priekšplānā skolēns";
    const imgClasses = "";
    const imgTitle = "Attēls no Rīgas valsts 2. ģimnāzijas soliņiem";

    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt} imgClasses={imgClasses} imgTitle={imgTitle}/>
    );
};