import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employers}) => {
    const employeesItems = employers.map((item, i) => {
        return <EmployeesListItem {...item}/>;
    });
    return (
        <ul className="app-list list-group">
            {employeesItems}
        </ul>
    )
}

export default EmployeesList;
