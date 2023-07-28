// @ts-nocheck
import "./public-path";
import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from './router/index';
let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.use(router)
  instance.mount(container ? container.querySelector("#app") : "#app");
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log('vue3-app')
  console.log(props)
  render(props);
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
}
