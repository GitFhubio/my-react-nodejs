import {MainNavigation} from './MainNavigation';
import classes from './Layout.module.css';

export const Layout:React.FC=(props:any) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
  }
