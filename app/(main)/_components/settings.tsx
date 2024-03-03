import { ActionTooltip } from '@/components/action-tooltip'
import { Button } from '@/components/ui/button'
import { MoreVertical } from 'lucide-react'

const Settings = () => {
  return (
    <ActionTooltip label='설정' side='bottom'>
      <Button variant={'ghost'} className='rounded-full p-4'>
        <MoreVertical className='h-4 w-4' />
      </Button>
    </ActionTooltip>
  )
}

export default Settings
