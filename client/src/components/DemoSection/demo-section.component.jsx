import React from 'react';
import '../../style/demo-section.style.css';

export class DemoSection extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            'name': '',
            'email': '',
            'phone': '',
            'company': '',
            'message': ''
        }
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        }, () => {
            console.log(this.state);
        })
    }


    handleSubmit(event){
        // preventDefault prevents the 'normal procedure' from firing 
        
        alert('Form Submitted');
        
        event.preventDefault();
        //const data = new FormData(event.target)
        console.log(this.state);
        var data = this.state;

        fetch('http://localhost:7000/request-demo', {
            method: 'POST',
            header: {'Access-Control-Allow-Origin': 'http://localhost:3000',
                     'Content-type': 'application/json'},
            mode: 'cors',
            // body: {
            //     'name': this.state.name,
            //     'email': this.state.email,
            //     'phone': this.state.phone,
            //     'company': this.state.company,
            //     'message': this.state.message
            // },
            // body: data,
            body: JSON.stringify({
                name: 'Avi Patel',
                email: 'avi.patel0025@gmail.com',
                phone: '1234567890',
                company: 'Leaselot',
                message: 'Hello! Please work..'
             }) 
        }).then(response => console.log(response))
        .catch(error => console.log('ERROR:' + error));
    }

    render(){
        return(
            <section className="demo-section">
                <h2 className="section-title">Request Demo</h2>
                {/* Add Form Here: */}
                <form className="demo-form" onSubmit={this.handleSubmit}>
                    <div className="row row1">
                        <input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange}/>
                        <input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                    </div>    
                    <div className="row row2">
                        <input type="tel" name="phone" id="phone" placeholder="Phone Number" onChange={this.handleChange}/>
                        <input type="text" name="company" id="company" placeholder="Company" onChange={this.handleChange}/>
                    </div>
                    <div className="row row3">
                        <textarea name="message" id="message" placeholder="Message" onChange={this.handleChange}></textarea>
                    </div>                    
                    <div className="row row4">
                        <input type="submit" value="Submit" className="submit-btn"/>
                    </div>
                </form>
            </section>
        );
    }
    
}