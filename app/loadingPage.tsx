
import {ring} from 'ldrs';
ring.register();

export default function LoadingPage() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className='absolute inset-0 -z-8 opacity-5' style={{backgroundImage:`url(/grain.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
        <l-ring
          size="40"
          stroke="5"
          bg-opacity="0"
          speed="2" 
          color="white" 
        ></l-ring>
      </div>
    );
  }