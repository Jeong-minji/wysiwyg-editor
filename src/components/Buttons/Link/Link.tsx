import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCurrentEditor } from '@tiptap/react'
import { Link as LinkIcon } from 'lucide-react'
import { useState } from 'react'

const Link = () => {
  const [link, setLink] = useState('')
  const [linkVisible, setLinkVisible] = useState(false)

  const { editor } = useCurrentEditor()

  return (
    <>
      <Button variant='ghost' onClick={() => setLinkVisible((prev) => !prev)}>
        <LinkIcon />
      </Button>

      {linkVisible && (
        <>
          <Input
            className='w-48'
            placeholder='https://'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Button
            disabled={!link}
            onClick={() => {
              editor.commands.toggleLink({ href: link })
              setLink('')
              setLinkVisible(false)
            }}
          >
            적용
          </Button>
        </>
      )}
    </>
  )
}

export default Link
