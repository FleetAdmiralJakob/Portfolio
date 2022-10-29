import React from 'react'
import {Col, Container} from "react-bootstrap";
import axios from 'axios'
class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if(response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }
    render() {
        return (
            <div className="ContactMe">
                <Container fluid className='home-contact-section' id='about'>
                    <Col md={12} className='home-contact-header'>
                        <h1 style={{fontSize: '2.6em'}}>
                            Contact Me
                        </h1>
                    </Col>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value={this.state.name}
                                   onChange={this.onNameChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                   value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={this.state.message}
                                      onChange={this.onMessageChange.bind(this)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Container>
            </div>
        )
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}
export default ContactMe