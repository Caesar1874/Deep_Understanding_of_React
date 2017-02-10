import React, {Component} from "react"

class Input extends Component {
     constructor(props) {
         super(props);

         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleTextareaChange = this.handleTextareaChange.bind(this);

         this.state = {
             inputValue: "",
             textareaValue: ""
         }
     }

     handleInputChange(e) {
         console.log("input change")
         this.setState({
             inputValue: e.target.value
         });
     }

     handleTextareaChange(e) {
         this.setState({
             textareaValue: e.target.value
         });
     }

     render() {
         const {inputValue, textareaValue} = this.state;
         return (
             <div>
                 <p>
                     单行输入框：
                     <input type="text" name="" id=""  value={inputValue} onChange={this.handleInputChange} />
                 </p>
                 <p>
                     多行输入框：
                     <textarea name="" id="" cols="30" rows="10" value={textareaValue} onChange={this.handleTextareaChange} />
                 </p>
             </div>
         )
     }
}

export {Input};