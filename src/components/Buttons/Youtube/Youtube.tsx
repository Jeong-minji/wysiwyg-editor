import { Button } from '@/components/ui/button'
import { useCurrentEditor } from '@tiptap/react'
import { Youtube as YoutubeIcon } from 'lucide-react'

const Youtube = () => {
  const { editor } = useCurrentEditor()

  return (
    <Button
      variant='ghost'
      onClick={() =>
        editor.commands.setYoutubeVideo({
          src: 'https://www.youtube.com/watch?v=l_bCTNRU8s0'
        })
      }
    >
      <YoutubeIcon />
    </Button>
  )
}

export default Youtube
