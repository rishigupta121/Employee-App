import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';
import EmployeeEdit from './src/components/EmployeeEdit';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './src/actions/types';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>
                </Scene>
                <Scene key="main">
                <Scene rightTitle="Add"
                onRight = {
                    () => {
                        //dispatch({ type : EMPLOYEE_CREATE});
                        Actions.employeeCreate();
                    }
                }
                key="employeeList" 
                component={EmployeeList} 
                title="Employees"/>
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
                <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;