import { faAdd, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styles from '../styles/Cart.module.scss';

interface CartListProps { 
    name: string;
    price: number;
    image: string;
    size: string;
    items: number;
    id: string;
    handleAddChange: (id: string, size: string) => void;
    handleRemoveChange: (id: string, size: string) => void;
    handleDeleteChange: (id: string, size: string) => void;
}


export default function CartListItem({name, price, image, size, items, id, handleAddChange, handleDeleteChange, handleRemoveChange}: CartListProps) {
    
    console.log(items)
  return (           
            <TableRow
              key={name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <img style={{ width: "90px" }} src={image} />
              </TableCell>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="center" style={{fontWeight:'600', fontFamily:'poppins'}}>{price}</TableCell>
              <TableCell align="center" style={{fontWeight:'600', fontFamily:'poppins'}}>{size}</TableCell>
              <TableCell align="left">
                <button style={{color:'lightblue', backgroundColor: 'transparent', border: 'none', marginRight:'10px', fontSize: '1.2rem'}} onClick={() => handleAddChange(id, size)}><FontAwesomeIcon icon={faAdd} /></button>
                <b style={{fontSize:'1.2rem', fontWeight:'400'}}>{items}</b>
                <button onClick={() => handleRemoveChange(id, size)} style={{color:'lightblue', backgroundColor: 'transparent', border: 'none', marginLeft:'10px', fontSize: '1.2rem'}}><FontAwesomeIcon icon={faMinus} /></button>
              </TableCell>
              <TableCell align="center">
                <button onClick={() => handleDeleteChange(id, size)} className={styles.btn_delete_item} >
                  <FontAwesomeIcon style={{color:'#8E1616'}} icon={faTrash} />
                </button>
              </TableCell>
            </TableRow>
  );
}
