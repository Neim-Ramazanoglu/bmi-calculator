import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Ideal, YuksekKilo, Zayıf } from "../Card/Card";
import "./hesapla.css"
function Hesapla() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [name, setName] = useLocalStorage();

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  function calc() {
    let calculator = (height / 100) * (height / 100);
    calculator = weight / calculator;
    calculator = calculator.toFixed(0);
    setBmi(calculator);
  }
  function useLocalStorage(key,initalValue){
    const [storedValue,setStoredValue]=useState(()=>{
      try{
        const item=window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initalValue;
      }
      catch(error){
        console.log(error);
        return initalValue;
      }
    });
    const setValue = (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue];
  }
  

  return (
    <>
      {" "}
      <Container id="dataCollect" className="col-2 mt-3" style={{backgroundColor:"green",borderRadius:"8px" , width:"30rem"}}>
        <Form className="form-group  ">
          <Form.Group className=" mb-3 " controlId="formBasicEmail">
            <Form.Label className="h5 text-center mb-4 mt-2" style={{color:"black"}}>
              Adınızı Giriniz
            </Form.Label>
            <Form.Control
              className="form-control md-2"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className=" mb-3 " controlId="formBasicEmail">
            <Form.Label className="h5 text-center mb-4" style={{color:"black"}}>
              Boyunuzu Giriniz
            </Form.Label>
            <Form.Control
              className="form-control md-2"
              value={height}
              onChange={handleHeight}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="h5 text-center mb-4" style={{color:"black"}}>
              Kilonuzu Giriniz{" "}
            </Form.Label>
            <Form.Control value={weight} onChange={handleWeight} />
          </Form.Group>
          <Button onClick={calc} variant="danger" className="mb-2" >
            Gönder
          </Button>
        </Form>
      </Container>
      <div>
        <h2 id="score" className="text-center">
          {!bmi ? null :

        bmi > 25 ? (
            <p>
              {bmi} <YuksekKilo />
            </p>
          ) : bmi < 18 ? (
            <p>
              {bmi} <Zayıf />
            </p>
          ) : (
            <p>
              {bmi} <Ideal />
            </p>
          )}
        </h2>
      </div>
    </>
  );
}

export default Hesapla;
