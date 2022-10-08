import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='bg-slate-100'>
        <Hero />
        <section className='py-7'>
          <div className='md:px-20 px-4'>
            <p className=' font-semibold text-emerald-500 text-lg'>
              Follow The Roadmap
            </p>
            <h2 className=' font-bold text-2xl mt-3 md:text-3xl md:w-1/3'>
              Alur Belajar Terbaik Untuk Membangun Karir
            </h2>
          </div>
          <div className='flex flex-wrap md:px-16 p-2 mt-3'>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className=' bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x502?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer untuk Menengah
                </h3>
                <p className='mt-2  text-slate-400'>20 Courses - 77 hours</p>
                <div className='mt-4 mb-3 ml-2 w-10 h-10 overflow-hidden rounded-full'>
                  <Image
                    src='/logo.png'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
              </div>
            </div>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className=' bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x502?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer untuk Menengah
                </h3>
                <p className='mt-2  text-slate-400'>20 Courses - 77 hours</p>
                <div className='mt-4 mb-3 ml-2 w-10 h-10 overflow-hidden rounded-full'>
                  <Image
                    src='/logo.png'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
              </div>
            </div>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className=' bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x502?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer untuk Menengah
                </h3>
                <p className='mt-2  text-slate-400'>20 Courses - 77 hours</p>
                <div className='mt-4 mb-3 ml-2 w-10 h-10 overflow-hidden rounded-full'>
                  <Image
                    src='/logo.png'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
              </div>
            </div>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className=' bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x502?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer untuk Menengah
                </h3>
                <p className='mt-2  text-slate-400'>20 Courses - 77 hours</p>
                <div className='mt-4 mb-3 ml-2 w-10 h-10 overflow-hidden rounded-full'>
                  <Image
                    src='/logo.png'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-7'>
          <div className='md:px-20 px-4'>
            <p className=' font-semibold text-emerald-500 text-lg'>
              Start Learning Today
            </p>
            <h2 className=' font-bold text-2xl mt-3 md:text-3xl md:w-1/3'>
              Temui Kelas Berdasarkan Kategori Yang Kami Sediakan
            </h2>
          </div>
          <div className='flex flex-wrap mt-4 px-2 md:px-16'>
            <div className='w-1/2 md:w-1/4 p-2'>
              <div className='bg-white rounded-lg p-3'>
                <div className='my-3 mb-3 ml-2 w-16 h-16 overflow-hidden rounded-full'>
                  <Image
                    src='https://source.unsplash.com/500x500?render'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-6 font-bold'>3D</h3>
                <p className='mt-2  text-slate-400'>Alur belajar terbaik</p>
              </div>
            </div>
            <div className='w-1/2 md:w-1/4 p-2'>
              <div className='bg-white rounded-lg p-3'>
                <div className='my-3 mb-3 ml-2 w-16 h-16 overflow-hidden rounded-full'>
                  <Image
                    src='https://source.unsplash.com/500x500?illustration'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-6 font-bold'>Illustration</h3>
                <p className='mt-2  text-slate-400'>Alur belajar terbaik</p>
              </div>
            </div>
            <div className='w-1/2 md:w-1/4 p-2'>
              <div className='bg-white rounded-lg p-3'>
                <div className='my-3 mb-3 ml-2 w-16 h-16 overflow-hidden rounded-full'>
                  <Image
                    src='https://source.unsplash.com/500x500?character'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-6 font-bold'>Character</h3>
                <p className='mt-2  text-slate-400'>Alur belajar terbaik</p>
              </div>
            </div>
            <div className='w-1/2 md:w-1/4 p-2'>
              <div className='bg-white rounded-lg p-3'>
                <div className='my-3 mb-3 ml-2 w-16 h-16 overflow-hidden rounded-full'>
                  <Image
                    src='https://source.unsplash.com/500x500?banner'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-6 font-bold'>Banner</h3>
                <p className='mt-2  text-slate-400'>Alur belajar terbaik</p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-7'>
          <div className='px-4 md:px-20'>
            <div className='bg-white p-4 flex justify-between items-center rounded-xl'>
              <div className='flex justify-between items-center space-x-3'>
                <div className='w-12 h-12 overflow-hidden rounded-full'>
                  <Image
                    src='https://source.unsplash.com/500x500?people'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <div>
                  <h3 className='font-bold'>Need Advice?</h3>
                  <p className='mt-1 text-slate-400'>Konsultasi dulu yuk</p>
                </div>
              </div>
              <div>
                <button className='px-7 py-2 rounded-full bg-slate-300 text-sm'>
                  Chat
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='py-7'>
          <div className='md:px-20 px-4'>
            <p className=' font-semibold text-emerald-500 text-lg'>
              Top Featured
            </p>
            <h2 className=' font-bold text-2xl mt-3 md:text-3xl md:w-1/3'>
              Pilih Kelas Unggulan Untuk Tingkatkan Keahlian
            </h2>
          </div>
          <div className='flex flex-wrap md:px-16 p-2 mt-3'>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className='bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x504?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer Pemula
                </h3>
                <p className='mt-2'>Rp. 80,000</p>
                <div className='mt-3 flex justify-between items-center flex-wrap'>
                  <div className='flex items-center md:text-base text-sm'>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span className='mt-1 ml-2'>(123)</span>
                  </div>
                  <div>
                    <span class='material-symbols-outlined mt-2 centang'>
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className='bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x504?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer Pemula
                </h3>
                <p className='mt-2'>Rp. 80,000</p>
                <div className='mt-3 flex justify-between items-center flex-wrap'>
                  <div className='flex items-center md:text-base text-sm'>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span className='mt-1 ml-2'>(123)</span>
                  </div>
                  <div>
                    <span class='material-symbols-outlined mt-2 centang'>
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className='bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x504?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer Pemula
                </h3>
                <p className='mt-2'>Rp. 80,000</p>
                <div className='mt-3 flex justify-between items-center flex-wrap'>
                  <div className='flex items-center md:text-base text-sm'>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span className='mt-1 ml-2'>(123)</span>
                  </div>
                  <div>
                    <span class='material-symbols-outlined mt-2 centang'>
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:p-2 p-2 w-1/2 md:w-1/4'>
              <div className='bg-white p-3 rounded-xl'>
                <div className='w-full md:h-52 h-32 overflow-hidden rounded-xl'>
                  <Image
                    src='https://source.unsplash.com/500x504?tech'
                    alt='Picture of the author'
                    width='1000'
                    height='1000'
                  />
                </div>
                <h3 className='mt-3 font-bold'>
                  Berkarir Sebagai Seorang Canva Designer Pemula
                </h3>
                <p className='mt-2'>Rp. 80,000</p>
                <div className='mt-3 flex justify-between items-center flex-wrap'>
                  <div className='flex items-center md:text-base text-sm'>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span class='material-symbols-outlined bintang'>star</span>
                    <span className='mt-1 ml-2'>(123)</span>
                  </div>
                  <div>
                    <span class='material-symbols-outlined mt-2 centang'>
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-7'>
          <div className='px-4 md:px-20 md:flex md:bg-[#181230] items-center py-10'>
            <div>
              <div className='w-16 h-16 overflow-hidden rounded-full'>
                <Image
                  src='https://source.unsplash.com/500x500?unlock'
                  alt='Picture of the author'
                  width='1000'
                  height='1000'
                />
              </div>
              <p className='mt-5 font-semibold text-emerald-500'>
                Unlock Better Version
              </p>
              <h2 className='font-bold text-2xl mt-1 md:w-full md:text-white'>
                Mulai Membangun Karir Impianmu Bersama Kami
              </h2>
              <p className='mt-3 text-slate-400 md:w-3/4'>
                Komunitas yang dibentuk untuk saling membantu dalam mencapai
                karir impian kita.
              </p>
              <div className='flex space-x-3   mt-5'>
                <div className='w-1/2 md:w-1/3 bg-sky-500 rounded-full text-center py-2 text-white font-bold text-sm'>
                  Katalog Kelas
                </div>
                <div className='w-1/2 md:w-1/3 bg-slate-300 rounded-full text-center py-2 text-sm'>
                  Alur Belajar
                </div>
              </div>
            </div>
            <div>
              <div className='hidden md:flex space-x-4'>
                <a
                  href='#'
                  class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '
                >
                  <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                    Always Up to Date
                  </h5>
                  <p class='font-normal text-gray-700 dark:text-gray-400'>
                    Pelajarannya mudah dipahami untuk menggunakan teknologi
                    pendukung yang baru.
                  </p>
                </a>
                <a
                  href='#'
                  class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '
                >
                  <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                    Hemat Waktu
                  </h5>
                  <p class='font-normal text-gray-700 dark:text-gray-400'>
                    Terima kasih telah membuat materi kelas yang singkat, padat,
                    dan jelas,
                  </p>
                </a>
                <a
                  href='#'
                  class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '
                >
                  <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                    Discover and Learn
                  </h5>
                  <p class='font-normal text-gray-700 dark:text-gray-400'>
                    Banyak ilmu baru yang dipelajari untuk mendukung ketika
                    bekerja di sebuah perusahaan
                  </p>
                </a>
              </div>
              <div className='hidden md:flex space-x-4 mt-4'>
                <a
                  href='#'
                  class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '
                >
                  <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                    Discover and Learn
                  </h5>
                  <p class='font-normal text-gray-700 dark:text-gray-400'>
                    Banyak ilmu baru yang dipelajari untuk mendukung ketika
                    bekerja di sebuah perusahaan
                  </p>
                </a>
                <a
                  href='#'
                  class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '
                >
                  <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                    Always Up to Date
                  </h5>
                  <p class='font-normal text-gray-700 dark:text-gray-400'>
                    Pelajarannya mudah dipahami untuk menggunakan teknologi
                    pendukung yang baru.
                  </p>
                </a>
                <a
                  href='#'
                  class='block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 '
                >
                  <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                    Hemat Waktu
                  </h5>
                  <p class='font-normal text-gray-700 dark:text-gray-400'>
                    Terima kasih telah membuat materi kelas yang singkat, padat,
                    dan jelas,
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='py-7'>
          <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='w-20 h-20 overflow-hidden rounded-full'>
              <Image
                src='https://source.unsplash.com/500x520?tech'
                alt='Picture of the author'
                width='1000'
                height='1000'
              />
            </div>
            <h2 className=' font-bold text-2xl mt-6 md:text-3xl md:w-1/3 text-center'>
              Ready to Build Your Future?
            </h2>
            <p className='mt-4 md:w-1/4 w-3/4 text-center'>
              Belajar langsung dari mentor berpengalaman di bidangnya tanpa
              batas waktu
            </p>
            <div className='px-7 mt-4 bg-sky-500 rounded-full text-center py-3 text-white font-bold text-base'>
              Daftar
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-slate-100'>
        <div className='md:px-20 px-4 pt-7 pb-12'>
          <div className='flex flex-wrap'>
            <div className='md:w-2/6 w-1/2'>
              <span className='font-bold text-xl'>Canva</span>
              <p className='mt-4 md:w-3/4 w-4/5'>
                Belajar langsung dari mentor berpengalaman di bidangnya tanpa
                batas waktu
              </p>
            </div>
            <div className='md:w-1/6 w-1/2'>
              <span className='font-bold text-lg'>Start Your Career</span>
              <ul className='mt-4 flex flex-col space-y-3'>
                <li>3D</li>
                <li>Design Character</li>
                <li>Render</li>
                <li>Illustration</li>
              </ul>
            </div>
            <div className='md:w-1/6 w-1/2 md:mt-0 mt-5'>
              <span className='font-bold text-lg'>Community</span>
              <ul className='mt-4 flex flex-col space-y-3'>
                <li>Showcase</li>
                <li>Testimonials</li>
                <li>Mentor</li>
                <li>Webinar</li>
              </ul>
            </div>
            <div className='md:w-1/6 w-1/2 md:mt-0 mt-5'>
              <span className='font-bold text-lg'>Products</span>
              <ul className='mt-4 flex flex-col space-y-3'>
                <li>Tips</li>
                <li>Online Course</li>
                <li>Design Resources</li>
                <li>Dashboard Kit</li>
              </ul>
            </div>
            <div className='w-1/6 md:mt-0 mt-5'>
              <span className='font-bold text-lg'>Office</span>
              <ul className='mt-4 flex flex-col space-y-3'>
                <li>Jakarta, Indonesia</li>
                <li>091231872398</li>
                <li>PT Design Resources</li>
                <li>@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
