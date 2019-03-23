import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {employeeUpdate} from '../actions';
import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Button} from './common';


class EmployeeEdit extends Component {
    componentWillMount()
    {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }
        onButtonPress() {
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift});
    }
    render(){
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>

        );
    }
}

const mapsStateToProps = (state) => {
   const {name, phone, shift} = state.employeeForm;
   return {name, phone, shift};
}

export default connect(mapsStateToProps, {employeeUpdate})(EmployeeEdit);