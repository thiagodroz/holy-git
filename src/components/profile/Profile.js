import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return (
            <div>
                Profile here!
                { this.props.match.params.profileName }
            </div>
        );
    }
}