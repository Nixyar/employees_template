import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const employers = [
    {name: 'Oleg', salary: 2140, star: false, trash: false},
    {name: 'Denis', salary: 2300, star: false, trash: false},
    {name: 'Alex', salary: 4800, star: false, trash: false},
    {name: 'Egor', salary: 1250, star: false, trash: false}
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
