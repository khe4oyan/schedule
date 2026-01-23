import BeforeClass from '../BeforeClass';
import Weekend from '../Weekend';
import AfterClass from '../AfterClass';
import Break from '../Break';
import Header from '../Header';
import Lesson from '../Lesson';
import ShowWeekLessons from '../ShowWeekLessons';
import NotificationCircle from '../NotificationCircle';
import Panel from '../Panel';

import themesData from '../../constants/themes';

// styles
import classes from './styles.module.css';

export default function AllComponentsPreview() {
  return (
    <div className={classes.root}>
      {themesData.map(theme => 
        <AllVersions 
          theme={theme.theme} 
          key={theme.theme} 
        />
      )}
    </div>
  )
}

function AllVersions({ theme }) { 
  return (
    <div className={`colors_default ${theme} ${classes.version}`}>
      <h2 className={classes.themeText}>{theme}</h2>

      <div className={classes.buttons}>
        <button>Button</button>
        <button disabled>Button disabled</button>
      </div>
      <div style={{ position: "relative", padding: "10px", border: "1px solid var(--primaryColor_4)", backgroundColor: "var(--primaryColor_1)" }}>
        update section
        <NotificationCircle />
      </div>
      <BeforeClass startedTime={"21:00"} />
      <Weekend />
      <AfterClass />
      <Break filteredLessons={[{ status: "default", start: "20:00" }]} />
      <div style={{ marginTop: "15px", width: "100%" }}></div>
      <Header />

      <Lesson data={{
        title: "Title",
        room: 40404,
        teacher: "Galoyan S",
        start: "06:00",
        end: "23:00",
        status: "current",
      }} />

      <Lesson data={{
        title: "Title",
        room: 40404,
        teacher: "Galoyan S",
        start: "09:00",
        end: "09:30",
        status: "default",
      }} />

      <div style={{ width: "100%" }}></div>

      <ShowWeekLessons />

      <div className={classes.panel}>
        <Panel tab={1}/>
      </div>
    </div>
  );
}