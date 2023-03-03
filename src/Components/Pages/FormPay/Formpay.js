import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
import "./styles.css"
import TableShoppCart from "../../TableShoppCart/TableShoppCart"
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../ItemContext/ItemContext';



const { Option } = Select;

const onFinish = (values) => {
    console.log('Received values of form: ', values);
};
const FormPay = () => {

    const { form } = useContext(CartContext)
    console.log(form)

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
                                <Option value="TarjetaDebito">Tarjeta de débito</Option>
                                <Option value="Buenos Aires">Tarjeta de crédito</Option>
                            </Select>
                        </Form.Item>

                    </Form.Item>
                    <Form.Item label="Marca de tarjeta">
                        <Form.Item
                            name={['MarcaTarjeta']}
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
                                        width: 600,
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
                        <Button type="primary" htmlType="submit">
                            Continuar al pago
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};
export default FormPay;