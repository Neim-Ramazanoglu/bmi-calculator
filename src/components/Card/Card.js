import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Card.css"

function YuksekKilo() {
  return (
    <Container className=" col-sm-5 flex flex-column">

    <Card className="position fixed card  flex justify-content-center align-items-center shadow-lg" style={{width:"38rem"}}>
      <Card.Body className="card-body">
        <Card.Title style={{ color: "red" }}>
          İdeal Kilonun Çok Üzerinde
        </Card.Title>
        <Card.Text style={{ color: "red" }}>
          İdeal kilonu biraz uzakta bırakmışsın ama güzel bir haberimiz var; ona
          kavuşmak sandığın kadar zor değil. Her şey kararlı ve motive olmakla
          başlıyor, asla pes etme ve motivasyonunu yüksek tut, hareket ve
          dengeli beslenme hayatının bir parçası olduğunda değişimin hızına sen
          bile inanamayacaksın. 
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}

function Ideal() {
  return (
    <Container className=" col-sm-5">
      <Card className="card  flex justify-content-center align-items-center shadow-lg " style={{width:"38rem"}}>

        <Card.Body className="card-body">
          <Card.Title style={{ color: "green" }}>Kilonuz İdeal</Card.Title>
          <Card.Text>
            Harikasın! Tam da ideal kilondasın! Şimdi sana düşen bunu korumak.
            Hareketi ihmal etmeden, düzenli ve dengeli beslenmeye
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
function Zayıf() {
  return (
    <Container className=" col-sm-5">

    <Card className="card  flex justify-content-center align-items-center shadow-lg " style={{width:"38rem"}}>
      <Card.Body className="card-body">
        <Card.Title style={{ color: "orange" }}>
          İdeal Kilonun Altında
        </Card.Title>
        <Card.Text>
          İdeal kilonun altında kalmışsın ama yükselmen için yanındayız! Tek
          ihtiyacın biraz motivasyon biraz da düzenli ve dengeli beslenme.
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
  );
}

export { Ideal, Zayıf, YuksekKilo };
