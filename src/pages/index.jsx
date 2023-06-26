import Calculate from '../components/calculate/index.tsx';
import EventEmitter from '../utils/EventEmitter.js';
import './index.scss';

const Index = () => {
  // emit事件
  // const emit = new EventEmitter();
  // const eventConsole = (data) => {
    // console.log('🚀 -- file: index.jsx -- line 11 -- dassda', data);
  // }
  // emit.on('console', eventConsole);
  // emit.emit('console', '我最帅');


  return (
    <div>
      {Calculate()}
    </div>
  );
}

export default Index;
