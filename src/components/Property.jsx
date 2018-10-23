import React, {Component} from 'react';
import Chart from './Chart';
import PropertyCard from './propertyCard';

class Property extends Component {

    render() {
      console.log(this.props.location.crime);
      let crimeInfo = []
      for (var key in this.props.location.crime) {
        crimeInfo.push({type: key, count: this.props.location.crime[key]})
      }

      crimeInfo = crimeInfo.map(each => {
        return <li>{each.type} - {each.count}</li>
      })

      let priceInfo = this.props.location.value.map(each => {
        return <li>{each.year} - {each.price}</li>
      })

      let populationInfo = this.props.location.comm_population.map(each => {
        return <li>{each.year} - {each.population}</li>
      })

    return (
        <div className="card neighbor-info">
          <div className="card-body">
            <PropertyCard location={this.props.location} />
            <h5 className="card-title">{this.props.location.address}</h5>
            <ul>
              {priceInfo}
              {crimeInfo}
              {populationInfo}
              <li>{this.props.location.lat}</li>
              <li>{this.props.location.lng}</li>
              <Chart location={this.props.location}/>
            </ul>
            <button className="btn btn-danger" onClick={() => {this.props.deleteProperty(this.props.location.address)}}>Delete</button>
          </div>

        </div>
      );
    }
  }
export default Property;
