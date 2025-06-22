import clsx from "clsx";
import { Link } from "react-router";
import Button from "../../../ui/Button";

const Hero = () => {
  return (
    <section className="max-3xl:h-[100vh] relative h-[60vh] bg-[#141414] text-white max-md:h-[90vh] lg:portrait:h-[37vh]">
      <div className="container-custom h-full max-lg:-mt-[80px] lg:mt-[-60px]">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 h-full">
          <div className="h-full bg-[url('src/assets/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat opacity-[50%] md:bg-[url('src/assets/home/tablet/image-header.jpg')] md:bg-cover lg:bg-[url('src/assets/home/desktop/image-hero.jpg')] lg:bg-cover xl:bg-contain" />
          <div className="absolute inset-0 bg-[#141414]/40" />
        </div>
        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-[328px] text-center text-white md:w-[379px] lg:mx-0 lg:mt-[100px] lg:text-left">
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
      </div>
    </section>
  );
};

export default Hero;
