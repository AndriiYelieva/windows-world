import home from "../images/photos/header-home.jpg";
import marketExperience from "../images/photos/market-experience.png";
import aboutTheGuarantee from "../images/photos/about-the-guarantee.png";
import wereToBuy from "../images/photos/were-to-buy.png";
import exteriorDoors from "../images/photos/exterior-doors.png"
import windows from "../images/photos/windows.png"
import interiorDoors from "../images/photos/interior-doors.png"
import panoramaWindow from "../images/photos/panorama-window.png"

import service from "../images/icons/service.svg"
import company from "../images/icons/company.svg"
import request from "../images/icons/request.svg"
import delivery from "../images/icons/delivery.svg"

// import exteriorDoors from "../images/photos/exterior-doors.png";
// import interiorDoors from "../images/photos/interior-doors-service.png";
import patioDoors from "../images/photos/patio-doors-service.png";

import futural from "../images/photos/futural.png";
import whiteDouble from "../images/photos/white-double.png";
import windowHd from "../images/photos/window-hd.png";

import { ServiceType } from "../types/ServiceType";

export const banners = [
  {
    id: 1,
    name: "home",
    image: home,
  },
  {
    id: 2,
    name: "home",
    image: home,
  },
  {
    id: 3,
    name: "home",
    image: home,
  },
  {
    id: 4,
    name: "home",
    image: home,
  }
]

export const navigation = [
  {
    id: 1,
    title: "Home page",
    href: '/',
    isLocation: true,
  },
  {
    id: 2,
    title: "About us",
    href: '/#about-us',
    isLocation: false,
  },
  {
    id: 3,
    title: "Advantages",
    href: '/#advantages',
    isLocation: false,
  },
  {
    id: 4,
    title: "Services",
    href: '/services',
    isLocation: true,
  },
  {
    id: 5,
    title: "Our work",
    href: '#our-work',
    isLocation: false,
  },
  {
    id: 6,
    title: "Reviews",
    href: '/#reviews',
    isLocation: false,
  },
  {
    id: 7,
    title: "Service area",
    href: '/#service-area',
    isLocation: false,
  },
  {
    id: 8,
    title: "Contact us",
    href: '/#contact-us',
    isLocation: false,
  },
]

export const footerWindowLinks = [
  {
    id: 1,
    title: "WINDOWS & DOORS",
    href: null,
  },
  {
    id: 2,
    title: "Windows",
    href: "windows",
  },
  {
    id: 3,
    title: "Exterior Doors",
    href: "exterior-doors",
  },
  {
    id: 4,
    title: "Interior Doors",
    href: "interior-doors",
  },
  {
    id: 5,
    title: "Patio Doors",
    href: "patio-doors",
  },
]

export const footerCompanyLinks = [
  {
    id: 1,
    title: "OUR COMPANY",
    href: null,
  },
  {
    id: 2,
    title: "about us",
    href: "about-us",
  },
  {
    id: 3,
    title: "advantages",
    href: "advantages",
  },
  {
    id: 4,
    title: "our work",
    href: "our-work",
  },
]

export const footerSupportLinks = [
  {
    id: 1,
    title: "SUPPORT",
    href: null,
  },
  {
    id: 2,
    title: "Support opions",
    href: "support-opions",
  },
  {
    id: 3,
    title: "Help on your projec",
    href: "help on your projec",
  },
]

export const networks = [
  {
    id: 1,
    title: "facebook",
    href: "https://www.facebook.com/",
  },
  {
    id: 2,
    title: "telegram",
    href: "https://web.telegram.org/",
  },
  {
    id: 3,
    title: "x",
    href: "https://twitter.com/",
  }
]

export const ourWorks = [
  {
    id: 1,
    title: "Market experience",
    description: "Outstanding performance backed by a 10-Year Limited Warranty.",
    link: "learn more",
    href: "",
    image: marketExperience,
  },
  {
    id: 2,
    title: "About the guarantee",
    description: "We provide excellent quality and a multi-year warranty.",
    link: "learn more",
    href: "",
    image: aboutTheGuarantee,
  },
  {
    id: 3,
    title: "Were to buy",
    description: "Use the map to find a store near you.",
    link: "Search",
    href: "",
    image: wereToBuy,
  },
]

export const reviews = [
  {
    id: 1,
    title: "Carl Lourens",
    rating: 4,
    description: "The whole process, from consultation to installation, was seamless. I'm extremely satisfied with my investment and would highly recommend them.",
  },
  {
    id: 2,
    title: "Carl Lourens",
    rating: 5,
    description: "The installation was quick, and now my house feels much more comfortable and energy-efficient. Thank you!",
  },
  {
    id: 3,
    title: "Carl Lourens",
    rating: 5,
    description: "The quality is exceptional, and the installation process was smooth and efficient.",
  },
]

export const services = [
  {
    id: 1,
    title: "discover our offer",
    type: null,
    link: null,
    photo: null,
  },
  {
    id: 2,
    title: "exterior doors",
    type: ServiceType.door,
    link: "exterior-doors",
    photo: exteriorDoors,
  },
  {
    id: 3,
    title: "windows",
    type: ServiceType.window,
    link: "windows",
    photo: windows,
  },
  {
    id: 4,
    title: "interior doors",
    type: ServiceType.door,
    link: "interior-doors",
    photo: interiorDoors,
  },
  {
    id: 5,
    title: "panorama window",
    type: ServiceType.window,
    link: "panorama-window",
    photo: panoramaWindow,
  },
  {
    id: 6,
    title: [
      {
        name: "service",
        title: "Professional customer service",
        image: service,
      },
      {
        name: "company",
        title: "Professional montage company",
        image: company,
      },
      {
        name: "request",
        title: "Fast answer on offer request",
        image: request,
      },
      {
        name: "delivery",
        title: "Delivery and Warranty",
        image: delivery,
      },
    ],
    link: null,
    type: null,
    photo: null,
  },
]

export const doors = [
  {
    id: 1,
    title: "Exterior Doors",
    image: exteriorDoors,
  },
  {
    id: 2,
    title: "Interior Doors",
    image: interiorDoors,
  },
  {
    id: 3,
    title: "Patio Doors",
    image: patioDoors,
  },
]

export const windowsService = [
  {
    id: 1,
    title: "futural",
    image: futural,
  },
  {
    id: 2,
    title: "whiteDouble",
    image: whiteDouble,
  },
  {
    id: 3,
    title: "windowHd",
    image: windowHd,
  },
]
