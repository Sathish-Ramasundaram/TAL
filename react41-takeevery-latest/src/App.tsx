import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const log = useSelector((state: any) => state.log);
  const result = useSelector((state: any) => state.result);

  return (
    <div style={{ padding: 20 }}>
      <h2>takeEvery vs takeLatest</h2>

      {/* takeEvery */}
      <button
        onClick={() =>
          dispatch({
            type: "BUTTON_CLICKED",
            payload: "User clicked",
          })
        }
      >
        Click Me (takeEvery)
      </button>

      <p>Log: {log}</p>

      <hr />

      {/* takeLatest */}
      <input
        placeholder="Search todos..."
        onChange={(e) =>
          dispatch({
            type: "SEARCH",
            payload: e.target.value,
          })
        }
      />

      <p>Result: {result}</p>
    </div>
  );
}
