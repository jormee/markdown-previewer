import React from 'react';
import marked from 'marked';

import placeholder from './placeholder';

import './App.css';

marked.setOptions({
  breaks: true,
});


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state =  {
      markdown: placeholder,
      largeEditor: false,
      largePreview: false
    }
    this.inputChange = this.inputChange.bind(this);
    this.maximiseEditor = this.maximiseEditor.bind(this);
    this.maximisePreview = this.maximisePreview.bind(this);
  }
  inputChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }
  maximiseEditor() {
    this.setState({
      largeEditor: !this.state.largeEditor
    });
  }
  maximisePreview() {
    this.setState({
      largePreview: !this.state.largePreview
    });
  }
  render() {
    return (
      <div id="main">
        <h2>Welcome to view</h2>
        <p>This is a markdown preview app which allows you to input markdown texts in the editor (left panel) and get a live preview in the previewer (right panel)</p>
        <div className = "container">
          <Editor id = "md" markdown={this.state.markdown} 
            onChange={this.inputChange} />

          <Preview  id="human" markdown={this.state.markdown}/>
        </div>
        <p className = "footer">Created by Folajomi Shotunde &copy;2019</p>
      </div>
    )
  }
};

const Editor = (props) => {
  return (
    <textarea id="editor"
      value={props.markdown}
      onChange={props.onChange}
      type="text"/>
    )
}

const Preview = (props) => {
  return (
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
    )
}

export default App;