import React, { Component} from 'react';
import { Button,Table,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import { logDOM } from '@testing-library/react';const tableStyle = {
    border: "none",
    boxShadow: "none"
  };
  
  class Event extends Component {
    constructor(props) {
        super(props);
      }
    state = {
        eventInfo: [],
        eventDetail: []  
     }   
    componentDidMount(props) {
        var eventYr = "/"+ this.props.location.pathname.split('/')[2] + "/" + this.props.location.pathname.split('/')[3]
        var eventLink = 'https://api.youthcomputing.ca/events' + eventYr
        var yr = this.props.location.pathname.split('/')[3]
        console.log("test:" + yr)
      fetch(eventLink)
      .then(res => res.json())
      .then((data) => {
        this.setState({eventInfo: data.info,eventDetail: data.attendees})      })
    }   
    
    render() {        

        return (     
            <div className="container">
            <div className="col-xs-12">
                <h2>Event Check-in System</h2>  
                <br></br>
                <small><Link to={"/events"}>Events >  </Link> </small> <small style={{color:'RoyalBlue'}}>{this.state.eventInfo.name} {this.state.eventInfo.year}</small>
                <br></br><br></br>
            </div>
            <Table class="border border-white">
                <tr class="border border-white">
                    <td class="border border-white col-3">
                        <div class="shadow p-3 mb-5 bg-white rounded">
                            <Table striped>
                                <thead style={{color:'RoyalBlue',backgroundColor: 'Gainsboro'}}><th>Name</th><th>Email</th><th>Status</th></thead>
                                <tbody>
                                    {this.state.eventDetail.map((item) =><tr><td>{item.name}</td><td>{item.email}</td>
                                    <td>{item.checkedIn && <button type="button" class="btn btn-light">&#10003; Checkedin</button>}{!item.checkedIn && 
                                    <button type="button" class="btn btn-primary">x Checked Out</button>}</td></tr>)}
                                </tbody>
                            </Table>
                        </div>
                    </td>
                <td class="border border-white ">
                    <div class="shadow p-3 mb-5 bg-white rounded">
                        <card>
                            <CardImg src="https://youthcomputing.ca/images/event-logos/ccd-2018.png"/>
                            <CardBody>
                                <CardTitle>{this.state.eventInfo.name}</CardTitle>   
                                <CardSubtitle>{this.state.eventInfo.location}</CardSubtitle> 
                                <cardtext>{this.state.eventInfo.year}</cardtext>
                            </CardBody>    
                        </card>
                    </div>
                </td>                </tr>
            </Table>
            </div>      
        );
    }
  }
  export default Event;