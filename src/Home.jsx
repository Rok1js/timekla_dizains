/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useDeviceType from "./useDeviceType";

const TruncateText = ( text, readMoreUrl ) => {
    const isMobile = useDeviceType();
    const maxChars = isMobile ? 200 : 350;
    // Truncate the text if it exceeds maxChars
    const truncatedText = text?.length > maxChars ? text.substring(0, maxChars) + '....' : text + " ";
    
  
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
                lg:w-full lg:title-1 lg:font-normal">Mans ceļs uz Latvijas universitāti</h3>
                <p className="text-footnote text-center text-[#09100C]">Reinis Bārzdiņš , rb21080</p>
            </div>
        </div>

        {/* 1.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center my-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">1.title</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.","/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <img 
                className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px]
                md:w-[300px] md:h-[300px]
                2xl:w-[500px] 2xl:h-[500px]"
                src="" alt=""  />
            </div>
        </div>

        {/* 2.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:flex-row-reverse lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center my-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">1.title</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.","/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <img 
                className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px]
                md:w-[300px] md:h-[300px]
                2xl:w-[500px] 2xl:h-[500px]"
                src="" alt=""  />
            </div>
        </div>

       {/* 3.Sekcija */}
       <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center my-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">1.title</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.","/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <img 
                className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px]
                md:w-[300px] md:h-[300px]
                2xl:w-[500px] 2xl:h-[500px]"
                src="" alt=""  />
            </div>
        </div>

        {/* 4.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px] lg:flex-row-reverse">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center my-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">1.title</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.","/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <img 
                className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px]
                md:w-[300px] md:h-[300px]
                2xl:w-[500px] 2xl:h-[500px]"
                src="" alt=""  />
            </div>
        </div>

        {/* 5.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center my-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">1.title</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.","/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <img 
                className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px]
                md:w-[300px] md:h-[300px]
                2xl:w-[500px] 2xl:h-[500px]"
                src="" alt=""  />
            </div>
        </div>

       {/* 6.Sekcija */}
        <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px] lg:flex-row-reverse">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center my-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">1.title</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.","/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <img 
                className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px]
                md:w-[300px] md:h-[300px]
                2xl:w-[500px] 2xl:h-[500px]"
                src="" alt=""  />
            </div>
        </div>

       {/* 7.Sekcija */}
       <div className="text-text border-text border-t-[3px]
        lg:flex lg:gap-[60px] lg:mx-[90px] lg:border-0 lg:mb-[70px]">
            <div className="lg:border-t-[3px] lg:border-text xl:flex-[2_1_0%]">
                <div>
                    <h3 className="title-3 text-center my-[25px] 
                    lg:title-2 lg:mt-[60px] lg:mb-[40px]">1.title</h3>
                </div>
                <div className="text-mobile-body px-[40px] lg:flex xl:text-body lg:justify-center">
                    {TruncateText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.","/sekcija1")}
                </div>
            </div>
            <div className="md:flex md:justify-center xl:flex-[1_1_0%]"
            >
                <img 
                className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px]
                md:w-[300px] md:h-[300px]
                2xl:w-[500px] 2xl:h-[500px]"
                src="" alt=""  />
            </div>
        </div>

        <div className="mt-[50px] bg-primary w-screen h-[140px] flex justify-center items-center lg:w-full">
            <h2 className="title-headline uppercase text-center align-middle text-[#09100C]">Beigas</h2>
        </div>
    </div>
  );
};
