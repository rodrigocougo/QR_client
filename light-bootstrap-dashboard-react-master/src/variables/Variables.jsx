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
//
// //
// // // For notifications
// //
//
var defaultWidth =
  window.screen.width > 768
    ? (window.screen.width * 1) / 3
    : window.screen.width;

var style = {
  Wrapper: {},
  Containers: {
    DefaultStyle: {
      position: "fixed",
      width: defaultWidth,
      padding: "10px 10px 10px 20px",
      zIndex: 9998,
      WebkitBoxSizing: "",
      MozBoxSizing: "",
      boxSizing: "",
      height: "auto",
      display: "inline-block",
      border: "0",
      fontSize: "14px",
      WebkitFontSmoothing: "antialiased",
      fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
      fontWeight: "400",
      color: "#FFFFFF"
    },

    tl: {
      top: "0px",
      bottom: "auto",
      left: "0px",
      right: "auto"
    },

    tr: {
      top: "0px",
      bottom: "auto",
      left: "auto",
      right: "0px"
    },

    tc: {
      top: "0px",
      bottom: "auto",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    },

    bl: {
      top: "auto",
      bottom: "0px",
      left: "0px",
      right: "auto"
    },

    br: {
      top: "auto",
      bottom: "0px",
      left: "auto",
      right: "0px"
    },

    bc: {
      top: "auto",
      bottom: "0px",
      margin: "0 auto",
      left: "50%",
      marginLeft: -(defaultWidth / 2)
    }
  },

  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "14px",
      margin: "10px 0 0",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "all 0.5s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1 
      }
    },

    success: {
      borderTop: 0,
      backgroundColor: "#a1e82c",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    error: {
      borderTop: 0,
      backgroundColor: "#fc727a",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    warning: {
      borderTop: 0,
      backgroundColor: "#ffbc67",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    },

    info: {
      borderTop: 0,
      backgroundColor: "#63d8f1",
      WebkitBoxShadow: 0,
      MozBoxShadow: 0,
      boxShadow: 0
    }
  },

  Title: {
    DefaultStyle: {
      fontSize: "30px",
      margin: "0",
      padding: 0,
      fontWeight: "bold",
      color: "#FFFFFF",
      display: "block",
      left: "15px",
      position: "absolute",
      top: "50%",
      marginTop: "-15px"
    }
  },

  MessageWrapper: {
    DefaultStyle: {
      marginLeft: "55px",
      marginRight: "30px",
      padding: "0 12px 0 0",
      color: "#FFFFFF",
      maxWidthwidth: "89%"
    }
  },

  Dismiss: {
    DefaultStyle: {
      fontFamily: "inherit",
      fontSize: "21px",
      color: "#000",
      float: "right",
      position: "absolute",
      right: "10px",
      top: "50%",
      marginTop: "-13px",
      backgroundColor: "#FFFFFF",
      display: "block",
      borderRadius: "50%",
      opacity: ".4",
      lineHeight: "11px",
      width: "25px",
      height: "25px",
      outline: "0 !important",
      textAlign: "center",
      padding: "6px 3px 3px 3px",
      fontWeight: "300",
      marginLeft: "65px"
    },

    success: {
      // color: '#f0f5ea',
      // backgroundColor: '#a1e82c'
    },

    error: {
      // color: '#f4e9e9',
      // backgroundColor: '#fc727a'
    },

    warning: {
      // color: '#f9f6f0',
      // backgroundColor: '#ffbc67'
    },

    info: {
      // color: '#e8f0f4',
      // backgroundColor: '#63d8f1'
    }
  },

  Action: {
    DefaultStyle: {
      background: "#ffffff",
      borderRadius: "2px",
      padding: "6px 20px",
      fontWeight: "bold",
      margin: "10px 0 0 0",
      border: 0
    },

    success: {
      backgroundColor: "#a1e82c",
      color: "#ffffff"
    },

    error: {
      backgroundColor: "#fc727a",
      color: "#ffffff"
    },

    warning: {
      backgroundColor: "#ffbc67",
      color: "#ffffff"
    },

    info: {
      backgroundColor: "#63d8f1",
      color: "#ffffff"
    }
  },

  ActionWrapper: {
    DefaultStyle: {
      margin: 0,
      padding: 0
    }
  }
};

