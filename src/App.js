import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/global/Topbar";
import Dashboard from "./Scenes/Dashboard";
import Sidemenu from "./Scenes/global/Sidemenu";
import Team from "./Scenes/team";
import Invoices from "./Scenes/invoices";
import Contacts from "./Scenes/contacts";
// import Bar from "./Scenes/bar";
// import Form from "./Scenes/form";
// import Line from "./Scenes/line";
// import Pie from "./Scenes/pie";
// import FAQ from "./Scenes/faq";
// import Geography from "./Scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidemenu/>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/contact" element={<Contacts/>}/>
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/form" element={<Form/>}/> */}
              {/* <Route path="/line" element={<Line/>}/> */}
              {/* <Route path="/pie" element={<Pie/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/geography" element={<Geography/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
