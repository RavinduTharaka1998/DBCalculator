import  React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";


export default  class SignUp extends  Component{


    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email:'',
            password:''
        }
    }

    onChangeName(e){
        this.setState( {
           name: e.target.value
        });
    }

    onChangeEmail(e){

            this.setState({
                email: e.target.value
            });
    }

    onChangePassword(e){
        this.setState( {
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            name : this.state.name,
            email : this.state.email,
            password : this.state.password
        };

                axios.post('http://localhost:4000/age/add',obj)
                    .then(res => {
                        alert("Registration Successfully")
                        console.log(res.data)});
                this.props.history.push('/signIn');
          


        this.setState({
            name :'',
            email:'',
            password:''

        })

    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id = "navbarSupportedContent">
                        <ul className="navbar-nav mr-auto font-weight-bold mr form-control-lg">
                            <li className="nav-item">
                                <Link to={'/'} className = "nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'} className = "nav-link ">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/signIn'} className = "nav-link">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                <div className="container " style={{marginTop:10}}>
                    <h3 className="text-center">Registration Form</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type ="text" required = "Please enter name" className="form-control" value={this.state.name} onChange = {this.onChangeName}/>
                        </div>
                        <div className="form-group">
                            <label>eMail Address :</label>
                            <input type ="text" required = "Please enter address" className="form-control" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="text" required = "Please enter address" className="form-control" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Sign Up" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

