import "./Service.scss";
import exteriorDoors from "../../../../images/exterior-doors.png"
import windows from "../../../../images/windows.png"
import interiorDoors from "../../../../images/interior-doors.png"
import panoramaWindow from "../../../../images/panorama-window.png"

import service from "../../../../images/svg/service.svg"
import company from "../../../../images/svg/company.svg"
import request from "../../../../images/svg/request.svg"
import delivery from "../../../../images/svg/delivery.svg"

import { ServiceType } from "../../../../Types";
import { Link } from "react-router-dom";

const arrayService = [
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

export const Service = () => {
  return (
    <section className="service">
      <h1 className="service__title">Service</h1>
      <ul className="service__list">
        {arrayService.map(card => (
          card.type !== null ?
            <li
              key={card.id}
              className="service__card"
              style={{ backgroundImage: `url(${card.photo})` }}

            >
              <Link
                to={card.link}
                className="service__card--link"
              >
                {card.title}
              </Link>
            </li>
            :
            card.id === 1 ? (
              <li
                key={card.id}
                className="service__null service__null--wrapper"
              >
                <h1 className="service__null--title">
                  {typeof card.title === 'string' ? card.title : null}
                </h1>
              </li>
            ) : (
              <li
                key={card.id}
                className="service__null"
              >
                <ul className="service__null--benefits">
                  {typeof card.title === 'object' && (
                    card.title.map(element => (
                      <li
                        key={element.name}
                        className="service__null--benefit"
                        style={{ backgroundImage: `url(${element.image})` }}
                      >
                        {element.title}
                      </li>
                    ))
                  )
                  }
                </ul>
              </li>
            )
        ))}
      </ul>
    </section>
  );
};