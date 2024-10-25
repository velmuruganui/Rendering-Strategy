import ClientSideRendering from './components/ClientSideRendering'

export default function Home() {
  return (
    <div className='w-[60%] mx-auto'>
        <div className='p-10 mt-10 bg-white rounded-lg shadow-md'>
          <h1 className='mb-4 text-2xl font-bold'>Client Side Rendering - CSR </h1>
          <ClientSideRendering />
        </div>
    </div>  
  )
}