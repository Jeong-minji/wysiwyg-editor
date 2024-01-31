import { useCurrentEditor } from '@tiptap/react'

import { ReactNode } from 'react'
import './style.css'

interface MenuProps {
  children: ReactNode
}

const Menu = ({ children }: MenuProps) => {
  const { editor } = useCurrentEditor()

  if (!editor) return null

  return (
    <div className='flex flex-wrap align-middle w-full border-b border-zinc-400'>
      {children}
    </div>
  )
}

export default Menu
