// libs
import { Outlet } from 'react-router-dom';

// components
import Header from '../../components/Header';

// styles
import classes from './styles.module.css';

export default function HomePage() {
  return (
    <div className={classes.root}>
      <Header />
      <Outlet />
    </div>
  )
}