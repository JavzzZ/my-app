import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// @ts-ignore
function render(props) {
  const { container } = props;
  // @ts-ignore
  ReactDOM.render(
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/micro-app2" : "/"}
    >
      <App />
    </BrowserRouter>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  // render({});
}
// @ts-ignore
export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}
// @ts-ignore
export async function mount(props) {
  console.log("[react16] props from main framework", props);
  render(props);
}
// @ts-ignore
export async function unmount(props) {
  const { container } = props;
  // @ts-ignore
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
