import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const message = useSelector((state: any) => state.message);

  return (
    <div>
      <h2>{message}</h2>

      <button
        onClick={() =>
          dispatch({ type: "BUTTON_CLICKED" })
        }
      >
        Click me
      </button>
    </div>
  );
}
