import "./app-filter.css";

const AppFilter = (props) => {

    const { filters, onFilterData } = props;


    const getButtonClass = (isActive) => {
        return `btn ${isActive ? 'btn-light' : 'btn-outline-light'}`;
    };    

    return (
        <div className="btn-group">
            <button type="button"
                    className={getButtonClass(!filters.filterRise && !filters.filterMoney)} 
                    onClick={onFilterData}>
                    Все сотрудники
            </button>
            <button type="button"
                    className={getButtonClass(filters.filterRise)}
                    data-toggle="filterRise"
                    onClick={onFilterData}>
                    На повышение
            </button>
            <button type="button"
                    className={getButtonClass(filters.filterMoney)}
                    data-toggle="filterMoney"
                    onClick={onFilterData}>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;