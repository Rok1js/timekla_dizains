/* eslint-disable react/jsx-key */

import classNames from "classnames";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
export const Sections = ({title , text , img, imgAlt, imgClasses = "" , imgTitle = ""}) => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    return (
        <div className="text-text pt-[75px]">
            <div className="xl:flex xl:mb-[110px]">
                <div className="xl:flex-[1_1_0%] xl:flex justify-center items-center">
                    <h3 className="title-1 text-center mx-[30px] mt-[75px] mb-[50px] lg:max-w-[500px]">{title}</h3>
                </div>
                <div className="flex md:justify-center
                xl:flex-[1_1_0%]"
                >
                    <div>
                        <div  className="bg-zinc-500 w-screen h-[100vw] mt-[25px] mb-[50px] overflow-hidden
                        md:w-[500px] md:h-[500px]
                        xl:m-0 xl:w-[600px]">
                        <img
                        className={classNames(
                            'object-fit',
                            imgClasses
                        )}
                        src={img} alt={imgAlt}  />
                        
                        </div>
                        <p className="text-footnote text-center">{imgTitle}</p>
                    </div> 
                </div>
            </div>
           
            <div className="text-mobile-body text-justify px-[40px] mb-[75px]
            xl:mx-[100px] xl:bg-primary xl:text-[#09100C] xl:text-body xl:p-[35px] xl:mb-[150px]">
                {text.map((element, index) => {
                    return (
                        <p className={
                            classNames(
                                'mb-[30px]',
                                {'mb-0': text.length === (index + 1)}
                            )
                        }>{element}</p>
                        
                    )
                })}
                
            </div>
        </div>
    );
};