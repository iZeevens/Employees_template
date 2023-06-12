import { Component } from 'react';

// import './employees-add-form.css';
import './employees-add-form.css'

class EmployeesAddForm extends Component {
    state = {
        name: '',
        salary: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendInput = (e) => {
        e.preventDefault();
        
        const {name, salary} = this.state;

        if (name.length > 0 && salary.length > 0) {
            this.props.onAdd(name, salary);
        }

        this.setState({ name: '', salary: '' });
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.sendInput}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;