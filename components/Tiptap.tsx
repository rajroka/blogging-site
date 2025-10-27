'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './Menubar'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    editorProps : {
      attributes: {
        class: 'prose prose-sm bg-gray-300 sm:prose lg:prose-lg mx-auto  xl:prose-2xl max-w-4xl  m-5 focus:outline-none',
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  return (
  <div>

    <Menubar   editor={editor} />
    <EditorContent editor={editor} />

  
    
     
     
      </div> )
    
  
}

export default Tiptap