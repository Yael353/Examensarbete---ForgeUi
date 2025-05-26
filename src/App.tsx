import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import { ThemeProvider } from "./components/darkmode/ThemeProvider";
// import ComponentsPage from "./components/ComponentsPage";
import SidebarLayout from "./layouts/SidebarLayout";
import Colors from "./components/myComponents/Colors";
import About from "./components/myComponents/About";
import Documentation from "./components/myComponents/Documentation";
import FancyButtonGallery from "./components/myComponents/Button";
// import { Heading } from "./components/myComponents/Heading";
import { HeadingGallery } from "./components/myComponents/headings/HeadingGallarey";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Alla routes som ska ha sidebar-layouten */}
          <Route element={<SidebarLayout />}>
            <Route path="/components" element={<Components />} />
            <Route
              path="/components/myComponents/Button"
              element={<FancyButtonGallery />}
            />
            <Route
              path="/components/myComponents/Heading"
              element={<HeadingGallery />}
            />
            <Route path="/colors" element={<Colors />} />
            <Route path="/about" element={<About />} />
            <Route path="/documentation" element={<Documentation />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
