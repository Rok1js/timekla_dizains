import { Sections } from "./Sections";

export const Section3 = () => {
    
    const title = "Title 1";
    const text = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis lorem mi. Donec suscipit tellus ac suscipit bibendum. Sed pellentesque, mi eu iaculis fringilla, est massa consequat justo, eget sodales ante nisi nec nibh. Mauris tristique non ex ac eleifend. Praesent ut eros sed erat consequat ultricies.",
    ];
    const img = "";
    const imgAlt = "";
    return (
        <Sections title={title} text={text} img={img} imgAlt={imgAlt}/>
    );
};