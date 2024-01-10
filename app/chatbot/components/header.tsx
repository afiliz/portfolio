import Image from 'next/image'

export default function Header() {
  return (
    <section className="flex w-full h-24 bg-slate-300 items-center justify-center border-b-2 border-slate-200">
      <div className='flex items-center flex-col'>
        {/* <Image>

        </Image> */}
        <h2 className='mt-4'>Chatbot</h2>
      </div>
    </section>
  )
}