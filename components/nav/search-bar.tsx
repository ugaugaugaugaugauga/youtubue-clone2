'use client'

import { ActionTooltip } from '@/components/action-tooltip'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Keyboard, Mic, Search } from 'lucide-react'
import { useState } from 'react'

const SearchBar = () => {
  const [focus, setFocus] = useState(false)

  return (
    <div className='flex flex-1 max-w-[640px] justify-center items-center ml-4 mr-4 sm:ml-12 sm:mr-20'>
      <div className='flex-1 flex relative'>
        {focus && (
          <div className='absolute top-3 left-5'>
            <Search className='h-4 w-4 text-neutral-600' />
          </div>
        )}
        <div className={cn('mr-8', focus && 'mr-0')} />
        <div
          className={cn(
            'flex-1 flex items-center border border-neutral-400 rounded-l-full p-1 h-10 relative',
            focus && 'border-blue-600 ',
          )}
        >
          <Input
            onFocus={() => {
              setFocus(true)
            }}
            onBlur={() => {
              setFocus(false)
            }}
            className={cn('border-none h-6 mr-5', focus && 'ml-8')}
            placeholder='검색'
          />
          <button className='absolute top-2 right-2'>
            <Keyboard className='h-6 w-6 text-neutral-400 hover:text-neutral-700' />
          </button>
        </div>
        <ActionTooltip label='검색'>
          <button className='flex items-center px-5 border-y border-r rounded-r-full border-neutral-400 hover:bg-gray-200'>
            <Search className='h-5 w-5 text-neutral-600' />
          </button>
        </ActionTooltip>
      </div>
      <ActionTooltip label='음성으로 검색'>
        <button className='p-2 ml-4 bg-zinc-200 bg-opacity-80 rounded-full hover:bg-zinc-300'>
          <Mic className='h-6 w-6 ' />
        </button>
      </ActionTooltip>
    </div>
  )
}

export default SearchBar
