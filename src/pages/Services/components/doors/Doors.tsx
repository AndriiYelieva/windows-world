import './Doors.scss';
import exteriorDoors from "../../../../images/exterior-doors.png";
import interiorDoors from "../../../../images/interior-doors-service.png";
import patioDoors from "../../../../images/patio-doors-service.png";

const array = [
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

export const Doors = () => {
  return (
    <header className="doors">
      <ul className="doors__list">
        {array.map(card => (
          <li key={card.id} className="doors__card">
            <img
              src={card.image}
              alt={card.title}
              className="doors__card--image"
            />
            <button
              type="button"
              className="doors__card--link"
            >
              {card.title}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
