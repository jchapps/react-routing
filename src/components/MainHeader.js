import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

// new syntax for navLink active - activeClassName no longer exists
const classNameFunc = ({ isActive }) => (isActive ? classes.nav_active : "");


const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={classNameFunc} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameFunc} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
