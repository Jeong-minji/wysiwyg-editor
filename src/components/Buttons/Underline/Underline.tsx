import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'

const Underline = () => {
  const { editor } = useCurrentEditor()

  return (
    <Button onClick={() => editor.chain().focus().toggleUnderline().run()}>
      Underline
    </Button>
  )
}

export default Underline
