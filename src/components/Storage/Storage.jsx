// libs
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

// styles
import classes from "./styles.module.css";

export default function Storage() {
  const [storageLength, setStorageLength] = useState(localStorage.length);

  const onClearStorage = () => {
    if (storageLength === 0) return alert("Ջնջելու տվյալ չկա"); 
    
    if (window.confirm("Արդյոք ջնջե՞լ")) {
      localStorage.clear();
      setStorageLength(0);
    }
  };

  const storageKeys = Object.keys(localStorage);

  return (
    <div className={classes.root}>
      <p className={classes.amount}>Ընդհանուր կա {storageLength} տվյալ</p>

      <div className={classes.values}>
        {
          storageKeys.length > 0 &&
          storageKeys.map(key => 
            <div key={key} className={classes.keyContainer}>
              <p className={classes.key} >{key}</p>
              <p className={classes.value}>{localStorage.getItem(key)}</p>
            </div>
          )
        }
      </div>

      <button onClick={onClearStorage} className={classes.deleteButton}>
        <RiDeleteBin6Line /> Ջնջել ամբողջը
      </button>
    </div>
  );
}
