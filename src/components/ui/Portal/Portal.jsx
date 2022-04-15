import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = (props) => {
  const { children } = props;
  const [container] = useState(document.createElement("div"));

  container.setAttribute("id", "modal-root");

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};
