import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: true, rise: true, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: 2},
        {name: 'Carl W.', salary: 15000, increase: false, rise: false, id: 3},
      ],
      term: '',
      filters: {
        filterRise: false,
        filterMoney: false,
      },
    }
    this.maxId = 3;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: ++this.maxId
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  countPeople = () => {
    const { data } = this.state;
    return {total: data.length,
            increasePeople: data.filter(item => item.increase).length
          };
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }
  
  filterData = (e) => {
    const filterName = e.target.getAttribute('data-toggle');
      this.setState(prevState => ({
        filters: {
          [filterName]: !prevState[filterName]
        }
      }));
  }

  onChangeValue = (id, newValue) => {
    this.setState(({data}) => ({
      data: data.map(item =>
        (item.id !== id || item.salary === newValue)
          ? item
          : {...item, salary: newValue}
      )    
    }))
  }
  


  render() {
    const { data, term, filters} = this.state;
    let visibleData = this.searchEmp(data, term);

    if (filters.filterRise) {
      visibleData = visibleData.filter(item => item.rise);
    }

    if (filters.filterMoney) {
      visibleData = visibleData.filter(item => item.salary > 1000);
    }

    return (
      <div className="app">
          <AppInfo 
          countPeople={this.countPeople()}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter 
              onFilterData={this.filterData}
              filters={filters} />
          </div>
          
          <EmployeesList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeValue={this.onChangeValue}/>
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
