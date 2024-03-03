import { Button } from '@/components/ui/button'
import { CircleUserRound } from 'lucide-react'

const UserMenu = () => {
  return (
    <Button
      variant={'ghost'}
      className='ml-4 border rounded-full px-3 py-1 hover:bg-blue-100'
    >
      <div className='flex items-center gap-x-1 text-blue-500'>
        <CircleUserRound className='h-6 w-6' />
        <span>로그인</span>
      </div>
    </Button>
  )
}

export default UserMenu
