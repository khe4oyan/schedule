import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
// import AllComponentsPreview from './components/AllComponentsPreview';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// root.render(<AllComponentsPreview />);