//
// //
// // // For tables
// //
//
const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];

const thArrayPesquisaMercado = ["N", "Questão", "Resposta"];
const tdArrayPesquisaMercado = [
  ["1", "Quem você definiria como público alvo da empresa?", "Comerciantes de pequeno e médio porte!"],
  ["2", "Quantos funcionários a empresa possui?", "Entre 30 e 40 funcionarios em expansão!"],
  ["3", "Quantos anos tem a empresa?", "40 anos de empresa"],
  ["4", "Qual o porte da empresa?", "Médio porte"],
  ["5", "Quais as principais atividades que melhor define as necessidades da empresa?", "Coaching, Design & Criação, Engenharia e Arquitetura, Serviços Empresariais, Vendas e Marketing"],
  ["6", "Em quantos projetos mensais a empresa atua em média?", "De 10 a 15 projetos"]
];

const thArrayPesquisaProcessosTI = ["N", "Questão", "Resposta"];
const tdArrayPesquisaProcessosTI = [
  ["1", "A empresa utiliza algum sistema de gestão interno? Qual?", "Sim, Orion Sistemas!"],
  ["2", "A empresa possui um plano estratégico de TI?", "Se formos desenvolver essa descrição, podemos dizer que a IA tem a função de auxiliar as pessoas a encontrar o que elas estão procurando. Seja em objetos ou locais, físicos ou digitais, ela também possui a finalidade de tornar claro o contexto em que o indivíduo ou usuário está."],  
];

const thArrayPesquisaCandidatos = ["N", "Questão", "Resposta"];
const tdArrayPesquisaCandidatos = [
  ["1", "Quais são os benefícios que a empresa me oferece?", "Oferecemos VR, VT, Plano Saude, PLano Odontológico, Seguro de Vida, Plano de carreira!"],
  ["2", "Existe possibilidade de trabalhar com PJ/freelancer, ou apenas CLT?", "A empresa trabalha com as 3 modalidades, conforme demanda!"],
  ["3", "Qual a média salarial da empresa entre as categorias: júnior, pleno e sênior?", "Junior: de 1.000,00 a 1.500,00 | Pleno: de 2.500,00 a 5k | Senior: de 5k a 10k!"],
  ["4", "A empresa tem um plano de carreira há apresentar?", "Sim possui!"],
  ["5", "Qual a flexibilidade de carga horária da empresa?", "Totalmente flexivile na maioria dos setores!"],
  ["6", "A empresa contrata estagiários?", "Sim, incluso no plano de carreira!"]
];

