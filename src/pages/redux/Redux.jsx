import { Outlet } from "react-router-dom";
import { Button } from "../components/ui";

const Redux = () => {
  return (
    <div>
      <h1>Redux</h1>
      <ul>
        <li>
          <Button to="bank">Bank</Button>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Redux;
