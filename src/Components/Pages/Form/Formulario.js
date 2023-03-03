import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
import "./styles.css"
import TableShoppCart from "../../TableShoppCart/TableShoppCart"
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../ItemContext/ItemContext';




const { Option } = Select;




const Formulario = () => {

    const { form } = useContext(CartContext)
    const { setFormPrueba } = useContext(CartContext)

    const onFinish = (values) => {
        setFormPrueba(values);
        console.log(form)
        console.log(values)
    };



    return (

        <div className='section-form'>

            <div>
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
                        maxWidth: 600,
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
                                        width: 600,
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
                                        width: 600,
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
                                        width: 600,
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
                                        width: 600,
                                    }}
                                    placeholder="Teléfono"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Provincia">

                        <Form.Item
                            name={['Provincia']}
                            style={{
                                width: 600,
                                marginBottom: 0,
                            }}
                            rules={[
                                {
                                    required: true,
                                    message: 'Province is required',
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
                    <Form.Item label="Piso:">
                        <Space>
                            <Form.Item
                                name="Piso"
                                noStyle
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 190,
                                    }}
                                    placeholder="Piso"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Departamento:">
                        <Space>
                            <Form.Item
                                name="Departamento"
                                noStyle
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}
                            >
                                <Input
                                    style={{
                                        width: 190,
                                    }}
                                    placeholder="Departamento"
                                />
                            </Form.Item>
                        </Space>
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button type="primary" htmlType="submit" onSubmit={onFinish}>
                            Continuar al pago
                        </Button>

                    </Form.Item>
                </Form>

            </div>
        </div>
    )
};
export default Formulario;