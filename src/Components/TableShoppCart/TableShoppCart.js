import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "./styles.css"
import { CartContext } from '../ItemContext/ItemContext';
import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function TableShoppCart({ product }) {

  const { removeProduct } = useContext(CartContext)

  return (
    <List sx={{ width: '100%', maxWidth: 360, maxHeight: 1000, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar >
          <Avatar className='img' alt={product.brand} src={product.imageFB} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {product.brand}
              </Typography>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {product.description}
              </Typography>
              <Typography
                sx={{ display: 'block' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {`   $${product.price * product.quantity}`}
              </Typography>
              <Typography
                sx={{ display: 'block' }}
                component="block"
                variant="p"
                color="text.primary"
              >
                {`Cantidad: ${product.quantity}`}
              </Typography>
              <Typography
                sx={{ display: 'block' }}
                component="block"
                variant="p"
                color="text.primary"
              >
                {`Cada unidad: $${product.price}`}
              </Typography>
              <Button variant="contained" size="small" onClick={() => removeProduct(product.id)}>Remover</Button>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}