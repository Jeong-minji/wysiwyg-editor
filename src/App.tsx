import Editor from './components/Editor'

const App = () => {
  return (
    <div className='h-screen flex justify-center align-middle p-4'>
      <Editor>
        <Editor.Heading />
        <Editor.Bold />
        <Editor.Italic />
        <Editor.BulletList />
        <Editor.OrderedList />
        <Editor.TextAlign />
        <Editor.TextColor />
        <Editor.Link />
        <Editor.Image />
        <Editor.Youtube />
      </Editor>
    </div>
  )
}

export default App
