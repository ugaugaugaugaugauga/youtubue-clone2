'use client'
import { ActionTooltip } from '@/components/action-tooltip'
import { ArrowLeft, Mic, Search } from 'lucide-react'
import { useState } from 'react'
import SearchBar from '@/components/nav/search-bar'

const MobileSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex sm:hidden flex-1 justify-end'>
      {isOpen && (
        <div className='absolute inset-0 w-full h-14 flex items-center  bg-white px-1'>
          <button
            onClick={() => setIsOpen(false)}
            className='p-3 hover:bg-zinc-300 rounded-full'
          >
            <ArrowLeft />
          </button>
          <SearchBar />
        </div>
      )}
      <div className='flex justify-end items-center text-neutral-700'>
        <ActionTooltip label='검색'>
          <button
            onClick={() => setIsOpen(true)}
            className='hover:bg-zinc-200 p-2 rounded-full'
          >
            <Search className='h-5 w-5' />
          </button>
        </ActionTooltip>
        <ActionTooltip label='음성으로 검색'>
          <button className='hover:bg-zinc-200 p-2 rounded-full'>
            <Mic className='h-5 w-5' />
          </button>
        </ActionTooltip>
      </div>
    </div>
  )
}

export default MobileSearchBar
