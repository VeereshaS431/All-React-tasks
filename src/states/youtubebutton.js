const { Component } = require("react");

class CustomButton extends Component{

    state={
        isSubcribe:false,
        text1:"subscribe",
        text2:"subscribed"
    }

    Change=()=>{
        console.log("clicked")
       
        this.setState(
            {
                isSubcribe: !this.state.isSubcribe
            }
        )
        
    }

    
    render(){
        return(
            <>
            <button onClick={this.Change}>{this.state.isSubcribe ? this.state.text2 : this.state.text1}</button>
            </>
        )
    }
}

export default CustomButton