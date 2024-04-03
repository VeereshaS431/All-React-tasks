import { Component } from "react";


class CounterButton extends Component{

    state={
        count:0
    }

increment=()=>{
    this.setState({
        count:this.state.count+1
    })
}

decrement=()=>{
    if(this.state.count>0){
    this.setState({
        count:this.state.count-1
    })
}
}

reset=()=>{
    this.setState({
        count:0
    })
}
    


    render(){
        return(
<>
<h1>{this.state.count}</h1>
<button onClick={this.increment}>increment</button>
<button onClick={this.decrement}>decrement</button>
<button onClick={this.reset}>reset</button>
</>
        )
    }
}


export default CounterButton