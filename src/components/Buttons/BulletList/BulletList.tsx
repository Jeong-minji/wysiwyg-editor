import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { List } from 'lucide-react'

const BulletList = () => {
  const { editor } = useCurrentEditor()

  return (
    <Button
      variant='ghost'
      onClick={() => editor.chain().focus().toggleBulletList().run()}
    >
      <List />
    </Button>
  )
}

export default BulletList
