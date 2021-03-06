import React, { Component } from 'react';
import axios from 'axios';
import '../vehicle.css';

export default class Editm extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            address: '',
            age: '',
            gender: '',
            nic: '',
            phone: '',
            email: '',
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4800/team/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    address: response.data.address,
                    age: response.data.age,
                    gender: response.data.gender,
                    nic: response.data.nic,
                    phone: response.data.phone,
                    email: response.data.email,
                    username: response.data.username,
                    password: response.data.password
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const team = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age,
            gender: this.state.gender,
            nic: this.state.nic,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        console.log(team);

        axios.post('http://localhost:4800/team/update/' + this.props.match.params.id, team)
            .then(res => console.log(res.data));
            alert("Updated Succesfully!");
        window.location = '/viewm';

    }

    render() {
        return (
            <div className='addvehiclePage'>
                <br />
                <div className='container' id="addRegisterForm">
                    <h3 className="addvehicleTitle">UPDATE TEAM MEMBER DETAILS</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="textColour">Member Name: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Job Title: </label>
                            <input type="text"
                                required
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Age: </label>
                            <input
                                type="text"
                                required 
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                            />
                        </div>
                        <div className="form-group">
                            <label for="validationCustom04" class="form-label" className="textColour">Special Position</label>
                            <select class="form-select" id="validationCustom04" required value={this.state.gender} onChange={this.onChangeGender}>
                                <option selected disabled value="">Choose</option>
                                <option>Team Leader</option>
                                <option>Team Secretary</option>
                                <option>Team Assistant Secretary</option>
                                <option>Team Cordinator</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="textColour">NIC: </label>
                            <input
                                type="text"
                                required 
                                maxLength="10"
                                minLength="10"
                                className="form-control"
                                value={this.state.nic}
                                onChange={this.onChangeNIC}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Member Contact No: </label>
                            <input type="text"
                            required 
                                maxLength="10"
                                minLength="10"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                            />
                        </div>
                        <div className="form-group">
                            <label className="textColour">Email: </label>
                            <input
                                type="email"
                                required 
                               
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="submit" value="Update Member" className="btn btn-primary" />
                        </div>
                    </form>
                </div></div>
        )
    }
}