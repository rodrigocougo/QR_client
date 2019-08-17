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
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}><i className="fa fa-id-card-o" />  5 - Novas vaga preenchidas</MenuItem>
            <MenuItem eventKey={2.2}><i className="fa fa-newspaper-o" />  2 - Novas pesquisa de mercado</MenuItem>
            <MenuItem eventKey={2.3}><i className="fa fa-newspaper-o" />  1 - Nova pesquisa de processos em TI</MenuItem>
            <MenuItem eventKey={2.4}><i className="fa fa-newspaper-o" />  1 - Nova perguntas frequentes</MenuItem>
            <MenuItem eventKey={2.5}><i className="fa fa-product-hunt" />  +5 - Visualizações no projeto de Bit Coins</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav> 
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Configurações"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Action</MenuItem>
            <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something</MenuItem>
            <MenuItem eventKey={2.4}>Another action</MenuItem>
            <MenuItem eventKey={2.5}>Something</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            SAIR
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
