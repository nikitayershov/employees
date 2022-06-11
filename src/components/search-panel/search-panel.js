import { Component } from 'react'

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { // дублируем состояние как в App
            term: ''
        }
    }

    onUpdateSearch = (e) => { // обновление состояния term
        const term = e.target.value;
        this.setState({term: term}); // локально
        this.props.onUpdateSearch(term) // передаем в onUpdateSearch в App
    }

    render () {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }

}

export default SearchPanel;