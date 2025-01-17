// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { useSelector } from "react-redux";
// import { AppStore } from "../../../redux/store";
// import CartListItem from "./CartListItem";
// import { updateCart } from "../../../redux/states/Cart";
// import { useDispatch } from "react-redux";

// export default function BasicTable() {
//   const shoeCart = useSelector((state: AppStore) => state.cart);
//   const dispatch = useDispatch()

//   // We create a copy of the array
//   const shoeCartCopy = shoeCart.map((item) => ({ ...item }));


//   function findShoeIndex(id: string, size: string) {
//     let productIndex = shoeCartCopy.findIndex(
//       (shoe) => shoe.id === id && shoe.sizeSelected === size
//     );
//     return productIndex;
//   }

//   //Modularizar
//   const HandleAddButton = (id: string, size: string): void => {
//     let productFound = findShoeIndex(id, size);
//     shoeCartCopy[productFound].items += 1;
//     dispatch(updateCart(shoeCartCopy))
//   };

//   //Modularizar
//   const HandleRemoveButton = (id: string, size: string): void => {
//     let productFound = findShoeIndex(id, size);
//     shoeCartCopy[productFound].items <= 1 ? shoeCartCopy.splice(productFound, 1) : shoeCartCopy[productFound].items--
//     dispatch(updateCart(shoeCartCopy))
//   };

//   //Modularizar
//   const HandleDeleteButton = (id: string, size: string): void => {
//       let productIndex = findShoeIndex(id, size)
//       shoeCartCopy.splice(productIndex, 1)
//       dispatch(updateCart(shoeCartCopy))
//   };

//   console.log(shoeCartCopy)


//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">{""}</TableCell>
//             <TableCell align="left">Name</TableCell>
//             <TableCell align="left">Price</TableCell>
//             <TableCell align="left">Size</TableCell>
//             <TableCell align="left">Items</TableCell>
//             <TableCell align="left">Options</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {shoeCartCopy.map((row) => (
//             <CartListItem
//               handleAddChange={HandleAddButton}
//               handleRemoveChange={HandleRemoveButton}
//               handleDeleteChange={HandleDeleteButton}

//               size={row.sizeSelected}
//               name={row.name}
//               image={row.image[0]}
//               price={row.price}
//               items={row.items}
//               id={row.id}
//             />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery, Box, Button } from "@mui/material";
import { AppStore } from "../../../redux/store";
import CartListItem from "./CartListItem";
import { updateCart } from "../../../redux/states/Cart";

export default function BasicTable() {
  const shoeCart = useSelector((state: AppStore) => state.cart);
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery("(max-width: 750px)"); // Responsive breakpoint

  // Copy of the cart
  const shoeCartCopy = shoeCart.map((item) => ({ ...item }));

  const findShoeIndex = (id: string, size: string) => {
    return shoeCartCopy.findIndex(
      (shoe) => shoe.id === id && shoe.sizeSelected === size
    );
  };

  const handleAddButton = (id: string, size: string): void => {
    const productFound = findShoeIndex(id, size);
    shoeCartCopy[productFound].items += 1;
    dispatch(updateCart(shoeCartCopy));
  };

  const handleRemoveButton = (id: string, size: string): void => {
    const productFound = findShoeIndex(id, size);
    shoeCartCopy[productFound].items <= 1
      ? shoeCartCopy.splice(productFound, 1)
      : (shoeCartCopy[productFound].items -= 1);
    dispatch(updateCart(shoeCartCopy));
  };

  const handleDeleteButton = (id: string, size: string): void => {
    const productIndex = findShoeIndex(id, size);
    shoeCartCopy.splice(productIndex, 1);
    dispatch(updateCart(shoeCartCopy));
  };

  return (
    <TableContainer style={{boxShadow:"none"}} component={Paper}>
      {isSmallScreen ? (
        // Render cards for small screens
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
          {shoeCartCopy.map((row) => (
            <Box
              key={`${row.id}-${row.sizeSelected}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={row.image[0]}
                  alt={row.name}
                  style={{ width: "80px", height: "auto" }}
                />
                <Typography variant="h6">{row.name}</Typography>
              </Box>
              <Typography>Price: ${row.price}</Typography>
              <Typography>Size: {row.sizeSelected}</Typography>
              
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleAddButton(row.id, row.sizeSelected)}
                >
                  Add
                </Button>
                <Typography>{row.items}</Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleRemoveButton(row.id, row.sizeSelected)}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDeleteButton(row.id, row.sizeSelected)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        // Render table for larger screens
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">{""}</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Size</TableCell>
              <TableCell align="left">Items</TableCell>
              <TableCell align="left">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoeCartCopy.map((row) => (
              <CartListItem
                key={`${row.id}-${row.sizeSelected}`}
                handleAddChange={handleAddButton}
                handleRemoveChange={handleRemoveButton}
                handleDeleteChange={handleDeleteButton}
                size={row.sizeSelected}
                name={row.name}
                image={row.image[0]}
                price={row.price}
                items={row.items}
                id={row.id}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
