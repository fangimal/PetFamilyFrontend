
import { useState } from 'react';
import PetCard from './components/PetCard';

function App() {
const [counter] = useState(3);
  return (
    <div className="h-screen flex flex-col gap-8   justify-center items-center bg-gray-300">
      <PetCard counter={counter}/>
    </div>
);
}

export default App
