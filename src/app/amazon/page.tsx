import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page: NextPage = () => {
  return (
    <div className='page-container'>
      <div className="flex w-full min-h-screen flex-col items-center justify-between">
        <header className='bg-gray-900 w-full h-20 items-center justify-center'>
          <nav className='flex h-20 items-center px-4 shadow-md'>
            <Link href="/" className='text-lg font-bold'>
              <Image src='/amazon.svg' alt='Logo Amazon' width={150} height={40} className='w-24' />
            </Link>
            <form className='mx-auto hidden w-full justify-center md:flex'>
              <input type='text' className='w-1/2 tr-none rounded-br-none h-10 px-4 rounded-l-md border-0 outline-none' placeholder='Pesquisar Produto'/>
              <button className='bg-yellow-400 h-10 px-4 rounded-r-md border-0 outline-none'>Pesquisar</button>
            </form>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Page