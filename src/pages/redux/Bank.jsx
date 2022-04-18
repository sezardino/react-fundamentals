import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/ui";

const Bank = () => {
  const dispatch = useDispatch();
  const { cash } = useSelector((state) => state.bank);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div>
      <h2>Bank</h2>
      <h3>You have: {cash}$ on your account</h3>
      <Button
        onClick={() => addCash(Number(prompt("Please Enter Number", "0")))}
      >
        Add Cash
      </Button>
      <Button
        onClick={() => getCash(Number(prompt("Please Enter Number", "0")))}
      >
        Get Cash
      </Button>
    </div>
  );
};

export default Bank;
