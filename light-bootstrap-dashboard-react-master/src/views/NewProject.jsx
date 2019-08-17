import ReactDOM from 'react-dom';
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl, 
    Table, 
    Label
  } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import React, { Component } from 'react'

export default class NewProject extends Component {
    render() {
        return (            
            <div  className="col-md-6" style={{ display: 'flex', flexDirection: 'column', width: '100%',  justifyContent: 'center', alignItems: 'center', marginTop: '3em' }}>               
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                        <h1 className="mt-5">Novo Projeto</h1>
                    </div>
                </div>
                <Card
                    title=""
                    content={
                      <form>
                        <FormInputs
                          ncols={["col-md-5", "col-md-3", "col-md-4"]}
                          properties={[
                            {
                              label: "EMPRESA",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Company",
                              defaultValue: "CCDigital Informatica",
                              disabled: false
                            },
                            {
                              label: "USUARIO",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "nome de usuario",
                              defaultValue: "ccdigital_informatica",
                              disabled: true                              
                            },
                            {
                              label: "E-MAIL",
                              type: "email",
                              bsClass: "form-control",
                              placeholder: "E-mail", 
                              disabled: true
                            }
                          ]}
                        />
                        <FormInputs
                          ncols={["col-md-6", "col-md-6"]}
                          properties={[
                            {
                              label: "Razão Social",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "",
                              defaultValue: ""
                            },
                            {
                              label: "CNPJ",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "",
                              defaultValue: ""
                            }
                          ]}
                        />
                        <FormInputs
                          ncols={["col-md-12"]}
                          properties={[
                            {
                              label: "SITE DA EMPRESA",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "http://",
                              defaultValue:
                                "http://ccdigitalinformatica.com.br"
                            }
                          ]}
                        />
                        <FormInputs
                          ncols={["col-md-12"]}
                          properties={[
                            {
                              label: "ENDEREÇO DA EMPRESA",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Endereço completo",
                              defaultValue:
                                ""
                            }
                          ]}
                        />
                        <FormInputs
                          ncols={["col-md-4", "col-md-4", "col-md-4"]}
                          properties={[
                            {
                              label: "CIDADE",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Cidade",
                              defaultValue: "Mike"
                            },
                            {
                              label: "PAIS",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Pais",
                              defaultValue: "Andrew"
                            },
                            {
                              label: "CEP",
                              type: "number",
                              bsClass: "form-control",
                              placeholder: "CEP"
                            }
                          ]}
                        />

                        <Row>
                          <Col md={12}>
                            <FormGroup controlId="formControlsTextarea">
                              <ControlLabel>SOBRE A EMPRESA</ControlLabel>
                              <FormControl
                                rows="5"
                                componentClass="textarea"
                                bsClass="form-control"
                                placeholder="Descrição breve sobre a empresa"
                                defaultValue="A 7 anos desenvolvendo ferramentas para o mercado, construindo soluções que simplifique o dia a dia e aumente a eficiência do seu negócio, visando ampliar os resultados e mostrar que a tecnologia veio para facilitar e não dificultar suas idéias."
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button bsStyle="info" pullRight fill type="submit">
                          Criar vaga
                        </Button>
                        <div className="clearfix" />
                      </form>
                    }
                  />
            </div>
        )
    }
}
