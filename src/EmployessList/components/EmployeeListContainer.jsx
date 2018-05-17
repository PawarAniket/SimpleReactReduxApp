import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setEmployeeList} from '../reducers/actions';
import Griddle from 'griddle-react';

class EmployeeListContainer extends React.Component {

    componentWillMount() {
        axios.get('http://reactjstest.sumhr.com/api/testdata', {headers: {'Authorization': this.props.token || ''}}).then((response) => {
            this.props.setEmployeeList(response.data.data);
        }).catch((error) => {
            console.log('Error');
        });
    }

    render() {
        let {employeeList} = this.props;
        const column = ['id', 'name', 'mobile', 'address', 'more'];
        const columnMetadata = [
            {
                columnName: 'id',
                displayName: 'User ID',
                visible: true
            },
            {
                columnName: 'name',
                displayName: 'Name',
                visible: true
            },
            {
                columnName: 'mobile',
                displayName: 'Mobile number',
                visible: true
            },
            {
                columnName: 'address',
                displayName: 'Address',
                visible: true
            },
            {
                columnName: 'more',
                displayName: 'More',
                visible: true
            }]
        return (
            <div>
                <Griddle data={employeeList} tableClassName="table" resultsPerPage={10} columns={column} columnMetadata={columnMetadata}/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        employeeList: state.employeeReducer.employeeList,
        token: state.loginReducer.token
    }
}

const mapDispatchToProps = {setEmployeeList};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListContainer);