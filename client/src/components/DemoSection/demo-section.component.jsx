import React from 'react';
import '../../style/demo-section.style.css';

export class DemoSection extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        // alert("form submitted!");
        // preventDefault prevents the 'normal procedure' from firing 
        event.preventDefault();
        const data = new FormData(event.target)

        fetch('./server/request-demo', {
            method: 'POST',
            body: data,
        });
    }

    render(){
        return(
            <section className="demo-section">
                <h2 className="section-title">Request Demo</h2>
                {/* Add Form Here: */}
                <form class="demo-form" onSubmit={this.handleSubmit}>
                    <div class="row row1">
                    {/*<label for="name">Name</label>*/}
                        <input type="text" name="name" id="name" placeholder="Name"/>
                    {/*<label for="email">Email</label>*/}
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </div>    
                    <div class="row row2">
                    {/*<label for="phone">Phone</label>*/}
                    <input type="tel" name="phone" id="phone" placeholder="Phone Number"/>
                    {/*<label for="company">Company</label>*/}
                        <input type="text" name="company" id="company" placeholder="Company"/>
                    </div>
                    {/*<label for="message">Message</label>*/}
                    <div class="row row3">
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                    </div>                    
                    <div class="row row4">
                        <input type="submit" value="Submit" class="submit-btn"/>
                    </div>
                </form>
                {/* Would it be better to create a new class component for the form
                or just incorporate it in this */}
            </section>
        );
    }
    
}