import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
import "./styles.css"
import ShoppCartSummary from '../../ShoppCartSummary/ShoppCartSummary';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../ItemContext/ItemContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import TicketProducts from '../../ticketProducts/ticketProducts';




const { Option } = Select;
let order = {}
let total = 0
let idOrder = ""


const Formulario = () => {

    const { form } = useContext(CartContext)
    const { setFormPrueba } = useContext(CartContext)
    const { addProduct } = useContext(CartContext)
    const { setForm } = useContext(CartContext)
    const { cart } = useContext(CartContext)
    const { getTotal } = useContext(CartContext)
    const [orderid, setOrderId] = useState()
    const navigate = useNavigate();

    let total = getTotal()
    const onFinish = (values) => {
        total = getTotal(cart)
        order = { values, cart, total }
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log("id de la orden guardada en Firestore: ", id))
        localStorage.setItem("order", JSON.stringify(order))
        navigate(`/ticket`)
    };

    return (
        <div className='section-form'>
            <div className='form'>
                <Form
                    name="complex-form"
                    onFinish={onFinish}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 500,
                    }}
                >
                    <Form.Item label="Nombres">
                        <Space>
                            <Form.Item
                                name="Nombre"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 500,
                                    }}
                                    placeholder="Nombres"
                                />
                            </Form.Item>

                        </Space>
                    </Form.Item>
                    <Form.Item label="Apellido">
                        <Space>
                            <Form.Item
                                name="Apellido"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 500,
                                    }}
                                    placeholder="Apellido"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="DNI">
                        <Space>
                            <Form.Item
                                name="DNI"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 500,
                                    }}
                                    placeholder="DNI"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Teléfono">
                        <Space>
                            <Form.Item
                                name="Telefono"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 500,
                                    }}
                                    placeholder="Teléfono"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Email">
                        <Space>
                            <Form.Item
                                name="Email"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 500,
                                    }}
                                    placeholder="Ingresá tu email"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Provincia">
                        <Form.Item
                            name={['Provincia']}
                            style={{
                                width: 500,
                                marginBottom: 0,
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio',
                                },
                            ]}
                        >
                            <Select placeholder="Seleccioná la provincia">
                                <Option value="Ciudad Autónoma de Buenos Aires">Ciudad Autónoma de Buenos Aires</Option>
                                <Option value="Buenos Aires">Buenos Aires</Option>
                                <Option value="Catamara">Catamara</Option>
                                <Option value="Córdoba">Córdoba</Option>
                                <Option value="Corrientes">Corrientes</Option>
                                <Option value="Entre Ríos">Entre Ríos</Option>
                                <Option value="Jujuy">Jujuy</Option>
                                <Option value="Mendoza">Mendoza</Option>
                                <Option value="La Rioja">La Rioja</Option>
                                <Option value="Salta">Salta</Option>
                                <Option value="San Juan">San Juan</Option>
                                <Option value="San Luis">San Luis</Option>
                                <Option value="Santa Fe">Santa Fe</Option>
                                <Option value="Santiago del Estero">Santiago del Estero</Option>
                                <Option value="Tucumán">Tucumán</Option>
                                <Option value="Chubut">Chubut</Option>
                                <Option value="Formosa">Formosa</Option>
                                <Option value="Misiones">Misiones</Option>
                                <Option value="Neuquén">Neuquén</Option>
                                <Option value="La Pampa">La Pampa</Option>
                                <Option value="Santa Cruz">Santa Cruz</Option>
                                <Option value="Tierra del Fuego">Tierra del Fuego</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Código Postal:">
                        <Space>
                            <Form.Item
                                name="CP"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 190,
                                    }}
                                    placeholder="Código Postal"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Dirección:">
                        <Space>
                            <Form.Item
                                name="Direccion"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 600,
                                    }}
                                    placeholder="Dirección"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Tipo de tarjeta">
                        <Form.Item
                            name={['TipoTarjeta']}
                            style={{
                                width: 600,
                                marginBottom: 0,
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo obligatorio',
                                },
                            ]}
                        >
                            <Select placeholder="Seleccioná el tipo de tarjeta">
                                <Option value="débito">Tarjeta de débito</Option>
                                <Option value="crédito">Tarjeta de crédito</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Marca de tarjeta">
                        <Form.Item
                            name={['MarcaTarjeta']}
                            style={{
                                width: 500,
                                marginBottom: 0,
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo obligatorio',
                                },
                            ]}
                        >
                            <Select placeholder="Seleccioná el tipo de tarjeta">
                                <Option value="Visa">VISA</Option>
                                <Option value="MasterCard">MasterCard</Option>
                                <Option value="AmericanExpress">American Express</Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Número de tarjeta">
                        <Space>
                            <Form.Item
                                name="NroTarjeta"
                                noStyle
                                rules={[
                                    {
                                        required: true,
                                        message: 'El campo es obligatorio'
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 500,
                                    }}
                                    placeholder="Número de tarjeta"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Cuotas">
                        <Form.Item
                            name={['Cuotas']}
                            style={{
                                width: 200,
                                marginBottom: 0,
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Campo obligatorio',
                                },
                            ]}
                        >
                            <Select placeholder="Seleccioná la cantidad de cuotas">
                                <Option value="1">1</Option>
                                <Option value="3">3</Option>
                                <Option value="6">6</Option>
                                <Option value="9">9</Option>
                                <Option value="12"></Option>
                            </Select>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit" onSubmit={onFinish}>
                            Finalizar compra
                        </Button>

                    </Form.Item>
                </Form>
            </div>
            <div className='div-total'>
                <div className='total'>
                    <div className='title'>
                        <h5>Completá el formulario para finalizar la compra</h5>
                    </div>
                    <div className='total-quantity'>
                        <p>Total del carrito: ${total},00</p>
                        <div className='contenedor-productos'>
                            <p>PRODUCTOS</p>
                            {cart.map((producto) => {
                                return (
                                    <TicketProducts product={producto} key={producto.brand} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Formulario;