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
import { Grid, Row, Col, Table } from "react-bootstrap";
import CardMenu from "components/CardMenu/CardMenu.jsx";
import { thArrayProjetos, tdArrayProjetos } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import Card from "components/Card/Card.jsx";
import {novoProjeto} from "routes.js";

class Typography extends Component {

  constructor(props) {
    super(props);
    this.goNewProject = this.goNewProject.bind(this)
  }

  goNewProject() {
    //history.location.pathname 
    //this.props.history.push('/new_vacancy')
    //this.props.history.push(this.getRoutes(routes))
    this.props.history.push(novoProjeto.path)
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
         <Row>
            <Col md={8}>
              <Button bsStyle="info" pullRight fill type="submit" style={{ margin: "10px" }} onClick={this.goNewProject}>
                Novo Projeto
              </Button>              
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                title="Projetos"
                category="Lista com Projetos criadas pela sua empresa:"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArrayProjetos.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArrayProjetos.map((prop, key) => {
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
              />
            </Col>
            <Col md={4}>
              <CardMenu
                titulo="FILTROS"
                descricao="DIVERSOS"
              />
              
            </Col>
          

            {/* <Col md={12}>
              <Card 
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
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
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Typography;
