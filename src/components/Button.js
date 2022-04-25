import React from 'react';

class Button extends React.Component{
    render(){
        return(
          <button style={this.props.Style}>{this.props.txt}</button>
        );
    }

}
export default Button;