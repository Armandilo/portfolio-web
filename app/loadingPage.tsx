


export default function LoadingPage() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className='absolute inset-0 -z-8 opacity-5' style={{backgroundImage:`url(/grain.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-8 w-8 bg-white rounded-full animate-bounce'></div>
      </div>
    );
  }