import Image from 'next/image';

export default function Hero() {
  return (
    <section className='pb-7 '>
      <div className='hidden md:-mt-16 md:pb-0 md:px-20 md:flex justify-between space-x-16 items-center md:min-h-screen'>
        <div className='w-1/3'>
          <p className=' text-emerald-500 font-medium text-lg '>
            #ExploreYourSkills
          </p>
          <h1 className='mt-3 font-bold text-5xl leading-[60px]'>
            Your Dream Career Starts With Us
          </h1>
          <p className='mt-6 text-lg leading-relaxed'>
            Belajar sesuai arahan yang telah disusun baik oleh expert &
            komunitas yang supportive
          </p>
          <div className='flex space-x-3 mt-6'>
            <div className='w-1/2 bg-sky-500 rounded-full text-center py-3 text-white font-bold text-base'>
              Katalog Kelas
            </div>
            <div className='w-1/2 bg-slate-300 rounded-full text-center py-3 text-base'>
              Panduan Karir
            </div>
          </div>
          <div className='mt-10'>
            <Image
              src='/clients.png'
              alt='Picture of the author'
              width='803'
              height='54'
            />
          </div>
        </div>
        <div className='w-2/3'>
          <div className='w-full h-[500px] overflow-hidden rounded-xl'>
            <Image
              src='https://source.unsplash.com/1000x1000?study'
              alt='Picture of the author'
              width='1000'
              height='1000'
            />
          </div>
        </div>
      </div>
      <div className='w-full h-96 overflow-hidden md:hidden'>
        <Image
          src='https://source.unsplash.com/500x500?tech'
          alt='Picture of the author'
          width='1000'
          height='1000'
        />
      </div>
    </section>
  );
}
