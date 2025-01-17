import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import useFetch from "../../hooks/useFetch";
import ShoeDetail from "./Components/ShoeDetail";
import BACKEND_URL from "../../config/URL";
import { useEffect } from "react";
import { Shoe } from "../../types/Shoe.types";

export interface JSONResponse {
  data: Shoe[];
}
const Detail = () => {


  const { id } = useParams();

  const { loading, data, error } = useFetch<Shoe>(`${BACKEND_URL}/shoes/${id}`);


  // scroll to top when navigating to the detail page of a shoe
  useEffect(() => window.scrollTo(0, 0), [id])

  if (loading) return (
    <div style={{width:"100%", height: "30rem", flexDirection:"column", backgroundColor:'#fff', display:"flex", justifyContent: 'center', alignItems:'center'}} >
      
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    <b  style={{fontFamily:"poppins", fontWeight:'300', marginTop:'1rem'}}>Were getting <span style={{color:"#1976D2"}}>the data...</span></b>
    </div>
  );

  if (error) return <h1>There was an error</h1>;

  if (data !== undefined) {
    return (
      <ShoeDetail
        brand={data.brand}
        id={data.id}
        name={data.name}
        price={data.price}
        description={data.description}
        image={data.image}
        category={data.category}
        stock={data.stock}
        size={''}
        features={data.features}
      />
    );

  }

  return <Loading />
};

export default Detail;
