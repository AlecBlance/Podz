import { RefObject } from "react";

const Header = ({ innerRef }: { innerRef: RefObject<HTMLDivElement> }) => {
  return (
    <div className="text-custom-neutrals-offwhite" ref={innerRef}>
      <h1 className="text-2xl  font-semibold ">Hey, User!</h1>
      <p className="text-xs  font-light mt-2 ">
        Check out this week's fresh releases.
      </p>
    </div>
  );
};
export default Header;
