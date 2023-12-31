import './employees-list-item.css';

const EmployeesListItem = (props) => {

    
    const { name, salary, onDelete, onToggleProp, onChangeValue, increase, rise} = props

    
    return (
        <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : ''} ${rise ? 'like' : ''}`}>
            <span onClick={onToggleProp} 
                data-toggle='rise' 
                className="list-group-item-label">{name}</span>
            <input type="text" 
                className="list-group-item-input"
                defaultValue={salary + '$'}
                onChange={(e) => onChangeValue(parseInt(e.target.value.replace('$', '')))}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;