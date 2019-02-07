import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            query: ''
        };

    }

    saveQuery( event ) {
        this.setState({
            query: event.target.value
        });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.props.history.push('/search/' + this.state.query);
        }
    }

    render() {

        return (

            <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="text" value={this.state.query} onChange={this.saveQuery.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} placeholder="Search" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                    </span>
                </p>
            </div>

        )

    }


}

export default withRouter(SearchBar)
