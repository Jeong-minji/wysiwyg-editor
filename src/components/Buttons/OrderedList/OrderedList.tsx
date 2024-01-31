import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { ListOrdered } from 'lucide-react'

const OrderedList = () => {
  const { editor } = useCurrentEditor()

  return (
    <Button
      variant='ghost'
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
    >
      <ListOrdered />
    </Button>
  )
}

export default OrderedList
