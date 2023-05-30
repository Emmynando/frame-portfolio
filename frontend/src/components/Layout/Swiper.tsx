import { ReactSVG } from "react-svg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import Card from "../UI/Card";
import styles from "./Swiper.module.css";

const Swipes = () => {
  //   const [emblaRef] = useEmblaCarousel({ loop: false });

  const autoplayOptions = {
    delay: 3000,
    jump: true,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay(autoplayOptions),
  ]);
  return (
    <div className={styles["svg-container"]}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <ReactSVG src="css3.svg" className="imgs" />
          </div>
          <div className="embla__slide">
            <ReactSVG src="js.svg" className="imgs" />
          </div>
          <div className="embla__slide">
            <ReactSVG src="reactjs.svg" className="imgs" />
          </div>
          <div className="embla__slide">
            <ReactSVG src="typescript.svg" className="imgs" />
          </div>
          <div className="embla__slide">
            <ReactSVG src="nodejs.svg" className="imgs" />
          </div>
          <div className="embla__slide">
            <ReactSVG src="python.svg" className="imgs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipes;
