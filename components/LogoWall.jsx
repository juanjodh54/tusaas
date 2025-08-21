export default function LogoWall() {
  const brands = [
    { name: "TechCorp", logo: "/brands/brand1.svg" },
    { name: "InnovaSoft", logo: "/brands/brand2.svg" },
    { name: "DigitalPlus", logo: "/brands/brand3.svg" },
    { name: "RestauTech", logo: "/brands/brand4.svg" },
    { name: "SmartBiz", logo: "/brands/brand5.svg" },
  ];

  return (
    <div className="py-12">
      <p className="text-center text-sm text-slate-500 mb-8 font-medium">
        Más de 100 empresas confían en nosotros
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
        {brands.map((brand, index) => (
          <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="h-8 w-auto text-slate-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
}