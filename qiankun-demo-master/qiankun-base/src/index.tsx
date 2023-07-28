import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { registerMicroApps, start } from "qiankun";
import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state = {
  name: 'malena morgan'
}

// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});

setTimeout(() => {
  actions.setGlobalState({ ...state, age: 34});
}, 2000);
actions.offGlobalStateChange();

registerMicroApps([
  {
    name: "micro-app1", // app name registered
    entry: "//localhost:3011",
    container: "#micro-app1",
    activeRule: "/micro-app1",
    props: {
      niceBody: "malena",
      age: 32
    }
  },
  {
    name: "micro-app2",
    entry: "//localhost:3012",
    container: "#micro-app2",
    activeRule: "/micro-app2",
    props: {
      niceBody: "malena",
      age: 32
    }
  },
  {
    name: "micro-vue3-app3",
    entry: "//localhost:3013",
    container: "#micro-vue3-app3",
    activeRule: "/micro-vue3-app3",
    props: {
      niceBody: "malena",
      age: 32
    }
  }
]);

start();

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
