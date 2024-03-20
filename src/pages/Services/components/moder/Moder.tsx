import "./Moder.scss";

import designPro from "../../../../images/photos/design-pro.png"
import trendsForWindows from "../../../../images/photos/trends-for-windows.png"
import { HaveAQuestion } from "../../../../components";

const arrayModer = [
  {
    id: 1,
    title: null,
    photo: trendsForWindows,
    description: null,
  },
  {
    id: 2,
    title: "Auraline Composite Windows",
    photo: null,
    description: "Auraline keeps the focus on natural light and bigger views, with the slimmer sight lines of contemporary wood windows, plus energy-efficient performance that enhances comfort in all climates. Twice as rigid as vinyl, Auraline installs cleanly and is engineered to endure.",
  },
  {
    id: 3,
    title: "Design-Pro Fiberglass Doors",
    photo: null,
    description: "Created to resemble the beautiful, natural look of real mahogany, oak or fir woodgrains, JELD-WEN Design-Pro fiberglass doors have high-definition panels with wider profiles to provide more depth and authenticity",
  },
  {
    id: 4,
    title: null,
    photo: designPro,
    description: null,
  },
]

export const Moder = () => {
  return (
    <section className="moder">
      <h1 className="moder__title">Modern style, affordable luxury</h1>
      <ul className="moder__list">
        {arrayModer.map(card => (
          card.photo !== null ?
            <li
              key={card.id}
              className="moder__card"
              style={{ backgroundImage: `url(${card.photo})` }}
            />
            :
            <li
              key={card.id}
              className="moder__null"
            >
              <h1 className="moder__null--title">
                {card.title}
              </h1>
              <p className="moder__null--description">
                {card.description}
              </p>
            </li>
        ))}
      </ul>

      <button
        type="button"
        className="moder__link"
      >
        cataloge
      </button>
      <HaveAQuestion />
    </section>
  );
};