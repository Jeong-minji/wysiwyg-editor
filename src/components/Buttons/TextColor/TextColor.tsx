import { useCurrentEditor } from '@tiptap/react'
import { ChangeEvent, useMemo } from 'react'

const TextColor = () => {
  const { editor } = useCurrentEditor()

  const handleColorInput = (e: ChangeEvent<HTMLInputElement>) => {
    editor.chain().focus().setColor(e.target.value).run()
  }

  const colorValue = useMemo(
    () => editor?.getAttributes('textStyle').color,
    [editor]
  )

  return (
    <div className='flex'>
      <input
        className='flex self-center w-6'
        type='color'
        value={colorValue}
        onInput={handleColorInput}
      />
    </div>
  )
}

export default TextColor
