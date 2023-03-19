import Button from "@mui/material/Button";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Explore from "./Explore";
import Services from "./Services";
import Popular from "../Foods/Popular/Popular";

const Hero = () => {
  return (
    <div>
      <div
        className="h-screen flex items-center justify-around bg-img relative "
        style={{
          backgroundImage: "url('/images/landing.jpg')",
        }}
      >
        <div className="overlay"></div>

        <div className="text-center max-w-3xl absolute z-10 px-2">
          <div className="img-wrapper max-w-[15rem] md:max-w-xs mx-auto flex items-center mb-5 ">
            <img
              src="/images/logo-1.svg"
              alt="FoodNest Logo"
              style={{
                filter: "invert(1)",
              }}
            />
          </div>
          <h3 className="text-5xl md:text-7xl mb-5">
            Discover The Secret Of Good Cooking.
          </h3>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              border: "1px solid #1fab89",
              ":hover": {
                border: "1px solid #9df3c4",
                backgroundColor: "#9df3c4",
              },
            }}
          >
            <a href="/recipes">Find your recipe!</a>
            <LocalDiningIcon sx={{ marginLeft: ".5rem", fontSize: "1.3rem" }} />
          </Button>
        </div>
      </div>
      {/* Services */}

      <Services />
      {/* Explore */}

      <Popular />

      <Explore />
    </div>
  );
};

export default Hero;
