import React from 'react';
import {reduxForm, formValueSelector, Field} from 'redux-form';
import {connect} from 'react-redux';

class UserContainer extends React.Component {

    handleFormSubmit = (formData) => {
        console.log('On form Submit');
    }

    handleFirstNameChanged = (event, value) => {
        console.log('First name changed');
    }

    handleLastNameChanged = (event, value) => {
        console.log('Last name changed');
    }

    render() {
        let {handleSubmit, user} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <p> Enter user details : </p>
                <div>
                    <label>First name </label>
                    <div>
                        <Field name="user.firstName" component="input" type="text" value={user.firstName}
                               onChange={this.handleFirstNameChanged}/>
                    </div>
                </div>
                <div>
                    <label>Last name </label>
                    <div>
                        <Field name="user.lastName" component="input" type="text" value={user.lastName}
                               onChange={this.handleLastNameChanged}/>
                    </div>
                </div>
                <div>
                    <button action="submit">Save user details</button>
                </div>
            </form>
        )
    }
}

const FORM_NAME = 'userForm';
UserContainer = reduxForm({
    form: FORM_NAME,
    enableReinitialize: true
})(UserContainer);

const selector = formValueSelector(FORM_NAME);
const mapStateToProps = (state, props) => {
    return {
        initialValues: state.userReducer.formValues.user,
        user: selector(state, 'user') || {}
    }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);