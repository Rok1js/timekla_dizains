/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useDeviceType from "./useDeviceType";
import { sectionData } from "./Sections/SectionData";
import Image from './assets/bernudarzs.jpg';
import Image2 from './assets/1-6klase.jpg';
import Image3 from './assets/futbols.jpg';
import Image4 from './assets/2.gimnazija.jpg';
import Image5 from './assets/dators.jpg';
import Image6 from './assets/1.gimnazija.jpg';
import Image7  from './assets/LU.png';
import classNames from "classnames";



const TruncateText = ( text, readMoreUrl ) => {
    const isMobile = useDeviceType();
    const maxChars = isMobile ? 100 : 350;
    // Truncate the text if it exceeds maxChars
    const truncatedText = text[0]?.length > maxChars ? text[0].substring(0, maxChars) + '....' : text[0] + " ";
    
  
    return (
      <p className="text-justify xl:w-[700px]">
        {truncatedText}
        { (
          <Link to={readMoreUrl} className="text-primary">
            Lasīt vairāk...
          </Link>
        )}
      </p>
    );
  };

export const Home = () => {
  return (
    <div className="pt-[75px] xl:pt-0">
        <div className="bg-primary my-[25px] flex justify-center h-[150px] align-middle items-center
        lg:mt-[60px] lg:mb-[85px] lg:h-[400px] ">
            <div>
                <h3 className="title-headline w-[245px] text-center text-[#09100C]
                lg:w-full lg:title-1 lg:font-normal lg:text-[#09100C]">Mans ceļs uz Latvijas universitāti</h3>
                <p className="text-footnote text-center text-[#09100C]">Reinis Bārzdiņš , rb21080</p>
            </div>
        </div>

        {/* 1.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center m-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">{sectionData['1'].title}</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText(sectionData['1'].text ,"/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <div>
                    <div className="bg-zinc-500 w-screen h-[100vw] mt-[25px]  overflow-hidden
                    md:w-[300px] md:h-[300px]
                    2xl:w-[360px] 2xl:h-[360px]">
                        <img 
                        className={classNames(
                            'object-fit',
                            'scale-up'
                        )}
                        src={Image} alt="Divi mazi zēni no kāzām"  />
                    
                    </div>
                    <p className="text-footnote text-center mb-[50px] md:w-[300px] 2xl:w-[360px]">Bilde no bērnudārza laika</p>
                </div>
            </div>
        </div>

        {/* 2.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:flex-row-reverse lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center m-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">{sectionData['2'].title}</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText(sectionData['2'].text ,"/sekcija2")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <div>
                    <div className="bg-zinc-500 w-screen h-[100vw] mt-[25px]  overflow-hidden
                    md:w-[300px] md:h-[300px]
                    2xl:w-[360px] 2xl:h-[360px]">
                     <img 
                className={classNames(
                    'object-fit',
                )}
                src={Image2} alt="Kolāžas bilde ar diviem zēniem - klasesbiedriem no sākumskolas"  />
                    
                    </div>
                    <p className="text-footnote text-center mb-[50px] md:w-[300px] 2xl:w-[360px]">Attēls no sākumskolas laikā izveidotā bloga</p>
                </div>
                
            </div>
        </div>

       {/* 3.Sekcija */}
       <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center m-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">{sectionData['3'].title}</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                {TruncateText(sectionData['3'].text ,"/sekcija3")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <div>
                    <div className="bg-zinc-500 w-screen h-[100vw] mt-[25px]  overflow-hidden
                    md:w-[300px] md:h-[300px]
                    2xl:w-[360px] 2xl:h-[360px]">
                         <img 
                className={classNames(
                    'object-fit',
                )}
                src={Image3} alt="Sportists - futbolists koncentrējās uz treniņu melnā formā"  />
                    
                    </div>
                    <p className="text-footnote text-center mb-[50px] md:w-[300px] 2xl:w-[360px]">Attēls no futbola treniņa</p>
                </div>
            </div>
        </div>

        {/* 4.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px] lg:flex-row-reverse">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center m-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">{sectionData['4'].title}</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                {TruncateText(sectionData['4'].text ,"/sekcija4")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <div>
                    <div className="bg-zinc-500 w-screen h-[100vw] mt-[25px]  overflow-hidden
                    md:w-[300px] md:h-[300px]
                    2xl:w-[360px] 2xl:h-[360px]">
                       <img 
                className={classNames(
                    'object-fit',
                )}
                src={Image4} alt="Fonā Rīgas valsts 2.ģimnāzijas ieejas durvis ar skolas uzrakstu un karogu, priekšplānā skolēns"  />
                    
                    </div>
                    <p className="text-footnote text-center mb-[50px] md:w-[300px] 2xl:w-[360px]">Attēls no Rīgas valsts 2. ģimnāzijas soliņiem</p>
                </div>
            </div>
        </div>

        {/* 5.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center m-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">{sectionData['5'].title}</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                {TruncateText(sectionData['5'].text ,"/sekcija5")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <div>
                    <div className="bg-zinc-500 w-screen h-[100vw] mt-[25px]  overflow-hidden
                    md:w-[300px] md:h-[300px]
                    2xl:w-[360px] 2xl:h-[360px]">
                        <img 
                className={classNames(
                    'transform-5 h-[800px] object-cover max-w-none md:h-[300px] 2xl:h-[500px]',
                )}
                src={Image5} alt="Stacionārā datora komponentes"  />
                    
                    </div>
                    <p className="text-footnote text-center mb-[50px] md:w-[300px] 2xl:w-[360px]">Attēls ar datoru komponentēm</p>
                </div>
            </div>
        </div>

       {/* 6.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px] lg:flex-row-reverse">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center m-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">{sectionData['6'].title}</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                {TruncateText(sectionData['6'].text ,"/sekcija6")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <div>
                    <div className="bg-zinc-500 w-screen h-[100vw] mt-[25px]  overflow-hidden
                    md:w-[300px] md:h-[300px]
                    2xl:w-[360px] 2xl:h-[360px]">
                        <img 
                className={classNames(
                    'object-fit',
                )}
                src={Image6} alt="Māsa un brālis svētku apģērbā pirmajā septembrī"  />
                    
                    </div>
                    <p className="text-footnote text-center mb-[50px] md:w-[300px] 2xl:w-[360px]">Attēls no pirmā septembra</p>
                </div>
            </div>
        </div>

       {/* 7.Sekcija */}
       <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center m-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">{sectionData['7'].title}</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                {TruncateText(sectionData['7'].text ,"/sekcija7")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <div>
                    <div className="bg-zinc-500 w-screen h-[100vw] mt-[25px]  overflow-hidden
                    md:w-[300px] md:h-[300px]
                    2xl:w-[360px] 2xl:h-[360px]">
                       <img 
                className={classNames(
                    'transform-7',
                )}
                src={Image7} alt="Īsziņa no Latvijas universitātes par iestāšanos Latvijas universitātē"  />
                    
                    </div>
                    <p className="text-footnote text-center mb-[50px] md:w-[300px] 2xl:w-[360px]">Ekrānšaviņš no īsziņas par pieteikšanos Latvijas universitātei</p>
                </div>
            </div>
        </div>

        <div className="mt-[50px] bg-primary w-screen h-[140px] flex justify-center items-center lg:w-full">
            <h2 className="title-headline uppercase text-center align-middle text-[#09100C]">Beigas</h2>
        </div>
    </div>
  );
};
