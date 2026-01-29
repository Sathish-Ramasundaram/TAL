import { useDispatch } from "react-redux";
import { buttonClicked } from "./actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => dispatch(buttonClicked())}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
