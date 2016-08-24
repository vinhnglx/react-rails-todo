import { EventEmitter } from "events";

export default class AppEventEmitter extends EventEmitter {
  addChangeListener(callback) {
    this.on('CHANGE', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
}
