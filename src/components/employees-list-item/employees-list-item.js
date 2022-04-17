import './employees-list-item.css';
import {Component} from "react";

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        const {increase, like} = this.props;
        this.state = {
            increase: increase,
            like: like
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }));
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render() {
        const {name, salary} = this.props;
        const {increase, like} = this.state;
        let classNamesListItem = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNamesListItem += ' increase';
        }

        if (like) {
            classNamesListItem += ' like';
        }

        return (
            <li className={classNamesListItem}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm " onClick={this.onIncrease}>
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
