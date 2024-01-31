import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { Heading1, Heading2, Heading3 } from 'lucide-react'

const Heading = () => {
  const { editor } = useCurrentEditor()

  return (
    <>
      <Button
        variant='ghost'
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1 />
      </Button>
      <Button
        variant='ghost'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 />
      </Button>
      <Button
        variant='ghost'
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading3 />
      </Button>
    </>
  )
}

export default Heading
