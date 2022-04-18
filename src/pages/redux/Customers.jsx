import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, List } from "../../components/ui";

const Customers = () => {
  const store = useSelector((store) => store.customers);
  const dispatch = useDispatch();

  const listTile = useMemo(() => {
    return store.customers.length ? "Customers" : "There are no customers";
  }, [store.customers]);

  const addCustomer = () => {
    dispatch({
      type: "ADD_CUSTOMER",
      payload: { name: prompt("Enter customer name", ""), id: Date.now() },
    });
  };

  const removeCustomer = (id) => {
    dispatch({
      type: "REMOVE_CUSTOMER",
      payload: { id },
    });
  };

  const removeLastCustomer = () => {
    dispatch({
      type: "REMOVE_LAST_CUSTOMER",
    });
  };

  return (
    <div>
      <div className="flex gap-2">
        <Button onClick={addCustomer}>Add Customer</Button>
        {store.customers.length ? (
          <Button onClick={removeLastCustomer}>Remove Last Customer</Button>
        ) : (
          ""
        )}
      </div>
      <List
        title={listTile}
        items={store.customers}
        className="mt-2"
        renderItem={(item) => (
          <div
            className="cursor-pointer font-bold p-3"
            onClick={() => removeCustomer(item.id)}
          >
            {item.name}
          </div>
        )}
      />
    </div>
  );
};

export default Customers;
