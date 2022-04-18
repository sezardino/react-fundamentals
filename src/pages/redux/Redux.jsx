import { Outlet } from "react-router-dom";
import { Button } from "../../components/ui";

const Redux = () => {
  return (
    <div>
      <h1>Redux</h1>
      <ul style={{ display: "flex", gap: 20 }}>
        <li>
          <Button to="bank">Bank</Button>
        </li>
        <li>
          <Button to="customers">Customers</Button>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Redux;
