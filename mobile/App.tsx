import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import Routes from "./routes";
import { useColorScheme } from "react-native";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

const App = () => {
  const theme = useColorScheme();

  // return (
  //   <ApplicationProvider
  //     {...eva}
  //     theme={theme === "dark" ? eva.dark : eva.light}
  //   >
  //     <Routes />
  //   </ApplicationProvider>
  // );

  return <Register />;
};

export default App;
