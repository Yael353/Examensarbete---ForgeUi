import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import { ThemeProvider } from "./components/darkmode/ThemeProvider";
import ComponentsPage from "./components/ComponentsPage";
import ButtonPage from "./pages/ButtonPage";
import SidebarLayout from "./layouts/SidebarLayout";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Här lägger vi SidebarProvider bara för de routes som behöver den */}
          <Route element={<SidebarLayout />}>
            <Route path="/components" element={<ComponentsPage />}>
              <Route index element={<Components />} />
              <Route path="myComponents/Button" element={<ButtonPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
