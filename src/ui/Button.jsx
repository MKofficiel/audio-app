import { Link } from "react-router";

const Button = ({ children, variant = "primary", to }) => {
  const styleBase =
    "py-[15px] px-[30px]  text-white text-sm font-bold uppercase tracking-[2px] transition-colors duration-300 ease-in-out";
  const styleVariants = {
    primary: styleBase + " bg-primary hover:bg-primary-hover",
    secondary: styleBase + "bg-[#101010] hover:bg-[#191919]",
    tertiary:
      "bg-transparent border border-white hover:bg-white hover:text-black",
  };
  return (
    <Link to={to} className={styleVariants[variant]}>
      {children}
    </Link>
  );
};

export default Button;
