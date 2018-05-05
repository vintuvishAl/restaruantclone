import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
  }
  componentDidMount() {
    fetch('/api/account/restaurant', { method: 'GET' })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          data : json
        });
      });
  }

  render(){
    var restaurants = this.state.data.map((x,i) =>{
      return<li key={i}>

<div className="container" style={{ paddingBottom:10}}>
<div className="card border-dark mb-3 text-center" >
<div className="card-header">
   <h4> {x.name}</h4>
</div>
<div class="card-body text-dark ">
<div className="row">
<div className="col-sm">
Phone Number - {x.phonenumber}
</div>
<div className="col-sm">
Timings - {x.timings}
</div>
<div className="col-sm">
Cuisines - {x.cuisines}
</div>
</div>

<div className="row" style={{paddingTop:10}}>
<div className="col-sm">
Average Cost - {x.averagecost}
</div>
<div className="col-sm">
Located at - {x.address}
</div>
<div className="col-sm">
More-Information - {x.moreinfo}
</div>
</div>

  <footer className="blockquote-footer" style={{paddingTop:10}}>Created by - <cite title="Source Title">{x.user}</cite></footer>
 
</div>
</div>
</div>
 </li>
    });
    return(
      <div className="container text-center" style={{paddingTop: 50}}>
      <h1>List of Restaurants</h1>
     
      <ul>{restaurants}</ul>
</div>

  
    )
  }
}

export default Home;
