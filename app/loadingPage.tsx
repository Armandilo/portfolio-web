


export default function LoadingPage() {
    return (
      <div className="flex justify-center items-center h-screen gap-2">
        <div className='absolute inset-0 -z-8 opacity-5' style={{backgroundImage:`url(/grain.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
        <span className='sr-only'>Loading...</span>
        <div className='h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-4 w-4 bg-white rounded-full animate-bounce'></div>
      </div>
    );
  }