const thArrayVagas = ["N", "Vaga Descrição", "Area Atuação", "Técnologias", "Avaliações"];
const tdArrayVagas = [
  ["1", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["2", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["3", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["4", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["5", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["6", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["7", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["8", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["9", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["10", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["11", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["12", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["13", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["14", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["15", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["16", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["17", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["18", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"]
];

const thArrayProjetos = ["N", "Projeto Descrição", "Area Atuação", "Técnologias", "Interessados"];
const tdArrayProjetos = [
  ["1", "Site para Bitcoins", "Desenvolvedor", "React + Node", "33 visualizações"],
  ["2", "Colocar formas de pagamentos no site", "Desenvolvedor", "Node + Laravel", "15 visualizações"]
];

const thArrayCandidatos = ["N", "Vaga Descrição", "Area Atuação", "Técnologias", "Avaliações"];
const tdArrayCandidatos = [
  ["1", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["2", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["3", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["4", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["5", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["6", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["7", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["8", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["9", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["10", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["11", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["12", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["13", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["14", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["15", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["16", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"],
  ["17", "Analista Junior", "Analista de sistemas", "Front end, Back end", "3 avaliações"],
  ["18", "DEV .NET", "desenvolvedor", ".Net, SQL Server, Web API, WebServices", "5 avaliações"]
];

//
// //
// // // For icons
// //
//
const iconsArray = [
  "pe-7s-album",
  "pe-7s-arc",
  "pe-7s-back-2",
  "pe-7s-bandaid",
  "pe-7s-car",
  "pe-7s-diamond",
  "pe-7s-door-lock",
  "pe-7s-eyedropper",
  "pe-7s-female",
  "pe-7s-gym",
  "pe-7s-hammer",
  "pe-7s-headphones",
  "pe-7s-helm",
  "pe-7s-hourglass",
  "pe-7s-leaf",
  "pe-7s-magic-wand",
  "pe-7s-male",
  "pe-7s-map-2",
  "pe-7s-next-2",
  "pe-7s-paint-bucket",
  "pe-7s-pendrive",
  "pe-7s-photo",
  "pe-7s-piggy",
  "pe-7s-plugin",
  "pe-7s-refresh-2",
  "pe-7s-rocket",
  "pe-7s-settings",
  "pe-7s-shield",
  "pe-7s-smile",
  "pe-7s-usb",
  "pe-7s-vector",
  "pe-7s-wine",
  "pe-7s-cloud-upload",
  "pe-7s-cash",
  "pe-7s-close",
  "pe-7s-bluetooth",
  "pe-7s-cloud-download",
  "pe-7s-way",
  "pe-7s-close-circle",
  "pe-7s-id",
  "pe-7s-angle-up",
  "pe-7s-wristwatch",
  "pe-7s-angle-up-circle",
  "pe-7s-world",
  "pe-7s-angle-right",
  "pe-7s-volume",
  "pe-7s-angle-right-circle",
  "pe-7s-users",
  "pe-7s-angle-left",
  "pe-7s-user-female",
  "pe-7s-angle-left-circle",
  "pe-7s-up-arrow",
  "pe-7s-angle-down",
  "pe-7s-switch",
  "pe-7s-angle-down-circle",
  "pe-7s-scissors",
  "pe-7s-wallet",
  "pe-7s-safe",
  "pe-7s-volume2",
  "pe-7s-volume1",
  "pe-7s-voicemail",
  "pe-7s-video",
  "pe-7s-user",
  "pe-7s-upload",
  "pe-7s-unlock",
  "pe-7s-umbrella",
  "pe-7s-trash",
  "pe-7s-tools",
  "pe-7s-timer",
  "pe-7s-ticket",
  "pe-7s-target",
  "pe-7s-sun",
  "pe-7s-study",
  "pe-7s-stopwatch",
  "pe-7s-star",
  "pe-7s-speaker",
  "pe-7s-signal",
  "pe-7s-shuffle",
  "pe-7s-shopbag",
  "pe-7s-share",
  "pe-7s-server",
  "pe-7s-search",
  "pe-7s-film",
  "pe-7s-science",
  "pe-7s-disk",
  "pe-7s-ribbon",
  "pe-7s-repeat",
  "pe-7s-refresh",
  "pe-7s-add-user",
  "pe-7s-refresh-cloud",
  "pe-7s-paperclip",
  "pe-7s-radio",
  "pe-7s-note2",
  "pe-7s-print",
  "pe-7s-network",
  "pe-7s-prev",
  "pe-7s-mute",
  "pe-7s-power",
  "pe-7s-medal",
  "pe-7s-portfolio",
  "pe-7s-like2",
  "pe-7s-plus",
  "pe-7s-left-arrow",
  "pe-7s-play",
  "pe-7s-key",
  "pe-7s-plane",
  "pe-7s-joy",
  "pe-7s-photo-gallery",
  "pe-7s-pin",
  "pe-7s-phone",
  "pe-7s-plug",
  "pe-7s-pen",
  "pe-7s-right-arrow",
  "pe-7s-paper-plane",
  "pe-7s-delete-user",
  "pe-7s-paint",
  "pe-7s-bottom-arrow",
  "pe-7s-notebook",
  "pe-7s-note",
  "pe-7s-next",
  "pe-7s-news-paper",
  "pe-7s-musiclist",
  "pe-7s-music",
  "pe-7s-mouse",
  "pe-7s-more",
  "pe-7s-moon",
  "pe-7s-monitor",
  "pe-7s-micro",
  "pe-7s-menu",
  "pe-7s-map",
  "pe-7s-map-marker",
  "pe-7s-mail",
  "pe-7s-mail-open",
  "pe-7s-mail-open-file",
  "pe-7s-magnet",
  "pe-7s-loop",
  "pe-7s-look",
  "pe-7s-lock",
  "pe-7s-lintern",
  "pe-7s-link",
  "pe-7s-like",
  "pe-7s-light",
  "pe-7s-less",
  "pe-7s-keypad",
  "pe-7s-junk",
  "pe-7s-info",
  "pe-7s-home",
  "pe-7s-help2",
  "pe-7s-help1",
  "pe-7s-graph3",
  "pe-7s-graph2",
  "pe-7s-graph1",
  "pe-7s-graph",
  "pe-7s-global",
  "pe-7s-gleam",
  "pe-7s-glasses",
  "pe-7s-gift",
  "pe-7s-folder",
  "pe-7s-flag",
  "pe-7s-filter",
  "pe-7s-file",
  "pe-7s-expand1",
  "pe-7s-exapnd2",
  "pe-7s-edit",
  "pe-7s-drop",
  "pe-7s-drawer",
  "pe-7s-download",
  "pe-7s-display2",
  "pe-7s-display1",
  "pe-7s-diskette",
  "pe-7s-date",
  "pe-7s-cup",
  "pe-7s-culture",
  "pe-7s-crop",
  "pe-7s-credit",
  "pe-7s-copy-file",
  "pe-7s-config",
  "pe-7s-compass",
  "pe-7s-comment",
  "pe-7s-coffee",
  "pe-7s-cloud",
  "pe-7s-clock",
  "pe-7s-check",
  "pe-7s-chat",
  "pe-7s-cart",
  "pe-7s-camera",
  "pe-7s-call",
  "pe-7s-calculator",
  "pe-7s-browser",
  "pe-7s-box2",
  "pe-7s-box1",
  "pe-7s-bookmarks",
  "pe-7s-bicycle",
  "pe-7s-bell",
  "pe-7s-battery",
  "pe-7s-ball",
  "pe-7s-back",
  "pe-7s-attention",
  "pe-7s-anchor",
  "pe-7s-albums",
  "pe-7s-alarm",
  "pe-7s-airplay"
];

//
// //
// // // // For dashboard's charts
// //
//
// Data for Pie Chart
var dataPie = {
  labels: ["51%", "40%", "5%", "4%"],
  series: [51, 40, 5, 4]
};
var legendPie = {
  names: ["Vagas Abe", "Vagas Fec", "Projetos Abe", "Projetos Fec"],
  types: ["info", "danger", "warning", "success"]
};

// Data for Line Chart
var dataSales = {
  labels: [
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
  ],
  series: [
    [100, 350, 500, 320, 400, 700],
    [80, 310, 400, 250, 350, 500],
    [40, 70, 35, 50, 25, 15], 
    [30, 50, 30, 30, 20, 12]
  ]
};
var optionsSales = {
  low: 0,
  high: 700,
  showArea: false,
  height: "245px",
  axisX: {
    showGrid: false
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var responsiveSales = [
  [
    "screen and (max-width: 640px)",
    {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendSales = {
  names: ["Vagas Abe", "Vagas Fec", "Projetos Abe", "Projetos Fec"],
  types: ["info", "danger", "warning", "success"]
};

// Data for Bar Chart
var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];
var legendBar = {
  names: ["Vagas", "Projetos"],
  types: ["info", "danger"]
};

module.exports = {
  style, // For notifications (App container and Notifications view)
  thArray,
  tdArray, // For tables (TableList view)
  thArrayPesquisaMercado,
  tdArrayPesquisaMercado,
  thArrayPesquisaProcessosTI,
  tdArrayPesquisaProcessosTI,
  thArrayPesquisaCandidatos,
  tdArrayPesquisaCandidatos,
  thArrayVagas,
  tdArrayVagas,
  thArrayProjetos,
  tdArrayProjetos,
  thArrayCandidatos,
  tdArrayCandidatos,
  iconsArray, // For icons (Icons view)
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar // For charts (Dashboard view)
};
