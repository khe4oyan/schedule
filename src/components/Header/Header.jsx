// custom hooks
import { useEffect, useState } from 'react';
import useVersion from '../../customHooks/useVersion';

// styles
import classes from './styles.module.css';

export default function Header() {
  const [isDoTransformText, setTextUpdated] = useVersion("isPacticeText", 1);
  const [isShowAnim, setIsShowAnim] = useState(false);

  useEffect(() => {
    if (isDoTransformText === true) {
      setIsShowAnim(true);
      setTimeout(setTextUpdated, 2500);
    }
  }, [isDoTransformText]);

  return (
    <header className={classes.root}>
      {
        isDoTransformText ?
          <>
            <h1 className={`${classes.headerText} ${classes.prev} ${isShowAnim && classes.prevAnim}`}>Դասացուցակ</h1>
            <h1 className={`${classes.headerText} ${classes.new} ${isShowAnim && classes.newAnim}`}>Պրակտիկա</h1>
          </> :
          <h1 className={classes.headerText}>Պրակտիկա</h1>
      }
    </header>
  )
}