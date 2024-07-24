import { MainRoutes } from "./routers/routes";
import { RootLayout } from "./layouts/root-layout";

function App() {
  return (
    <RootLayout>
      <MainRoutes />
    </RootLayout>
  );
}

export default App;
