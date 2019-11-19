import React, { useState } from "react";
import { Button } from "reactstrap/es";

function CounterAppDua(props) {
  let [count, setCount] = useState(0);

  return (
    <div class="pagesatu">
      <p> {count}</p>
      <Button color="primary" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button
        color="primary"
        onClick={() => {
          if (count <= 0) {
            alert("Stop, sampai di sini !");
          } else {
            setCount(count - 1);
          }
        }}
      >
        -
      </Button>
      <Button color="danger" onClick={() => setCount((count = 0))}>
        Reset
      </Button>
    </div>
  );
}

export default CounterAppDua;
