import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const employers = [
    {name: 'Oleg', salary: 2140, increase: true, id: 1},
    {name: 'Denis', salary: 2300, increase: false, id: 2},
    {name: 'Alex', salary: 4800, increase: false, id: 3},
    {name: 'Egor', salary: 1250, increase: true, id: 4}
]

function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList employers={employers}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
