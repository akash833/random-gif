import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return <div className='background h-full py-6 px-10'>
    <div className='bg-white w-full rounded-md text-center text-2xl font-bold'>RANDOM GIFS</div>
    <Random/>
    <Tag/>
  </div>;
}
