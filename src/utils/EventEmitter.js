// EventEmitter事件
class EventEmitter {
  constructor() {
    this.event = {};
  }
  // 事件绑定
  on(eventName, callback) {
    /**
     * 若事件不存在，创建一个空的回调函数列表。
     * 为什么是列表? 能绑定多个事件
    */
    this.event[eventName] = this.event[eventName] || [];
    this.event[eventName].push(callback);
  }
  // 事件发布
  emit(eventName, data) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(callback => {
        callback(data); // 执行回调函数，并传递数据作为参数
      })
    }
  }
  // 取消订阅事件
  off(eventName, callback) {
    if (this.event[eventName]) {
      this.event[eventName] = this.event[eventName].filter(cb => cb !== callback); // 过滤掉要取消的事件
    }
  }
  // 一次性的事件监听器
  once(eventName, callback) {
    const onceCallback = data => {
      callback(data); // 执行回调函数

      this.off(eventName, onceCallback); // 在事件执行后取消订阅
    }

    this.on(eventName, onceCallback);
  }
}

export default EventEmitter;
