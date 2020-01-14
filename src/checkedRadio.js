import React from 'react';

class Radio extends React.Component{
    render(){
        console.log(this.props.isChecked);
        return(
        <div>
            <input type="radio" onChange={this.props.handleChange} value={this.props.sort} checked={this.props.isChecked}/>
            {this.props.sort}
        </div>
        )
    }
}

export default Radio;
