import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [ // передаем данные кнопок
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => { // динамически создаем кнопки
        const active = props.filter === name; // если name === filter тогда active == true
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`} //динамически подсвечиваем активную кнопку
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;