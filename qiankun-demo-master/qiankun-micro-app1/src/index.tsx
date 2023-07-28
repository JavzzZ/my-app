import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// @ts-ignore
function render(props) {
  const { container } = props;
  // @ts-ignore
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector("#root")
      : document.getElementById("#root")
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

let age:any = null;
// @ts-ignore
export async function mount(props) {
  console.log("[react16] props from main framework", props);
  // render(props);
  // @ts-ignore
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
    if (age != state.age) {
      age =  state.age;
      setTimeout(() => {
        props.setGlobalState({ ...state, age: 36 });
      }, 2000);
    }
    // @ts-ignore
  });
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
