import React, {Component} from 'react';
import {Table,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class Events extends Component{
    state = {
        events: []
    }
    componentDidMount() {
        fetch('https://api.youthcomputing.ca/events')
        .then(res => res.json())
        .then((data) => {
          this.setState({events: data.events})
          console.log(this.state.events)
        })
    }

    render() {   
        return ( 
           <div className="container">
              <div className="col-xs-12">
                <h1>Events Check-in System</h1>  
                <br></br>            
                <br></br><br></br>
                <div>
                <div>
        </div>
        </div>
              </div>
              <div>
        <Table striped>
        <thead style={{color:'RoyalBlue',backgroundColor: 'Gainsboro'}}><th>Name</th><th>Year</th></thead>
          <tbody>
          {this.state.events.map((item) =><tr><td>{item.label.split(' ')[0] + " " + item.label.split(' ')[1] + " "+ 
                    item.label.split(' ')[2]}</td><td><Link to={{pathname:"/event/"+item.name,eventProps:{name:item.name}}}>{item.name.split('/')[1]}</Link></td></tr>)}
          </tbody>
        </Table>
      </div>
          </div>   
           );
    }
}

export default Events;