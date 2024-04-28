import { Carousel } from "@/components";
const Hero = () => {
    return (
        <div className="container">
            <Carousel images={[{ src: "/images/banners/hero.jpg", alt: "Man using a hat!" }, { src: "/images/banners/hero1.webp", alt: "Man using a hat!" }]} />
        </div>
    );
}

export default Hero
