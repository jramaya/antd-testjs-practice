import React, { useState } from "react";
import { Form, Input, Button, Flex, Col, Row, DatePicker, Typography } from "antd";

const { Title } = Typography;
const OrdersNewForm = () => {
  const [current, setCurrent] = useState(1);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const containerStyle = {
    backgroundColor: "white",
    minWidth: "30%",
    padding: "3.4em 2em 2em 2em",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  return (
    <>
    <Title level={2}>Crear una orden</Title>
      <Title level={5}>Dale una ventaja competitiva a tu negocio con entregas <span>el mismo d'ia</span> ('Area Metropolitana) y <span>el d'ia siguiente</span> a nivel nacional.</Title>
      <div style={containerStyle}>
        <Form name="Orders" layout="vertical">
          {current === 1 && (<>
            <Row>
             <Col span={16}>
                <Form.Item
                  label="Direccion de recolecci'on"
                  name="names"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, Seleccione la direccion!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
             </Col>
              <Col span={8}>
                <Form.Item
                  label="Fecha Programada"
                  name="date"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, Seleccione la Fecha!",
                    },
                  ]}
                >
                  <DatePicker/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Nombres"
                  name="names"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, Ingrese los Nombres!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Apellidos"
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, Ingrese los Apellidos!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Correo Electronico"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, Ingrese El Correo!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            </>
          )}
          {current === 2 && (
            <>
            <Row>
                <Col spen={24}>second page placeholder</Col>
            </Row>
            <Row>
                <Col spen={24}>second page placeholder</Col>
            </Row>
            <Row>
                <Col spen={24}>second page placeholder</Col>
            </Row>
            <Row>
                <Col spen={24}>second page placeholder</Col>
            </Row>
            </>
          )}

          <Row>
            <Col span={12}>
            <Flex justify={'flex-start'} align={'flex-end'}>
            {current === 2 && <Button onClick={() => prev()}>Regresar</Button>}
            {current === 1 && (
              <Button type="primary" onClick={() => next()}>
                Siguiente
              </Button>
            )}
            </Flex>
            </Col>
            <Col span={12}>
            <Flex justify={'flex-end'} align={'flex-end'}>
            {current === 2 && (
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Enviar
                </Button>
              </Form.Item>
            )}
            </Flex>
            </Col>
            </Row>
        </Form>
      </div>
    </>
  );
};

export default OrdersNewForm;
