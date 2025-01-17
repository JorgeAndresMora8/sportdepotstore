import CategoryCard from "../../components/card/category/CategoryCard";
import AdvancedSwiper from "../../components/slider/Slider";
import CategorySection from "../shoes/Components/CategorySection";
import InfoComponent from "./Components/InfoComponent";
import styles from './Styles/Home.module.scss';

interface SECTION_INTERFACE {
  title: string;
  link: string;
  img: string;
}

// INFORMACION, COMPONENTE PARA REPRESENTAR DICHA INFORMACION
const SECTIONS: SECTION_INTERFACE[] = [
  {
    title: "running",
    link: "/shoes",
    img: "./images/runningCardSection.png",
  },
  {
    title: "Trekking",
    link: "/shoes",
    img: "./images/trekkingCardSection.png",
  },
  {
    title: "Urban",
    link: "/shoes",
    img: "./images/urbanCardSection.png",
  },
  {
    title: "running",
    link: "/shoes",
    img: "./images/runningCardSection.png",
  },
  {
    title: "Trekking",
    link: "/shoes",
    img: "./images/trekkingCardSection.png",
  },
  {
    title: "Daily",
    link: "/shoes",
    img: "./images/urbanCardSection.png",
  },
];

// interface CardProps {
//   id: number;
//   text: string;
//   category: string;
//   price: number;
//   image: string
// }

const Home = () => {
  return (
    <div>
    <div className={styles.home__banner}>
      <div className={styles.home__banner__info}>
        <b>Embrace the Journey</b>
        <p>Discover your new favorite shoes!</p>
        <button>Learn More</button>
      </div>
    </div>
      <AdvancedSwiper content={SECTIONS} Component={CategoryCard} />
      {/* Trail Running Content */}
      <InfoComponent
        title="Trail Running Shoes"
        text="Trail running shoes are crafted for off-road terrains, featuring rugged outsoles for superior grip and stability. They provide support and protection against rocks and roots while allowing for natural movement."
        image="./images/trailRunningShoe.png"
      />

      {/* Running Content */}
      <InfoComponent
        title="Running Shoes"
        text="Running shoes are specifically designed for road and track running. They offer lightweight cushioning, breathability, and support to enhance performance and comfort."
        image="./images/runningShoe.png"
        buttonLabel="click me here"
      />

      {/* Trekking Content */}
      <InfoComponent
        title="Trekking"
        text="Trekking shoes provide support, durability, and traction for outdoor adventures. They enhance comfort and stability on varied terrains."
        image="./images/trekkingShoe.png"
      />

<CategorySection
        id="trail-running"
        title="Our best products"
        category="running"
      /> 
    </div>
  );
};

export default Home;
