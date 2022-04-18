import { Outlet } from "react-router-dom";

const ReduxIndex = () => {
  return (
    <div>
      <h1>Redux index ts</h1>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default ReduxIndex;
