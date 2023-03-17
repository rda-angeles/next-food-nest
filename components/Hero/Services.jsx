import KitchenIcon from "@mui/icons-material/Kitchen";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FlagIcon from "@mui/icons-material/Flag";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
const Services = () => {
  const services = [
    {
      id: 1,
      serviceName: "Foods",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iure.",
      icon: (
        <KitchenIcon
          sx={{
            fontSize: "4.5rem",
            color: "#1fab89",
          }}
        />
      ),
    },
    {
      id: 2,
      serviceName: "Recipes",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iure.",
      icon: (
        <MenuBookIcon
          sx={{
            fontSize: "4.5rem",
            color: "#1fab89",
          }}
        />
      ),
    },
    {
      id: 3,
      serviceName: "Cuisines",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, iure.",
      icon: (
        <FlagIcon
          sx={{
            fontSize: "4.5rem",
            color: "#1fab89",
          }}
        />
      ),
    },
  ];

  return (
    <div className=" bg-white text-black section-padding relative z-20 overflow-hidden">
      <div className="absolute left-[-12rem] bottom-[-3rem] z-[-1] hidden lg:block">
        <div className="img-wrapper max-w-xl">
          <img src="/images/services-bg.png" alt="" />
        </div>
      </div>

      <div className="container mx-auto z-20">
        <div className="section-title flex flex-col items-center">
          <h2>Our Services</h2>
          <span>
            <LocalDiningIcon sx={{ color: "#1fab89" }} />
          </span>
        </div>

        <div className="services-content  grid md:grid-cols-3 place-items-center text-center gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-c-quarternary rounded-xl max-w-xs px-[2rem] py-[4rem]">
              {service.icon}
              <h3 className="mt-5 mb-3 relative">{service.serviceName}</h3>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
