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
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import NewVacancy from "views/NewVacancy.jsx";
import NewProject from "views/NewProject.jsx";
//import Notifications from "views/Notifications.jsx";
//import Upgrade from "views/Upgrade.jsx";

export const novaVaga =
  {
    path: "/vacancies/new_vacancy",
    name: "NOVA VAGA",
    icon: "pe-7s-map-marker",
    component: NewVacancy,
    layout: "/admin"
  }

export const novoProjeto = 
  {
    path: "/project/new_project",
    name: "NOVO PROJETO",
    icon: "pe-7s-map-marker",
    component: NewProject,
    layout: "/admin"
  }

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "PAINEL DE CONTROLE",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "MEU PERFIL",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/vacancie",
    name: "VAGAS",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/project",
    name: "PROJETOS",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/candidate",
    name: "CANDIDATOS",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/event",
    name: "EVENTOS",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  }
  /* {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/admin"
  } */
];

export default dashboardRoutes;
