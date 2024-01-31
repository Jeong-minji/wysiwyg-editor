import Editor from './components/Editor'

const App = () => {
  return (
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
  )
}

export default App
