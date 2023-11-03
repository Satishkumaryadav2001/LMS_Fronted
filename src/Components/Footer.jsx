import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'


const currentDate=new Date();
const year=currentDate.getFullYear();
function Footer() {
    return(
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                      <section className='text-lg'>
                             Copyright {year} | All right reserverd
                      </section>
                      <section className='flex item-center justify-ceter gap-5 text-2-xl text-white'>
                      <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                      <BsFacebook/>
                      </a>

                      </section>
                      <section className='flex item-center justify-ceter gap-5 text-2-xl text-white'>
                      <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                       <BsInstagram/>
                      </a>

                      </section>
                      <section className='flex item-center justify-ceter gap-5 text-2-xl text-white'>
                      <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                      <BsLinkedin/>
                      </a>

                      </section>
                      <section className='flex item-center justify-ceter gap-5 text-2-xl text-white'>
                      <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                      <BsTwitter/>
                      </a>

                      </section>
            </footer>
        </>
    )
}

export default Footer;