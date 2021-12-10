import React, { Component } from "react";
import PropTypes from 'prop-types';

class ContactUs extends Component {
    static propTypes = {
        address: PropTypes.string.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            enter: props.enter,
        };
    }
    getAddress = () => {
        this.setState((prevState, props) => ({
            enter: `City: ${props.address}`,
        }));
    };
    render() {
        const { enter } = this.state;
        const { address } = this.props;
        console.log('render');
        return (
            <div>
                <h1>{enter}</h1>
                <button type="button" onClick={this.getAddress}>
                    Enter Users Address
                </button>
            </div>
        );
    }
}
export default ContactUs;
