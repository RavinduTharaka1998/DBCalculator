import  React, {Component} from 'react';

export default  class Dashboard extends  Component{
    constructor(props) {
        super(props);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nic: ''
        }
    }

    onChangeNIC(e){
        this.setState( {
           nic: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        var day, month;
        var str = this.state.nic;

        var res1 = str.substring(0, 2);
        var res3 = str.substring(2,5);

        //find girl or boy
        if (res3 >= 500) {

            if (res3 <= 531) {
                month = 1;
                day = res3 - 500;
            }
            else if ((res3 > 531) && (res3 <= 560)) {
                month = 2;
                day = res3 - 531;
            }
            else if ((res3 > 560) && (res3 <= 591)) {
                month = 3;
                day = res3 - 560;
            }
            else if ((res3 > 591) && (res3 <= 621)) {
                month = 4;
                day = res3 - 591;
            }
            else if ((res3 > 621) && (res3 <= 652)) {
                month = 5;
                day = res3 - 621;
            }
            else if ((res3 > 652) && (res3 <= 682)) {
                month = 6;
                day = res3 - 652;
            }
            else if ((res3 > 682) && (res3 <= 713)) {
                month = 7;
                day = res3 - 682;
            }
            else if ((res3 > 713) && (res3 <= 744)) {
                month = 8;
                day = res3 - 713;
            }
            else if ((res3 > 744) && (res3 <= 774)) {
                month = 9;
                day = res3 - 744;
            }
            else if ((res3 > 774) && (res3 <= 805)) {
                month = 10;
                day = res3 - 774;
            }
            else if ((res3 > 805) && (res3 <= 835)) {
                month = 11;
                day = res3 - 805;
            }
            else if ((res3 > 835) && (res3 <= 866)) {
                month = 12;
                day = res3 - 835;
            }
            alert ("You are Girl and yor Birthday is " +res1+"/"+month+"/"+day);
        }
        else {

            if (res3 <= 31) {
                month = 1;
                day = res3;
            }
            else if ((res3 > 31) && (res3 <= 60)) {
                month = 2;
                day = res3 - 31;
            }
            else if ((res3 > 60) && (res3 <= 91)) {
                month = 3;
                day = res3 - 60;
            }
            else if ((res3 > 91) && (res3 <= 121)) {
                month = 4;
                day = res3 - 91;
            }
            else if ((res3 > 121) && (res3 <= 152)) {
                month = 5;
                day = res3 - 121;
            }
            else if ((res3 > 152) && (res3 <= 182)) {
                month = 6;
                day = res3 - 152;
            }
            else if ((res3 > 182) && (res3 <= 213)) {
                month = 7;
                day = res3 - 182;
            }
            else if ((res3 > 213) && (res3 <= 244)) {
                month = 8;
                day = res3 - 213;
            }
            else if ((res3 > 244) && (res3 <= 274)) {
                month = 9;
                day = res3 - 244;
            }
            else if ((res3 > 274) && (res3 <= 305)) {
                month = 10;
                day = res3 - 274;
            }
            else if ((res3 > 305) && (res3 <= 335)) {
                month = 11;
                day = res3 - 305;
            }
            else if ((res3 > 335) && (res3 <= 366)) {
                month = 12;
                day = res3 - 335;
            }

            alert ("You are Boy and yor Birthday is " +res1+"/"+month+"/"+day);
        }

        this.setState({
            nic :''

        })

    }

    render(){
        return(
            <div className='container'>  
                <center>
                    <h1>Welcome to Birthday Generator</h1>
                    <br/>
                    <h3 className="text-center">Find Your Birthday</h3>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type ="text" required placeholder = "Please enter your NIC" className="form-control" value={this.state.nic} onChange = {this.onChangeNIC}/>
                        </div>
                        <div className="form-group">
                            <input type = "submit" value = "Get My Birthday" className="btn btn-success"/>
                        </div>
                    </form>   
                </center>  
            </div>

        );
    }
}