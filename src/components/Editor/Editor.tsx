import { EditorProvider } from '@tiptap/react'
import Starterkit from '@tiptap/starter-kit'
import Color from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import Youtube from '@tiptap/extension-youtube'

import Menu from '../Menu'
import HeadingBtn from '../Buttons/Heading'
import BoldBtn from '../Buttons/Bold'
import ItalicBtn from '../Buttons/Italic'
import UnderlineBtn from '../Buttons/Underline'
import BulletListBtn from '../Buttons/BulletList'
import OrderedListBtn from '../Buttons/OrderedList'
import TextAlignBtn from '../Buttons/TextAlign'
import TextColorBtn from '../Buttons/TextColor'
import LinkBtn from '../Buttons/Link'
import ImageBtn from '../Buttons/Image'
import YoutubeBtn from '../Buttons/Youtube'
import { ReactNode } from 'react'

interface EditorProps {
  children: ReactNode
}

const Editor = Object.assign(
  ({ children }: EditorProps) => {
    const extensions = [
      Starterkit.configure({
        heading: {
          levels: [1, 2, 3, 4]
        }
      }),
      Underline,
      Link,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'image'],
        alignments: ['left', 'center', 'right']
      }),
      Image.configure({
        inline: true,
        allowBase64: true
      }),
      Youtube.configure({
        width: 480,
        nocookie: true,
        allowFullscreen: true,
        autoplay: true
      }),
      TextStyle,
      Color
    ]

    return (
      <div className='w-6/12 border border-zinc-400'>
        <EditorProvider
          extensions={extensions}
          slotBefore={<Menu>{children}</Menu>}
        >
          <></>
        </EditorProvider>
      </div>
    )
  },
  {
    Menu,
    Heading: HeadingBtn,
    Bold: BoldBtn,
    Italic: ItalicBtn,
    Underline: UnderlineBtn,
    BulletList: BulletListBtn,
    OrderedList: OrderedListBtn,
    TextAlign: TextAlignBtn,
    TextColor: TextColorBtn,
    Link: LinkBtn,
    Image: ImageBtn,
    Youtube: YoutubeBtn
  }
)

export default Editor
