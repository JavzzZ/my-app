let throttleTimer = null;

const Utils = {
  // 对象判空
  isEmptyObject(obj) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  },
  // 返回数据类型
  dataTypeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  /**
   * 防抖
   * 1. search 搜索联想，用户在不断输入值时，用防抖来节约请求资源
   * 2. window 触发 resize 的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
  */
  debounce(fn, delay = 300) {
    let timer = null
    return function (...args) {
      if (timer != null) {
        clearTimeout(timer)
        timer = null
      }

      timer = setTimeout(() => {
        fn.call(this, ...args)
      }, delay);
    }
  },
  /**
   * 节流
   * 1.鼠标不断点击触发，mousedown (单位时间内只触发一次)
   * 2.监听滚动事件，比如是否滑到底部自动加载更多
  */
  throttle(fn, delay = 300) {
    if (throttleTimer == null) {
      throttleTimer = setTimeout(() => {
        fn()

        clearTimeout(throttleTimer)
        throttleTimer = null
      }, delay);
    }
  }

};

export default Utils;
