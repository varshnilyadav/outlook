import React, { useState } from 'react';
import { useMailStore } from '../store/useMailStore';

export const SignIn: React.FC = () => {
  const { login } = useMailStore();
  const [step, setStep] = useState<'email' | 'password'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'email' && email) {
      setStep('password');
    } else if (step === 'password' && password) {
      login();
    }
  };

  return (
    <div className="flex-1 bg-white sm:bg-gray-50 flex flex-col items-center justify-start sm:justify-center p-6 pt-16 sm:pt-6 h-full">
      <div className="w-full max-w-[400px] sm:bg-white sm:p-10 sm:shadow-lg sm:border sm:border-gray-200">
        <div className="flex items-center gap-2 mb-8">
          <svg className="w-8 h-8" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
            <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
            <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
            <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
          </svg>
          <span className="font-semibold text-xl text-gray-700">Microsoft</span>
        </div>

        {step === 'email' ? (
          <div className="animate-in fade-in duration-300">
            <h1 className="text-2xl font-semibold text-[#1B1B1B] mb-4">Sign in</h1>
            <p className="text-[15px] text-[#1B1B1B] mb-2 font-medium">to continue to Outlook</p>
            <form onSubmit={handleNext} className="mt-4">
              <input 
                type="email" 
                placeholder="Email, phone, or Skype"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border-b border-black outline-none pb-2 text-[15px] text-[#1B1B1B] mb-4 focus:border-b-2 focus:border-[#0067b8]"
                autoFocus
              />
              <p className="text-[13px] text-[#0067b8] mb-8 hover:underline cursor-pointer">
                No account? Create one!
              </p>
              <div className="flex justify-end">
                <button 
                  type="submit"
                  disabled={!email}
                  className="bg-[#0067b8] hover:bg-[#005da6] text-white px-10 py-1.5 font-medium disabled:opacity-50 transition-colors"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <div className="flex items-center gap-2 mb-4">
              <button 
                onClick={() => setStep('email')}
                className="text-[#1B1B1B] hover:bg-gray-100 p-1 rounded-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>
                </svg>
              </button>
              <span className="text-[15px] font-medium">{email}</span>
            </div>
            <h1 className="text-2xl font-semibold text-[#1B1B1B] mb-4">Enter password</h1>
            <form onSubmit={handleNext} className="mt-4">
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border-b border-black outline-none pb-2 text-[15px] text-[#1B1B1B] mb-4 focus:border-b-2 focus:border-[#0067b8]"
                autoFocus
              />
              <p className="text-[13px] text-[#0067b8] mb-8 hover:underline cursor-pointer">
                Forgot password?
              </p>
              <div className="flex justify-end">
                <button 
                  type="submit"
                  disabled={!password}
                  className="bg-[#0067b8] hover:bg-[#005da6] text-white px-8 py-1.5 font-medium disabled:opacity-50 transition-colors"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
