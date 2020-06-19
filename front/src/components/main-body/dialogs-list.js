import React, { Component } from 'react';
import axios from 'axios';

import './messenger.css';
import DialogsListItem from './dialogs-list-item';

export default class DialogsList extends Component {
    state = {
        term: '',
        dialogs: [],
    }

    getDialogs(term) {
        if (term !== this.state.term) {
            axios.get(`/api/dialogs?search=${term}`)
                .then(response => {
                    this.setState({ dialogs: response.data, term });
                })
                .catch(error => {
                    console.log("search error", error);
                });
        }
    }

    componentDidUpdate() {
        const { term } = this.props;
        this.getDialogs(term)
    }

    componentDidMount() {
        this.getDialogs(this.state.te)
    }

    render() {
        const elements = this.state.dialogs
            .map((dialog) => {
                return (
                    <li key={dialog.id} >
                        <DialogsListItem dialog={dialog} />
                    </li>
                )
            })
        return <ul>{elements}</ul>;
    }
}