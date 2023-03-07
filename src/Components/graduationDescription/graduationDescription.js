import { Descriptions } from 'antd';


const GraduationDescription = ({ data }) => {
  const dataGraduation = data[0]
  return (
    <div>
      <Descriptions title="Características">
        {dataGraduation ? <Descriptions.Item label="Linea:"> {dataGraduation.brand} </Descriptions.Item> : null}
        {dataGraduation ? <Descriptions.Item label="Formato de venta:">Unidad</Descriptions.Item> : null}
        {dataGraduation ? <Descriptions.Item label="Stock:"> {dataGraduation.stock}</Descriptions.Item> : null}
        {dataGraduation ? <Descriptions.Item label="Tipo de entrega">Domicilio</Descriptions.Item> : null}
        {dataGraduation ? <Descriptions.Item label="Descuento: ">0%</Descriptions.Item> : null}
      </Descriptions>
    </div>
  );
};
export default GraduationDescription;