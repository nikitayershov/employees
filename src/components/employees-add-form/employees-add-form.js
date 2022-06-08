import {Component} from "react";

import './employees-add-form.css'

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ''
        }
    }

    onValueChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value // позволяет динамически изменять поля для state (key нужно записывать в [])
       })
    }

    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name" // должно соответствовать ключам state. И
                           value={name} // если value стоит в том ключе что мы здесь используем state, то в value з
                            // аписывается актуальное значение компонента, то есть значение value формы инпута будет
                            // контроироваться React-ом и элемент будет называться управляемым компонентом ( в данном
                            // случае управяемый элемент
                            // получается двойное связывание: то что иы вводим в input контролируется при помощи state
                            // который записывается в компонент
                           onChange={this.onValueChange}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
