/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl, 
  Table
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import { thArrayPesquisaMercado, tdArrayPesquisaMercado, 
          thArrayPesquisaProcessosTI, tdArrayPesquisaProcessosTI, 
            thArrayPesquisaCandidatos, tdArrayPesquisaCandidatos } from "variables/Variables.jsx";

//IMAGES            
import avatar from "assets/img/faces/ccdigital.jpg";
import capa from "assets/img/qr-capa-01.jpg";

//Add data company
class AddCompany extends Component {
  
  

  
}

//List data company
class LoadCompany extends Component {

  Url = 'http://127.0.0.1:3001/find_quiz';
  UrlAdd = 'http://localhost:3001/company/insert_company';

  state = {
    companyData: {
      company_name: "CCDigital Informatica",
      company_reason: "rodrigo da rosa cougo ME",
      cnpj: "26.206.365/0001-08",
      site: "www.ccdigitalinformatica.com.br",
      address: "Rua M",
      city: "Porto Alegre",
      parents: "",
      code: "94410000",
      about: "Cadastro teste",
      image_avatar_url: "",
      image_cover_url: "",
    }
  }

  setValues = (e, field) => {    
    const {companyData} = this.state;
    companyData[field] = e.target.value;
    this.setState({companyData});      
    console.log(e.target.value);
  }

  addCompany = (company) => {  
    const requestAdd = {
      method: 'POST', 
      body: JSON.stringify(company), 
      headers: new Headers({
        'Content-type': 'application/json'
      })
    };
    fetch(this.UrlAdd, requestAdd)
      .then(response => response.json())
      .then(newCompany => {
        let {company} = this.state;
        company.push(newCompany);
        this.setState({company});
      }) 
      .catch();
  }

  render () {
    const {find_quiz} = this.props;
    console.log(find_quiz);
    return (
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
                placeholder: "Nome da empresa",
                defaultValue: "",
                disabled: false, 
                onChange: e => this.setValues(e, 'description')
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
                defaultValue: "",
                onChange: e => this.setValues(e, 'company_reason')
              },
              {
                label: "CNPJ",
                type: "text",
                bsClass: "form-control",
                placeholder: "",
                defaultValue: "",
                onChange: e => this.setValues(e, 'cnpj')
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
                  "http://ccdigitalinformatica.com.br",
                  onChange: e => this.setValues(e, 'site')
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
                defaultValue: "",
                onChange: e => this.setValues(e, 'address')
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
                defaultValue: "Mike", 
                onChange: e => this.setValues(e, 'city')
              },
              {
                label: "PAIS",
                type: "text",
                bsClass: "form-control",
                placeholder: "Pais",
                defaultValue: "Andrew", 
                onChange: e => this.setValues(e, 'parents')
              },
              {
                label: "CEP",
                type: "number",
                bsClass: "form-control",
                placeholder: "CEP", 
                onChange: e => this.setValues(e, 'code')
              }
            ]}
          />

          <Row>
            <Col md={12}>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>SOBRE A EMPRESA</ControlLabel>
                <FormControl
                  onChange= {e => this.setValues(e, 'about')}
                  rows="5"
                  componentClass="textarea"
                  bsClass="form-control"
                  placeholder="Descrição breve sobre a empresa"
                  defaultValue="A 7 anos desenvolvendo ferramentas para o mercado, construindo soluções que simplifique o dia a dia e aumente a eficiência do seu negócio, visando ampliar os resultados e mostrar que a tecnologia veio para facilitar e não dificultar suas idéias."                  
                />
              </FormGroup>
            </Col>
          </Row>
          <Button bsStyle="info" pullRight fill onClick={this.addCompany}>
            Atualizar informações
          </Button>
          <div className="clearfix" />
        </form>
      }/>              
    );
  }
}


export default class UserProfile extends Component {

  Url = 'http://127.0.0.1:3001/find_quiz';

  state = {
    find_quiz: [],
  }

  componentDidMount(){
    fetch(this.Url)
      .then(response => response.json())
      .then(find_quiz => this.setState({find_quiz}))
      .catch(e => console.log());
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>    
              <Accordion
                titulo="Perfil da empresa"
                descricao={     
                  <LoadCompany find_quiz={this.state.find_quiz} />
                  }/>
              <Accordion
                titulo="Pesquisa de Mercado"
                descricao={          
                  <Card
                    title=""
                    category="Todas as pesquisas de mercado que sua empresa já respondeu"
                    ctTableFullWidth
                    ctTableResponsive
                    content={
                      <Table striped hover>
                        <thead>
                          <tr>
                            {thArrayPesquisaMercado.map((prop, key) => {
                              return <th key={key}>{prop}</th>;
                            })}
                          </tr>
                        </thead>
                        <tbody>
                          {tdArrayPesquisaMercado.map((prop, key) => {
                            return (
                              <tr key={key}>
                                {prop.map((prop, key) => {
                                  return <td key={key}>{prop}</td>;
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                }
                />}/>
              <Accordion
                titulo="Pesquisa de processos em TI"
                descricao={       
                  <Card
                    title=""
                    category="Todas as pesquisas de processos em TI que sua empresa já respondeu"
                    ctTableFullWidth
                    ctTableResponsive
                    content={   
                      <Table striped hover>
                            <thead>
                              <tr>
                                {thArrayPesquisaProcessosTI.map((prop, key) => {
                                  return <th key={key}>{prop}</th>;
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              {tdArrayPesquisaProcessosTI.map((prop, key) => {
                                return (
                                  <tr key={key}>
                                    {prop.map((prop, key) => {
                                      return <td key={key}>{prop}</td>;
                                    })}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>}
                />}/>
              <Accordion
                titulo="Perguntas frequentes de candidatos"
                descricao={       
                  <Card
                    title=""
                    category="Questionário com perguntas frequentes de candidatos, e qual foi suas respostas:"
                    ctTableFullWidth
                    ctTableResponsive
                    content={   
                      <Table striped hover>
                            <thead>
                              <tr>
                                {thArrayPesquisaCandidatos.map((prop, key) => {
                                  return <th key={key}>{prop}</th>;
                                })}
                              </tr>
                            </thead>
                            <tbody>
                              {tdArrayPesquisaCandidatos.map((prop, key) => {
                                return (
                                  <tr key={key}>
                                    {prop.map((prop, key) => {
                                      return <td key={key}>{prop}</td>;
                                    })}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>}
                />}/>
            </Col>
            <Col md={4}>
              <UserCard
                bgImage={capa}
                avatar={avatar}
                name="CCDigital Informática"
                userName="ccdigital_informatica"
                description={
                  <span>
                    <b>http://www.ccdigitalinformatica.com.br/</b>
                    <br />
                    A 7 anos desenvolvendo ferramentas para o mercado, construindo soluções que simplifique o dia a dia e aumente a eficiência do seu negócio, visando ampliar os resultados e mostrar que a tecnologia veio para facilitar e não dificultar suas idéias.
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

//export default UserProfile;
