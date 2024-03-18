import { Link } from "react-router-dom";
import "./Logo.scss"

export const Logo = () => {
  return (
    <div
    className="logo">
      <Link
        to="/windows-world"
        className="logo__link"
      />
      <div className="logo__wrapper">
        <h1 className="logo__wrapper--title">Windows World</h1>
        <p className="logo__wrapper--text">Windows & doors</p>
      </div>
    </div>
  );
};