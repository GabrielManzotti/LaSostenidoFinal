import { useContext } from 'react';
import { InputNumber } from 'antd';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./styles.css"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { CartContext } from '../ItemContext/ItemContext';


const InputAgregarCarrito = ({ data }) => {
  const [productDetail, setProductDetail] = useState()
  const [productQuantity, setproductQuantity] = useState(1)
  const { addProduct } = useContext(CartContext)
  const { getQuantity } = useContext(CartContext)

  const onChange = (value) => {
    setproductQuantity(value)
  };
  const onClick = () => {
    setproductQuantity(1)

    addProduct(data, productQuantity)
  }

  return (
    <div>
      <div>
        <Stack spacing={2} direction="row">
          <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
          <Button onClick={onClick} variant="contained">Agregar al carrito</Button>
        </Stack>
      </div>
    </div>
  )
}
export default InputAgregarCarrito;