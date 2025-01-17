import Search from "../Search/Search";
import CategorySection from "./Components/CategorySection";
import { CATEGORIES } from "./Constant/Shoe.options";
import styles from "./style/shoes.module.scss";

const Shoes = () => {
  return (
    <div className={styles.store_container} >
      <div style={{ marginTop: "4rem" }} className={styles.banner__container}>
        <div className={styles.category__search}>
          <b>Categories</b>
          <div className={styles.category__search__buttons}>
            {CATEGORIES.map((category) => (
              <button key={category.id}>
                <a href={`#${category.id}`}>{category.name}</a>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Search />

      <div className={`${styles.banner__container__section} ${styles.section__running}`} >
        <b>Running</b>
      </div>
      <CategorySection id="running" title="Running" category="running" />

      <div
        className={`${styles.banner__container__section} ${styles.section__trailrunning}`}
      >
        <b>Trail Running</b>
      </div>
      <CategorySection
        id="trail-running"
        title="Trail Running"
        category="trail running"
      />

      <div
        className={`${styles.banner__container__section} ${styles.section__trekking}`}
      >
        <b>Trekking</b>
      </div>
      <CategorySection id="trekking" title="Trekking" category="trekking" />
    </div>
  );
};

export default Shoes;
