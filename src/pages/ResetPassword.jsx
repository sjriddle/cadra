import React from 'react';
import { Link } from 'react-router-dom';

import Illustration01 from '../images/hero-illustration.svg';
import Illustration02 from '../images/auth-illustration.svg';

function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link className="block" to="/" aria-label="Cruip">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-b">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#F472B6" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <radialGradient cx="50%" cy="89.845%" fx="50%" fy="89.845%" r="108.567%" gradientTransform="matrix(-.00915 -.82755 .99996 -.00757 -.394 1.319)" id="logo1-d">
                      <stop stopColor="#3B82F6" stopOpacity=".64" offset="0%" />
                      <stop stopColor="#D375C2" stopOpacity=".833" offset="50.358%" />
                      <stop stopColor="#FBCFE8" stopOpacity=".876" offset="100%" />
                    </radialGradient>
                    <path d="M12 32c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S0 8.373 0 15c0 4.418 4 10.085 12 17Z" id="logo1-a" />
                    <path d="M20 29c8-6.915 12-12.582 12-17 0-6.627-5.373-12-12-12S8 5.373 8 12c0 4.418 4 10.085 12 17Z" id="logo1-c" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="url(#logo1-b)" opacity=".64" transform="matrix(1 0 0 -1 0 35)" xlinkHref="#logo1-a" />
                    <use fill="url(#logo1-d)" opacity=".961" xlinkHref="#logo1-c" />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="relative grow flex">
        {/* Content */}
        <div className="w-full bg-gray-900">
          <div className="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">
            <div className="px-4 sm:px-6">
              <div className="w-full max-w-sm mx-auto">
                <div className="py-16 md:py-20">
                  <div className="mb-8">
                    <h1 className="h2 font-uncut-sans mb-4">Reset password</h1>
                    <p className="text-gray-400">Enter your email address. If an account exists, you’ll receive an email with a password reset link soon.</p>
                  </div>
                  {/* Form */}
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 font-medium mb-1" htmlFor="email">Email</label>
                        <input id="email" className="form-input py-2 w-full" type="email" required />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group">
                        Reset Password <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden lg:block shrink-0 w-1/3 overflow-hidden before:bg-gray-800 before:absolute before:inset-0 before:-z-10">
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <img src={Illustration01} className="max-w-none" width="2143" height="737" alt="Hero Illustration" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
            <img src={Illustration02} className="max-w-none" width="1440" height="880" alt="Auth Illustration" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResetPassword;