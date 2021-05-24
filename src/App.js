import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';


export default class App extends Component {
  state = {
    Person: {
      fullName: "Nihel Mrad",
      bio: "I am tunisian, i learned Network Engineer, I am 29 years old, i speak english and french and know i learn FullStack JS ",
      imgSrc: "https://www.w3schools.com/w3images/avatar6.png",
      profession: "FullStack JS developer"
    },
    show: true,
    date : new Date()
  }
  
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
count=() =>this.setState({date: new Date()});
componentDidMount(){
  setInterval(() => this.count(), 1000);
}

  render() {
    return (
      <div>
        <Container style={{backgroundColor:"gray", textAlign:"center", margin:"20px", width:"1600px"}}>
  <Col>
    <Row> {this.state.show && (
          <div>
            <img style={{margin:"20px"}} src={this.state.Person.imgSrc} alt="Image de profile"></img>
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.profession}</h2>
            <h3>{this.state.Person.bio}</h3>
            
            <br></br>
            </div>
        )}</Row>
        <Row>
          <button style={{padding:"10px", textAlign:"center", border:"solid 1px black", color:"white", backgroundColor:"black", borderRadius:"10px" ,margin:"20px"}} onClick={this.handleShowPerson}>Show me your profile</button>
        </Row>
  </Col>
</Container>
        

        
          
      </div>
    )
  }
}


