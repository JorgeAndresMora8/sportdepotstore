import { Skeleton } from "@mui/material";
import Card from "../../../components/card/Card";
import AdvancedSwiper from "../../../components/slider/Slider";
import useFetch from "../../../hooks/useFetch";
import style from "../style/shoes.module.scss";
import BACKEND_URL from "../../../config/URL";

export interface CategorySectionProps {
  id: string;
  title: string;
  category?: string;
}

interface Shoe {
  id: string;
  name: string;
  price: number;
  image: string[];
  category: string;
  description: string;
  stock: number;
  size: Number[];
  features: string[];
}

function CategorySection({ id, category }: CategorySectionProps) {
  const { data, error } = useFetch<Shoe[]>(
    category!.length >= 1 ? `${BACKEND_URL}/shoes/search?category=${category}` : `${BACKEND_URL}/shoes`
  );

  if(error){ 
    return (
      <div>
        There was an error fetching the data.
      </div>
    )
  }

  if (data) {
    return (
      <div id={id} className={style.product__section}>
        <div className={style.product__section__title__area}>
          {/* <b>{title}<span style={{color:"#6F00FF"}}>.</span></b> */}
        </div>
        <div className={style.product__section}>
          <AdvancedSwiper content={data} Component={Card} />
        </div>
      </div>
    );
  }

  return (
    <div style={{width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
      {/* <h1>{title}</h1> */}
      <div style={{width:'70%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
      <Skeleton width={310} height={280}/>
      <Skeleton width={310} height={280}/>
      <Skeleton width={310} height={280}/>
    </div>
    </div>
  );
}

export default CategorySection;
