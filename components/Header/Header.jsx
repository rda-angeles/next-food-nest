import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [navColor, setNavColor] = useState("transparent");
  const [navShadow, setNavShadow] = useState("");
  const [iconWhite, setIconWhite] = useState("invert(0)");

  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavColor("#1fab89");
      setNavShadow("shadow-md shadow-black");
      setIconWhite("invert(1)");
    } else {
      setNavColor(navColor);
      setNavShadow(navShadow);
      setIconWhite(iconWhite);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div
      className={`header w-full h-20 fixed z-30 ${navShadow}`}
      style={{
        backgroundColor: navColor,
        transition: "background-color .3s",
        position: "fixed",
      }}
    >
      <div className="nav-wrapper container mx-auto flex justify-between items-center h-full px-5 lg:px-0">
        {/* Nav Logo */}
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="/">
            <h3 className="font-bold ">
              Food<span className="text-black">Nest</span>
            </h3>
          </a>
        </motion.div>

        {/* ===================================== On Larger Devices ===================================== */}

        <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
          <AccountCircleIcon
            sx={{ fontSize: "2rem", color: "black", filter: iconWhite }}
          />
        </motion.div>

        {/* ===================================== On Mobile Devices ===================================== */}
      </div>
    </div>
  );
};

export default Header;
