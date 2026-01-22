// import { Message } from "./components/Message";
// import { withBorder } from "./hoc/withBorder";

// const MessageWithBorder = withBorder(Message);

// function App() {
//   return (
//     <div>
//       <MessageWithBorder text="Hello from HOC!" />
//       <MessageWithBorder text="Same component, reused behavior" />
//     </div>
//   );
// }

// export default App;

import { ThemeButton } from "./components/ThemeButton";
import { withThemeCounter } from "./hoc/withThemeCounter";

const EnhancedThemeButton = withThemeCounter(ThemeButton);

function App() {
  return (
    <div>
      <EnhancedThemeButton />
    </div>
  );
}

export default App;

