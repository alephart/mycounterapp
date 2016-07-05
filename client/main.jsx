import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
        this.tick = this.tick.bind(this);
    }

    tick() {
       this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
              <h1>Welcome to Meteor!</h1>
              <button onClick={this.tick}>Click Me</button>
              <p>You've pressed the button {this.state.count} times.</p>
            </div>
        );
    }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
Meteor.startup(() => {
    render(<Counter />, document.getElementById('hello'));
});
