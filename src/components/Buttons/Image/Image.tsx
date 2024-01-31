import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'

const Image = () => {
  const [img, setImg] = useState(null)

  const { editor } = useCurrentEditor()

  return (
    <Button
      variant='ghost'
      disabled={!img}
      onClick={() => {
        editor.commands.setImage({
          src: img
        })
        setImg(null)
      }}
    >
      <ImageIcon />
    </Button>
  )
}

export default Image
