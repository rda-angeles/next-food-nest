const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <div className="bg-c-primary h-8 text-c-white flex items-center justify-center">
      <p className="text-[.7rem] font-bold text-white">
        © {getYear} Food<span className="text-black">Nest</span>
      </p>
    </div>
  );
};

export default Footer;
