import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state={
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            this.setState({employee: res.data});
        });
    }

    mainPage() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">View Employee Page</h2>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee First Name: </label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Employee Last Name: </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Employee Email: </label>
                            <div>{this.state.employee.email}</div>
                        </div>
                    </div>
                    <button className="btn btn-info" onClick={()=>this.mainPage()}>Back to the List</button>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;