import Calculate from '../components/calculate/index.tsx';
import './index.scss';

const Index = () => {
  return (
    <div className="calculate-wrap">
      {Calculate()}
    </div>
  );
}

export default Index;
