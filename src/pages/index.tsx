import Image from 'next/image';
import { Inter } from 'next/font/google';
import { welcomeText } from '@/utils/static';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          {welcomeText.value} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get started by
          editing
        </p>
      </div>
      <div className='flex flex-row justify-center items-center gap-4 w-2/4 '>
        <button
          className='px-6 py-3 bg-yellow-500 '
          type='button'
          onClick={() => {
            welcomeText.value = 'The Text Changed';
            console.log('index.tsx:22 ~ Home ~ value:', welcomeText.value);
          }}
        >
          Decrement
        </button>
        <button
          className='px-6 py-3 bg-green-500 '
          type='button'
          onClick={() => {
            welcomeText.value = 'Again!';
            console.log('index.tsx:32 ~ Home ~ value:', welcomeText.value);
          }}
        >
          Increment
        </button>
      </div>
    </main>
  );
}

