import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { Bold as BoldIcon } from 'lucide-react'

const Bold = () => {
  const { editor } = useCurrentEditor()

  return (
    <Button
      className='w-12'
      variant='ghost'
      onClick={() => editor.chain().focus().toggleBold().run()}
    >
      <BoldIcon />
    </Button>
  )
}

export default Bold
