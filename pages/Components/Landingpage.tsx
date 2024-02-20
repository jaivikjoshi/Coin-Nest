"use client"
import Spline from '@splinetool/react-spline';
import Link from "next/link"

const Landingpage = () => {
    return (
        <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
            <Navbar/>
            <header id = "/" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
                <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-black md:text-6xl font-mono'>Your Gateway Into the World of Crypto</h2>
                    </div>
                    <p className='max-w-md text-sm md:text-base text-zinc-500 font-mono'>Stay up-to-date with real-time updates and get the lowdown on all your favorite digital currencies. From tracking price fluctuations to exploring historical data, CoinNest has got you covered.</p>
                    <div className='w-full flex items-center justify-center md:justify-start gap-4'>
                        <Link href="/SignUp">
                            <button className="contactButton">
                                Get Started
                                <div className="iconButton">
                                    <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
                    <Spline className='w-full flex scale-[0.75] sm:scale-[0.55] lg:scale-[0.85] items-center justify-center lg:justify-start' scene='https://prod.spline.design/pJPvZP-XaViWEBz9/scene.splinecode' />
                </div>
            </header>
        </main>
    )
}

const Navbar = () => {
    return (
        <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 flex items-center justify-center mt-5">
            <div className="max-w-7xl w-full flex items-center justify-between p-4 font-mono text-xl lg:flex">
                <h4 className="max-w-7xl w-full flex items-center justify-between p-4 "><Link href="/">CoinNest</Link></h4>
                <ul className="flex gap-8">
                    <li><button className="button type1"><Link href="/SignIn" className=" transition-colors text-xs sm:text-base">Sign in</Link></button></li>
                </ul>
            </div>

        </div>
    )

}


export default Landingpage