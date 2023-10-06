import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

// styles/index.css
import "./styles/base.css";
import "./styles/sidebar.css";
import "./styles/content.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Switch from 'react-router-dom/Switch';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Sidebar} />
          <Route path="/content" component={Content} />
          <Route path="*" element={<NotFoundPage />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
