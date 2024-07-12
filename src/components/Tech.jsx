import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { useEffect, useState } from 'react';


const Tech = () => {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Selecciona las tecnologías a mostrar en base al tamaño de la pantalla
  const displayedTechnologies = isMobile ? technologies.slice(-5) : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {displayedTechnologies.map((technology) => (
        <div className="w-40 h-40" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
