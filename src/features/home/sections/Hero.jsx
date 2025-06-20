import clsx from "clsx";
import { Link } from "react-router";
import Button from "../../../ui/Button";

const Hero = () => {
  return (
    // <section className="relative bg-red-700">
    //   <div className="absolute top-0 container flex items-center justify-center max-sm:h-[100vh] md:h-[70vh] lg:h-[100vh]">
    //     <div className="l z-10 mx-auto w-[328px] text-center text-white md:w-[379px]">
    //       <h3 className="mb-[16px] text-sm tracking-[10px] text-white/49 uppercase">
    //         new product
    //       </h3>
    //       <h1 className="mb-[24px] text-4xl leading-[40px] font-bold tracking-[1.29px] uppercase md:text-[56px] md:leading-[58px]">
    //         <span className="block">XX99 Mark II </span>Headphones
    //       </h1>

    //       <p className="mb-[30px] text-[15px] leading-[25px] font-medium tracking-normal text-white/75">
    //         Experience natural, lifelike audio and exceptional build quality
    //         made for the passionate music enthusiast.
    //       </p>
    //       <Button to="headphone">See product</Button>
    //     </div>

    //     {/* <div className="absolute top-[-110px] right-0 bottom-0 left-0 h-[calc(100%+110px)] bg-[url('src/assets/home/mobile/image-header.jpg')] bg-contain bg-center bg-no-repeat md:bg-[url('src/assets/home/tablet/image-header.jpg')]" /> */}
    //     <div className="absolute inset-0 h-full w-full -translate-y-[60px] bg-[url('src/assets/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat md:-translate-y-[100px] md:bg-[url('src/assets/home/tablet/image-header.jpg')] lg:bg-[url('src/assets/home/desktop/image-hero.jpg')] lg:bg-cover" />
    //   </div>
    // </section>
    <section className="relative h-[70vh] overflow-hidden bg-red-400 lg:h-[90vh]">
      {/* BACKGROUND */}
      <div className="absolute top-[-60px] right-0 h-[calc(100%+60px)] bg-[url('src/assets/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat md:top-[-100px] md:h-[calc(100%+100px)] md:bg-[url('src/assets/home/tablet/image-header.jpg')] lg:-left-[70px] lg:bg-[url('src/assets/home/desktop/image-hero.jpg')] lg:bg-left" />
      {/* <div className="absolute top-[-60px] right-0 h-[886px] w-[708.8px] bg-[url('src/assets/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat md:top-[-100px] md:h-[calc(100%+100px)] md:bg-[url('src/assets/home/tablet/image-header.jpg')] lg:bg-[url('src/assets/home/desktop/image-hero.jpg')] lg:bg-left" /> */}

      {/* OVERLAY */}

      {/* CONTENT */}
      <div className="relative z-10 container flex h-full items-center justify-center lg:justify-start">
        <div className="mx-auto w-[328px] text-center text-white md:w-[379px] lg:mx-0 lg:text-left">
          <h3 className="mb-[16px] text-sm tracking-[10px] text-white/49 uppercase">
            new product
          </h3>
          <h1 className="mb-[24px] text-4xl leading-[40px] font-bold tracking-[1.29px] uppercase md:text-[56px] md:leading-[58px]">
            <span className="block">XX99 Mark II</span> Headphones
          </h1>
          <p className="mb-[30px] text-[15px] leading-[25px] font-medium tracking-normal text-white/75">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button to="headphone">See product</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
