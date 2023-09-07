const Footer = () => {
  return (
    <div className="bg-[#131313] flex flex-col">
      <input
        type="range"
        className="slider w-full h-1 z-10"
        min="1"
        max="100"
      />
      <div>
        <div className="w-16 h-16 bg-slate-400"></div>
      </div>
    </div>
  );
};
export default Footer;
