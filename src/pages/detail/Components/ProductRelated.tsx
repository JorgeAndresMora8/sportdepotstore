import Card from '../../../components/card/Card';
import Slider from '../../../components/slider/Slider';
import useFetch from '../../../hooks/useFetch';

interface Props { 
    category: string; 
    productId: string; 
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
    features: string[]
  }

function ProductRelated({ category, productId}: Props) {

    const { data, loading, error } = useFetch<Shoe[]>(`http://localhost:3000/shoes/search?category=${category}`)

    if(loading){ 
        return (
            <div>Loading...</div>
        )
    }

    if(error){ 
        return (
            <div>There was an error fetching the data.</div>
        )
    }

    if(data !== undefined){

        const excludedProduct = data.filter((product) => product.id !== productId)
  return (
    <div style={{width: "100%"}}>
      <Slider content={excludedProduct} Component={Card}/>
    </div>
  )}

  return null;
}

export default ProductRelated
