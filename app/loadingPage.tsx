


export default function LoadingPage() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className='absolute inset-0 -z-8 opacity-5' style={{backgroundImage:`url(/grain.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
         Loading...
      </div>
    );
  }