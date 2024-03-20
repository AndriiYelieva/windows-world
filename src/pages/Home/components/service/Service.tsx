import { services } from "../../../../config";
import "./Service.scss";

import { Link } from "react-router-dom";


export const Service = () => {
  return (
    <section className="service">
      <h1 className="service__title">Service</h1>
      <ul className="service__list">
        {services.map(card => (
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