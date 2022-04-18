import { Outlet } from "react-router-dom";
import { Button } from "../../components/ui";

const Redux = () => {
  return (
    <div>
      <h1>Redux</h1>
      <div className="grid grid-cols-12 my-4">
        <ul className="col-start-1 col-end-3 grid gap-6 justify-items-start">
          <li>
            <Button to="bank">Bank</Button>
          </li>
          <li>
            <Button to="customers">Customers</Button>
          </li>
        </ul>
        <div className="border-2 rounded-lg col-start-3 col-end-12 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Redux;
