// import 'starability/starability-minified.css';
import { Riview } from "../riview/Riview";
import "./Riviews.scss";

const arrayRiviews = [
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

export const Riviews = () => {
  return (
    <section className="riviews">
      <h1 className="riviews__title">
        Riviews
      </h1>

      <ul className="riviews__list">
        {arrayRiviews.map(riview => (
          <Riview riview={riview}  key={riview.id}/>
        ))}
      </ul>
    </section>
  );
};