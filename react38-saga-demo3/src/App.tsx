import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const message = useSelector((state: any) => state.message);

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={() => dispatch({ type: "START_DASHBOARD" })}>
        Start Dashboard
      </button>

      <button onClick={() => dispatch({ type: "STOP_DASHBOARD" })}>
        Stop Dashboard
      </button>
    </div>
  );
}
