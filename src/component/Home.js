

 import React, {useEffect,useState} from 'react';
 import './Home.css';
 import AddUser from './AddUser';
import Map from './Map';

 class Home extends React.Component {
  state = {
    filter: "",
    data: []
  };
  componentDidMount() {
  
    fetch('http://localhost:3032/users', {
    method: 'GET',
    }).then(resp => resp.json())
    .then(res => this.setState({ data: res }))
    .catch(error => console.log(error))
    }
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };
  delete(index){
   
    const array = this.state.data.splice(index, 1);
    this.setState({user: array});
  }
  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
    
        return (
          item.name.toLowerCase().includes(lowercasedFilter)
        );
      
    });
 
    return (
      <div className="container-fluid">
       <div className="row justify-content-md-center">
        <div className="col col-lg-6 col-md-6">
     
        <input value={filter} onChange={this.handleChange} className ="input w-50" />
        {filteredData.map((item,index )=> (
          <div key={index} className="card w-50 mx-3 mt-2 mb-2  card-height">
            <div className=" d-inline">
              {item.name} 
              <button type="button" class="close" onClick={this.delete.bind(this, index)} aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
             

            </div>
           
            </div>
        

        ))}
      </div>
      <div className="col col-lg-6 col-md-6">
           <AddUser/>
     </div>
      <div className ="col">
           <Map/>
     </div>
    </div>
    </div>
    );
  }
}
 export default Home;