import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            amount: ''
        }
    }

    onFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitForm = (evt) => {
        evt.preventDefault();
        this.setState({
            name: '',
            amount: ''
        })
    }

    render() {
        const {name, amount} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex" onSubmit={this.onSubmitForm}>
                    <input type="text"
                           className="form-control new-post-label"
                           name='name'
                           value={name}
                           placeholder="Как его зовут?" onChange={this.onFormChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           name='amount'
                           value={amount}
                           placeholder="З/П в $?" onChange={this.onFormChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
