import React, { Component, useEffect, useRef } from "react"
import CodeMirror from "codemirror"
import logo from "./logo.svg"
import "./App.css"

interface EditorRef {
  current?: CodeMirror.Editor
}

class App extends Component {
  editor: ?HTMLDivElement

  componentDidMount() {
    const editor = document.querySelector("#editor")

    const codeMirror: CodeMirror.Editor = CodeMirror(document.body, {
      value: "function myScript(){return 100;}\n",
      mode: "javascript",
      theme: 'oceanic',
      keyMap: 'sublime',
      // indentUnit: 2,
      // foldGutter: true,
      // gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      lineNumbers: true,
      lineWrapping: false,
    })


  }

  render() {
    return <div ref={el => this.editor} />
  }
}

// function App () {
//   let codeMirror: EditorRef  = useRef(null)

//   useEffect(() => {
//     codeMirror = CodeMirror(document.body, {
//       value: "function myScript(){return 100;}\n",
//       mode:  "javascript"
//     });
//   }, [])

//   return <div>

//   </div>
// }

export default App
