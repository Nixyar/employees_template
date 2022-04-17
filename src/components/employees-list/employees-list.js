import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employers}) => {
    const employeesItems = employers.map(item => {
        const {id, ...itemList} = item;
        return <EmployeesListItem key={item.id} {...itemList}/>;
    });
    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    )
}

export default EmployeesList;
