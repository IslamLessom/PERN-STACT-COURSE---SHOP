import React from 'react'

//bootstrap
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'

//components
import bigStar from '../assets/bigStar.png'

function DevicePage() {
  const device = { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: `https://avatars.mds.yandex.net/get-marketpic/5110396/picf3d53d57a57aa5ea4e3e719a2d1fb8d0/orig` }
  const description = [
    { id: 1, title: 'Опративная память', description: '5гб' },
    { id: 2, title: 'Камера', description: '12мп' },
    { id: 3, title: 'Процессор', description: 'Пентиум 3' },
    { id: 4, title: 'Кол-во ядер', description: '2' },
    { id: 5, title: 'Аккумулятор', description: '4000' },
  ]
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>От {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map(d =>
          <Row key={d.id} style={{background: d.id % 2 === 0 && 'lightgray', padding: 10}}>
            {d.title}: {d.description}
          </Row>
        )}
      </Row>

    </Container>
  )
}

export default DevicePage
