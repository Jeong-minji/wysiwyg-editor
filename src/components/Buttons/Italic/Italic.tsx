import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { Italic as ItalicIcon } from 'lucide-react'

const Italic = () => {
  const { editor } = useCurrentEditor()

  return (
    <Button
      variant='ghost'
      onClick={() => editor.chain().focus().toggleItalic().run()}
    >
      <ItalicIcon />
    </Button>
  )
}

export default Italic
