import './Header.scss';

import { Nav } from '../../../../components';
import banner from "../../../../images/photos/banner-service.webp";

export const Header = () => {

  return (
    <header className="headerServices">
      <Nav />
      <img
        src={banner}
        alt="baner"
        className="headerServices__banner"
      />
      <h1 className="headerServices__title">
        Windows That Inspire
      </h1>
    </header>
  );
}
