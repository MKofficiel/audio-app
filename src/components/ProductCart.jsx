import { Link } from "react-router";

const ProductCart = ({ image, label, path }) => {
  return (
    <figure className="bg-card-background relative flex h-full flex-col items-center justify-end rounded-md p-6">
      <img
        src={image}
        alt={label}
        height={101}
        width={104}
        className="absolute top-0 -translate-y-1/2"
      />

      <div className="flex flex-col items-center pt-[88px]">
        <h2 className="mb-[17px] text-sm font-bold tracking-[1.07px] uppercase">
          {label}
        </h2>
        <Link
          to={path}
          className="flex items-center gap-[16px] text-sm font-bold text-[#797979] uppercase"
        >
          <span>Shop</span>
          <span>
            <img src="src/assets/shared/desktop/icon-arrow-right.svg" alt="" />
          </span>
        </Link>
      </div>
    </figure>
  );
};

export default ProductCart;
