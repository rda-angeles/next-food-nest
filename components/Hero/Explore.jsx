import SearchIcon from "@mui/icons-material/Search";
const Explore = () => {
  return (
    <div
      className="bg-white h-[50vh] bg-img relative flex items-center justify-around"
      style={{
        backgroundImage: "url(/images/explore-bg.jpg)",
      }}
    >
      <div className="overlay"></div>

      <div className="content absolute z-10 text-center max-w-3xl">
        <h1>Look at other recipes.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ab.
        </p>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Search your favorite food here"
            className="py-[.5rem] px-3 w-[20rem] rounded-xl text-black"
          />
          <SearchIcon
            sx={{ fontSize: "2.3rem", marginLeft: ".5rem", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
