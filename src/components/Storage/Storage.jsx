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

  return (
    <div className={classes.root}>
      <p>Ներկա պահին կա {storageLength} տվյալ</p>
      <p>Կարող ես ջնջել տվյալները, որ ավելորդ բան չմնա</p>
      <button onClick={onClearStorage} className={classes.deleteButton}>
        <RiDeleteBin6Line /> Ջնջել
      </button>
    </div>
  );
}
