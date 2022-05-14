import React from "react";

export default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));

// Or... if you're using a class-based React component
class Panel extends React.Component {
    public render() {
        return <div ref={this.props.elRef}>{ index + 1 }</div>;
    }
}

export default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);