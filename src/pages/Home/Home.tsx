import AdvancedSwiper from "../../components/slider/Slider";
import InfoComponent from "./Components/InfoComponent";

const Home = () => {
  return (
    <div>
      <AdvancedSwiper />
      {/* Trail Running Content */}
      <InfoComponent
        title="Trail Running Shoes"
        text="We sell a wide range of athletic equipment, including running shoes, sneakers, and basketball gear."
        image="Feel free to explore our products, or contact us for more information."
      />

      {/* Running Content */}
      <InfoComponent
        title="Running Shoes"
        text="We sell a wide range of athletic equipment, including running shoes, sneakers, and basketball gear."
        image="Feel free to explore our products, or contact us for more information."
        buttonLabel="click me here"
      />

      {/* Trekking Content */}
      <InfoComponent
        title="Trekking"
        text="We sell a wide range of athletic equipment, including running shoes, sneakers, and basketball gear."
        image="Feel free to explore our products, or contact us for more information."
      />

      <AdvancedSwiper />
    </div>
  );
};

export default Home;
