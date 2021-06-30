import './Header.scss';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3><a href="https://www.starwars.com/" target="blank">Star DB</a></h3>
      <ul className="d-flex">
        <li><a href="2">People</a></li>
        <li><a href="2">Planets</a></li>
        <li><a href="2">Starships</a></li>
      </ul>
    </div>
  );
};

export default Header;