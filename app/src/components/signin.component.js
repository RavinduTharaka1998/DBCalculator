import  React, {Component} from 'react';
import axios from 'axios';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default  class SignIn extends  Component{
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }

    onChangeEmail(e){
        this.setState( {
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
        const Email = this.state.email;
        let object = {
            email : this.state.email,
            password : this.state.password
        };

        console.log('mail '+this.state.email);
        console.log('pass '+this.state.password);
       
            axios.post('http://localhost:4000/age/signin',object)
                .then(res => {
                    if(res.data.message === "Successful Login"){
                        alert(res.data.message)
                        alert(Email)
                        this.props.history.push('/dashboard');
                    }
                    else{
                        alert(res.data.message)
                        this.props.history.push('/signIn');
                    }

                });
        
        this.setState({
            email :'',
            password :''
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
                <div className="container" style={{marginTop:10}}>
                    <h3 className="text-center">Sign In</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username :</label>
                            <input type ="text" className="form-control" placeholder="raone@gmail.com" value={this.state.email} onChange = {this.onChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label>Password :</label>
                            <input type ="password" className="form-control" placeholder="********" value={this.state.password} onChange = {this.onChangePassword}/>
                        </div>

                        <div className="form-group">
                            <input type = "submit" value = "Sign In" className="btn btn-primary"/>
                        </div>
                    </form>
                 </div>
            </div>
        )
    }
}
