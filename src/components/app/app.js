import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: true, rise:true, id: 1},
                {name: "Alex M.", salary: 3000, increase: false, rise:false, id: 2},
                {name: "Carl W.", salary: 15000, increase: true, rise:false, id: 3}
            ],
            term: '',
            filter:'all',
            maxId: 4
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id) // возвращает новый массив без элемента с указанным id
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {name: name, salary: salary, increase: false, rise:false, id: this.state.maxId} // создаем новый элемент

        this.setState(({data}) => {
            const newData = [...data, newItem] // добавляем его в существующий массив
            return {
                data: newData
            }
        })
        this.setState(state => ({
            maxId: state.maxId + 1 // увеличиваем счетчик id, чтобы не было повторений
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return{...item,  [prop]: !item[prop]} //изменяет и возвращает новый объект если id совпал
                }
                return item; // возвращает старый объект в ином случае
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) { // если поиск пустой – возвращает массив без изменений
            return items;
        }

        return items.filter(item => {
             return item.name.indexOf(term) > -1 //возвращает item, поиск нашел подстроку
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

   filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
   }

   onFilterSelect = (filter) => {
        this.setState({filter})
   }

    render() {
        const {data, term, filter} = this.state
        const employees = this.state.data.length; // общее число сотрудников
        const increased = this.state.data.filter(item => item.increase).length; // с премией
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // сначала фильтрация по поиску, потом по фильтру


        return (
            <div className='app'>
                <AppInfo employees={employees}
                         increased={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}


export default  App;