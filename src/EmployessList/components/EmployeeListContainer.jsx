import React from 'react';
import Griddle from 'griddle-react';
import {connect} from 'react-redux';
import axios from 'axios';
import {setEmployeeList, setMoreInfoData} from '../reducers/actions';
import {setAuthenticationToken} from '../../Login/reducers/actions';

class MoreDescriptionDisplay extends React.Component {

    fetchMoreInfo = () => {
        axios.get('http://reactjstest.sumhr.com/api/testdata?id=' + this.props.rowData.id, {headers: {'Authorization': this.props.token || ''}}).then((response) => {
            this.props.customComponentMetadata.setMoreInfoData(this.props.rowData.id, "Kalach Jaun alo.");
        }).catch((error) => {
            console.log('Error');
        });
    }

    render() {
        if (this.props.rowData.more) {
            return <span>this.props.rowData.more</span>;
        }
        return <a onClick={this.fetchMoreInfo}>more...</a>;

    }
}

class EmployeeListContainer extends React.Component {

    componentWillMount() {
        if (this.props.token) {
            axios.get('http://reactjstest.sumhr.com/api/testdata', {headers: {'Authorization': this.props.token || ''}}).then((response) => {
                this.props.setEmployeeList(response.data.data);
            }).catch((error) => {
                console.log('Error');
            });
        }
        else {
            this.props.history.push('/');
        }
    }

    handleLogOut = () => {
        this.props.setAuthenticationToken(null);
        this.props.history.push('/');
    }

    render() {
        let {employeeList} = this.props;
        const column = ['id', 'name', 'mobile', 'address', 'more'];
        const columnMetadata = [
            {
                columnName: 'id',
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
                visible: true,
                customComponent: MoreDescriptionDisplay,
                customComponentMetadata: {setMoreInfoData: this.props.setMoreInfoData}
            }
        ];
        return (
            <div>
                <div>
                    <button type="button" onClick={this.handleLogOut}>Sign out</button>
                </div>
                <div>
                    <Griddle data={employeeList} tableClassName="table" columns={column}
                             columnMetadata={columnMetadata} initialSort="id"/>
                </div>
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

const mapDispatchToProps = {setEmployeeList, setAuthenticationToken, setMoreInfoData};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListContainer);