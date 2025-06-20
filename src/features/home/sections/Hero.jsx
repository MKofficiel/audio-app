import clsx from "clsx";
import { Link } from "react-router";
import Button from "../../../ui/Button";

const Hero = () => {
  return (
    // <section className="relative flex items-center justify-center border-b border-red-600 bg-[#191919] max-sm:min-h-[65vh] md:min-h-[90vh] lg:min-h-[90vh]">
    <section className="relative flex items-center justify-center border-b border-red-600">
      {/* <div
        className={clsx(
          `absolute container flex h-full -translate-y-[55px] items-center bg-[url('src/assets/home/mobile/image-header.jpg')] bg-cover bg-center bg-no-repeat text-center text-white opacity-30 max-sm:py-[30px]`,
        )}
      >
        <div>
          <h3>new product</h3>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="headphone">See product</Link>
        </div>
      </div> */}
      <div className="relative container mx-auto h-full max-sm:min-h-[100vh] md:min-h-[90vh] lg:min-h-[90vh]">
        {/* <div className="absolute inset-0 bg-[#191919]/60" /> */}
        <div className="absolute inset-0 -top-[30px] h-full bg-[url('src/assets/home/mobile/image-header.jpg')] bg-cover bg-center opacity-[50.21%] max-sm:-translate-y-[55px] md:bg-[url('src/assets/home/tablet/image-header.jpg')] lg:bg-left" />
        <div className="absolute top-1/2 z-10 mx-auto -translate-y-1/2 text-center text-white md:w-sm">
          <h3 className="mb-[16px] text-sm tracking-[10px] text-white/49 uppercase">
            new product
          </h3>
          <h1 className="mb-[24px] text-4xl leading-[40px] font-bold tracking-[1.29px] uppercase">
            <span className="block">XX99 Mark II </span>Headphones
          </h1>
          <p className="mb-[28px] text-sm leading-[25px] tracking-normal text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button to="headphone">See product</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
