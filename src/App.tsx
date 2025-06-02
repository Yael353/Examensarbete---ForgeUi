import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import { ThemeProvider } from "./components/darkmode/ThemeProvider";
import SidebarLayout from "./layouts/SidebarLayout";
import Colors from "./components/myComponents/views/Colors";
import About from "./components/myComponents/views/About";
import Documentation from "./components/myComponents/views/Documentation";
import FancyButtonGallery from "./components/myComponents/Button";
import { HeadingGallery } from "./components/myComponents/headings/HeadingGallarey";
import { ContactFormGallery } from "./components/myComponents/contactform/ContactFormGallery";
import { LoginFormGallery } from "./components/myComponents/loginform/LoginFormGallery";
import { CardGallery } from "./components/myComponents/card/CardGallery";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Alla routes som ska ha sidebar-layouten */}
          <Route element={<SidebarLayout />}>
            {/* <div className="bg-background "> */}
              <Route path="/components" element={<Components />} />
              <Route
                path="/components/myComponents/Button"
                element={<FancyButtonGallery />}
              />
              <Route
                path="/components/myComponents/Heading"
                element={<HeadingGallery />}
              />
              <Route
                path="/components/myComponents/contactform/ContactForm"
                element={<ContactFormGallery />}
              />
              <Route
                path="/components/myComponents/loginform/LoginForm"
                element={<LoginFormGallery />}
              />
              <Route
                path="/components/myComponents/card/CardGallery"
                element={<CardGallery />}
              />
              <Route path="/colors" element={<Colors />} />
              <Route path="/about" element={<About />} />
              <Route path="/documentation" element={<Documentation />} />
            {/* </div> */}
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
