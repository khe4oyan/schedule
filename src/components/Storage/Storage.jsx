// libs
import { RiDeleteBin6Line } from "react-icons/ri";

// components
import NotificationCircle from "../NotificationCircle";

// hooks
import useVersion from "../../customHooks/useVersion";

// constants
import VERSIONS from "../../constants/versions";

// styles
import classes from "./styles.module.css";
import { useEffect, useState } from "react";

export default function Storage() {
  const [storageLength, setStorageLength] = useState(localStorage.length);
  const [isShowUpdate, updateVersion] = useVersion("storage", VERSIONS.STORAGE);

  const onClearStorage = () => {
    if (storageLength === 0) return alert("Ջնջելու տվյալ չկա"); 
    
    if (window.confirm("Արդյոք ջնջե՞լ")) {
      localStorage.clear();
      setStorageLength(0);
    }
  };

  useEffect(() => {
    if (isShowUpdate) {
      return () => {
        updateVersion();
      };
    }
  }, []);

  return (
    <div className={classes.root}>
      {isShowUpdate && <NotificationCircle /> }
      <p>Ներկա պահին կա {storageLength} տվյալ</p>
      <p>Կարող ես ջնջել տվյալները, որ ավելորդ բան չմնա</p>
      <button onClick={onClearStorage} className={classes.deleteButton}>
        <RiDeleteBin6Line /> Ջնջել
      </button>
    </div>
  );
}
