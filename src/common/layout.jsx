import React from "react";

class HelloMessage extends React.Component {
    render() {
        return (<div> to {this.props.name}</div>);
    }
}

export default HelloMessage;
