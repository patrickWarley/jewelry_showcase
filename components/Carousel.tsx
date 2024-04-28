"use client"
import Image from "next/image";
import next from "next";
import { useState } from "react";


import { ImageModel } from "@/types/types";
interface props {
    images: ImageModel[];
};

const Carousel = ({ images }: props) => {
    const [currSlide, setCurrSlide] = useState(0);

    const previousSlide = () => {
        let newSlide = currSlide - 1;
        if (newSlide < 0) return setCurrSlide(images.length - 1);

        setCurrSlide(newSlide);
    }

    const nextSlide = () => {
        let newSlide = currSlide + 1;
        if (newSlide > images.length - 1) return setCurrSlide(0);

        setCurrSlide(newSlide);
    }

    return (
        <div className="overflow-hidden relative w-screen">
            <div
                className={`flex relative transition w-screen h-screen ease-out duration-400 flex-row`}
                style={{ transform: `translate(-${currSlide * 100}%)` }}
            >
                {
                    images.map((img, idx) => (

                        <img src={img.src} alt={img.alt} key={idx} className=" w-screent" />
                    ))
                }
            </div>
            <a className="absolute top-2/4 " onClick={nextSlide}>next</a>
        </div >
    );
}

export default Carousel;
