import { SectionProps } from "../../../types";

const Section = (props: SectionProps) => {
  if (!props) return null;
  return (
    <div className="mt-5">
      <h1 className="text-custom-neutrals-offwhite font-medium  ">
        {props.title}
      </h1>
      <div
        className={`mt-3 flex overflow-x-auto lg:-ml-4 scrollbar-hide ${props.className}`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Section;
