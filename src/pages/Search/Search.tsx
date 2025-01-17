import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";
import NoResult from "../../components/NoResult/NoResult";
import AdvancedSwiper from "../../components/slider/Slider";
import BACKEND_URL from "../../config/URL";
import useFetch from "../../hooks/useFetch";
import { Shoe } from "../../types/Shoe.types";
import styles from "./styles/search.module.scss";

function Search() {

  
  const [url, setUrl] = useState<string>(`${BACKEND_URL}/shoes`);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, _setCategory] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  const handleSubmit = () => setUrl(`${BACKEND_URL}/shoes/search?category=${category}&name=${searchTerm}`)

  const { data, loading } = useFetch<Shoe[]>(url);

  return (
    <div className={styles.search_container}>
      <div className={styles.search_container_input_area}>
        <input
          placeholder="search here..."
          className={styles.search_container_input_area_item}
          onChange={handleSearchChange}
        />
        <button
          onClick={handleSubmit}
          className={styles.search_container_input_area_button}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <AdvancedSwiper content={data} Component={Card} />
          {data!.length <= 0 && <NoResult />}
        </>
      )}
    </div>
  );
}

export default Search;
