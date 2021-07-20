import React from 'react';

class CounterTwo extends React.Component {
    state = {
        count: 0, //start value
        valueIncrement: 2,
    };

    updateCount = () => {
        const { count, valueIncrement } = this.state//destructurization of the state
        this.setState({ count: count + valueIncrement},
            //второй аргумент выполняется асинхронно
            // то есть до обновления state 
            console.log(this.state));
    };

    render() {
        return (
            <div>
                <span className="counter">{this.state.count}</span>
                <button className="counter-button" onClick={this.updateCount}>Click + {this.state.valueIncrement}</button>
            </div>
        )
    }
}

export default CounterTwo