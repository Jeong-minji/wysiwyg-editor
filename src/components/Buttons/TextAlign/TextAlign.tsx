import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { AlignLeft, AlignJustify, AlignRight } from 'lucide-react'

const TextAlign = () => {
  const { editor } = useCurrentEditor()

  return (
    <>
      <Button
        variant='ghost'
        onClick={() => editor.commands.setTextAlign('left')}
      >
        <AlignLeft />
      </Button>
      <Button
        variant='ghost'
        onClick={() => editor.commands.setTextAlign('center')}
      >
        <AlignJustify />
      </Button>
      <Button
        variant='ghost'
        onClick={() => editor.commands.setTextAlign('right')}
      >
        <AlignRight />
      </Button>
    </>
  )
}

export default TextAlign
