import React from "react";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";

const arr = [
    {
        img: one,
        name: "Image 1"
    },
    {
        img: two,
        name: "Image 2"
    },
    {
        img: three,
        name: "Image 3"
    },
    {
        img: four,
        name: "Image 4"
    },
    {
        img: one,
        name: "Image 1"
    },
    {
        img: two,
        name: "Image 2"
    },
    {
        img: three,
        name: "Image 3"
    },
    {
        img: four,
        name: "Image 4"
    },
    {
        img: one,
        name: "Image 1"
    },
    {
        img: two,
        name: "Image 2"
    },
    {
        img: three,
        name: "Image 3"
    },
    {
        img: four,
        name: "Image 4"
    },

]


function Gallery() {

    return (
        <div className="image-container">
           {
             arr.map(function(props, index){
                console.log(props.name);
                return(
                    <div className="images" key={index}>
                    <img src={props.img} alt="images" ></img>
                    <p>{props.name}</p>
                </div>
                )
            })
           }
        </div>
    )
}

export default Gallery;