import React, { Component } from 'react';

class Restaurant extends Component {
    constructor(props){
         super();
         this.state = {
           email: props.email,
           rName:'',
           rPhone: '',
           rTimings: '',
           rAvgcost: '',
           rCuisines: '',
           rAddress:'',
           rMoreinfo:'',
           rError: '',

          };
           
          this.onTextboxChangeRestaurantName = this.onTextboxChangeRestaurantName.bind(this);
          this.onTextboxChangeRestaurantPhone = this.onTextboxChangeRestaurantPhone.bind(this);
          this.onTextboxChangeRestaurantTimings = this.onTextboxChangeRestaurantTimings.bind(this);
          this.onTextboxChangeRestaurantAverageCost = this.onTextboxChangeRestaurantAverageCost.bind(this);
          this.onTextboxChangeRestaurantCuisines = this.onTextboxChangeRestaurantCuisines.bind(this);
          this.onTextboxChangeRestaurantAddress = this.onTextboxChangeRestaurantAddress.bind(this);
          this.onTextboxChangeRestaurantMoreInfo = this.onTextboxChangeRestaurantMoreInfo.bind(this);
          
          this.onCreateRestaurant = this.onCreateRestaurant.bind(this);
         }

         onTextboxChangeRestaurantName(event) {
          this.setState({
            rName: event.target.value,
          });
        }
        onTextboxChangeRestaurantPhone(event) {
          this.setState({
            rPhone: event.target.value,
          });
        }onTextboxChangeRestaurantAverageCost(event) {
          this.setState({
            rAvgcost: event.target.value,
          });
        }onTextboxChangeRestaurantTimings(event) {
          this.setState({
            rTimings: event.target.value,
          });
        }onTextboxChangeRestaurantCuisines(event) {
          this.setState({
            rCuisines: event.target.value,
          });
        }onTextboxChangeRestaurantAddress(event) {
          this.setState({
            rAddress: event.target.value,
          });
        }onTextboxChangeRestaurantMoreInfo(event) {
          this.setState({
            rMoreinfo: event.target.value,
          });
        }

         onCreateRestaurant() {
          // Grab state
          const {
            email,
            rName,
            rPhone,
            rTimings,
            rAvgcost,
            rCuisines,
            rAddress,
            rMoreinfo,

          } = this.state;
      
          this.setState({
            isLoading: true,
          });
      
          // Post request to backend
          fetch('/api/account/restaurant', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: email,
              name: rName,
              phonenumber: rPhone,
              timings: rTimings,
              averagecost: rAvgcost,
              cuisines: rCuisines,
              address: rAddress,
              moreinfo: rMoreinfo,
            }),
          }).then(res => res.json())
            .then(json => {
              console.log('json', json);
              if (json.success) {
                this.setState({
                  rError: json.message,
                  rAddress: '',
                  rAvgcost: '',
                  rName: '',
                  rCuisines: '',
                  rPhone: '',
                  rMoreinfo: '',
                  rTimings: '',

                });
              } else {
                this.setState({
                  rError: json.message,
                });
              }
            });
        }

     render() {
       const {
      rError,
      rName,
      rPhone,
      rAvgcost,
      rTimings,
      rCuisines,
      rAddress,
      rMoreinfo,
       } = this.state
        return (
          <div  style={{paddingTop:20}}>

            <div>
            {
              (rError) ? (
                <p>{rError}</p>
              ) : (null)
            }
            <h3>Create a Restaurant</h3>
<div className="row">
<div className="col">
<input
              type="text"
              className="form-control"
              placeholder="Name"
              value={rName}
              onChange={this.onTextboxChangeRestaurantName}
            /><br />
  </div>
  <div className="col">
  <input
              type="text"
              className="form-control"
              placeholder="PHone Number"
              value={rPhone}
              onChange={this.onTextboxChangeRestaurantPhone}
            /><br />
  </div>
  <div className="w-100"></div>
<div className="col">
<input
              type="text"
              className="form-control"
              placeholder="Average Cost"
              value={rAvgcost}
              onChange={this.onTextboxChangeRestaurantAverageCost}
            /><br />
</div>
     
</div>
  <input
              type="text"
              className="form-control"
              placeholder="Timings"
              value={rTimings}
              onChange={this.onTextboxChangeRestaurantTimings}
            /><br />
              <input
              type="text"
              className="form-control"
              placeholder="Cuisines"
              value={rCuisines}
              onChange={this.onTextboxChangeRestaurantCuisines}
            /><br />
              <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={rAddress}
              onChange={this.onTextboxChangeRestaurantAddress}
            /><br />
              <input
              type="text"
              className="form-control"
              placeholder="More Info"
              value={rMoreinfo}
              onChange={this.onTextboxChangeRestaurantMoreInfo}
            /><br />
            <button className="btn btn-outline-primary" onClick={this.onCreateRestaurant}>Add Restaurant</button>
          </div>
          </div>
        );
      }
    }
    
    export default Restaurant;
    