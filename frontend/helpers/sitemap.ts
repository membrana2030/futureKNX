export const products = [
  {
    innerHTML: "Integrated KNX Gateway",
    to: "/integrated-knx-gateway",
    items: [
      { innerHTML: `10" Touch Panel`, to: "/integrated-knx-gateway/ftr-imp10" },
      {
        innerHTML: `Apartment Outdoor Panel`,
        to: "/integrated-knx-gateway/ftr-ipzp",
      },
      {
        innerHTML: `Villa Outdoor Panel`,
        to: "/integrated-knx-gateway/ftr-ipvzp",
      },
    ],
  },
  {
    innerHTML: "KNX Switches",
    to: "/knx-switches",
    items: [
      { innerHTML: `Double Series`, to: "/knx-switches/double-series" },
      { innerHTML: `Quado Series`, to: "/knx-switches/quado-series" },
      { innerHTML: `Quado Line Series`, to: "/knx-switches/quado-line" },
      { innerHTML: `Customize`, to: "/knx-switches/customize" },
    ],
  },
  {
    innerHTML: "System Devices",
    to: "/knx-system-devices",
    items: [
      {
        innerHTML: `KNX Power Supply 640mA`,
        to: "/knx-system-devices/power-supply",
      },
      {
        innerHTML: `Universal Interface, 8 fold`,
        to: "/knx-system-devices/universal-interface",
      },
      {
        innerHTML: `BIOS 5 I/O`,
        title: "BUS Integrated Obect Server with 5 I/O",
        to: "/knx-system-devices/bio5io",
      },
      {
        innerHTML: `8/12 Multi Actuator`,
        to: "/knx-system-devices/actuator-8",
        title: "8 Output 12 Input Multi Switch Actuator",
      },
      {
        innerHTML: `16/12 Multi Actuator`,
        to: "/knx-system-devices/actuator-16",
        title: "16 Output 12 Input Multi Switch Actuator",
      },
      {
        innerHTML: `24/12 Multi Actuator`,
        to: "/knx-system-devices/actuator-24",
        title: "24 Output 12 Input Multi Switch Actuator",
      },
      { innerHTML: `View all`, to: "/knx-system-devices" },
    ],
  },
  {
    innerHTML: "Thermostat Switches",
    to: "/knx-thermostat",
    items: [
      { innerHTML: `Quado Serie`, to: "/knx-thermostat/quado" },
      { innerHTML: `Glass Serie`, to: "/knx-thermostat/glass" },
    ],
  },
  {
    innerHTML: "Bluetooth Control",
    to: "/knx-bluetooth-control",
    items: [
      {
        innerHTML: `KNX Bluetooth Gateway`,
        to: "/knx-bluetooth-control/gateway",
      },
      { innerHTML: `Remote Controller`, to: "/knx-bluetooth-control/remote" },
      { innerHTML: `Mobile App`, to: "/knx-bluetooth-control/mobile-app" },
    ],
  },
  {
    innerHTML: "KNX AC Gateway",
    to: "/knx-system-devices/#ac-gateways",
    items: [
      {
        innerHTML: `FTR-ACDK`,
        to: "/knx-system-devices/ac-gateway-daikin-industrial",
        title: "Designed for Daikin Industrial P1/P2",
      },
      {
        innerHTML: `FTR-ACME`,
        to: "/knx-system-devices/ac-gateway-mitsubishi-electric",
        title: "Designed for Mitsubishi Electric",
      },
    ],
  },
];

export const nav = [
    { to: "/", innerHTML: "Home" },
    { to: "/about-us", innerHTML: "Who we are?" },
    { innerHTML: "New-gen KNX Products", items: [...products] },
]

export const social = [
  {
    to: "https://www.linkedin.com/company/futureknx",
    target: "_blank",
    innerHTML: "<i class='fab fa-fw fa-linkedin-in mr-4'></i>Linked-in",
  },
  {
    to: "https://twitter.com/FutureKnx",
    target: "_blank",
    innerHTML: "<i class='fab fa-fw fa-twitter mr-4'></i>Twitter",
  },
  {
    to: "https://www.instagram.com/futureknx",
    target: "_blank",
    innerHTML: "<i class='fab fa-fw fa-instagram mr-4'></i>Instagram",
  },
  {
    to: "https://www.facebook.com/futureknx/",
    target: "_blank",
    innerHTML: "<i class='fab fa-fw fa-facebook-f mr-4'></i>Facebook",
  },
  {
    to: "https://www.youtube.com/@futureknx",
    target: "_blank",
    innerHTML: "<i class='fab fa-fw fa-youtube mr-4'></i>Youtube",
  },
];

export const dontMiss = [
    { to: "/integrated-knx-gateway", innerHTML: "Integrated KNX Gateway" },
    { to: "/knx-switches", innerHTML: "The New KNX Switches" },
    { to: "/knx-thermostat", innerHTML: "KNX Thermostat Switches" },
    { to: "/knx-system-devices", innerHTML: "KNX System Devices" },
    { to: "/knx-bluetooth-control", innerHTML: "KNX Bluetooth Control" },
]