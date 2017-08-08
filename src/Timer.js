import React from 'react';
import './index.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div className="timer">{this.state.date.toLocaleTimeString('en-GB')}</div>
        );
    }
}

export { Timer }