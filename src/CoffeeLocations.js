import React, { Component } from 'react';

class CoffeeLocations extends Component {
//  componentDidMount() {
//    this.calculateCoffee()
//  }
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  //:::  The sample code is licensed under LGPLv3 from GeoDataSource                                                                      :::
  //:::  This routine calculates the distance between two points (given the     :::
  //:::  latitude/longitude of those points). It is being used to calculate     :::
  //:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
  //:::                                                                         :::
  //:::  Definitions:                                                           :::
  //:::    South latitudes are negative, east longitudes are positive           :::
  //:::                                                                         :::
  //:::  Passed to function:                                                    :::
  //:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
  //:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
  //:::    unit = the unit you desire for results                               :::
  //:::           where: 'M' is statute miles (default)                         :::
  //:::                  'K' is kilometers                                      :::
  //:::                  'N' is nautical miles                                  :::
  //:::                                                                         :::
  //:::  Worldwide cities and other features databases with latitude longitude  :::
  //:::  are available at https://www.geodatasource.com                          :::
  //:::                                                                         :::
  //:::  For enquiries, please contact sales@geodatasource.com                  :::
  //:::                                                                         :::
  //:::  Official Web site: https://www.geodatasource.com                        :::
  //:::                                                                         :::
  //:::               GeoDataSource.com (C) All Rights Reserved 2017            :::
  //:::                                                                         :::
  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

calculateCoffee = () => {

  let coffee = this.props.coffee;
  let closeCoffee = this.props.closeCoffee;
  let locations = this.props.locationsData;
  coffee.map((shop) => {
    let lat2 = shop.venue.location.lat;
    let lon2 = shop.venue.location.lng;
    let unit = 'M';
    locations.map((location) => {
  let lat1 = location.location.lat;
  let lon1 = location.location.lng;
  function distance(lat1, lon1, lat2, lon2, unit) {
  	var radlat1 = Math.PI * lat1/180
  	var radlat2 = Math.PI * lat2/180
  	var theta = lon1-lon2
  	var radtheta = Math.PI * theta/180
  	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  	if (dist > 1) {
  		dist = 1;
  	}
  	dist = Math.acos(dist)
  	dist = dist * 180/Math.PI
  	dist = dist * 60 * 1.1515
  	if (unit=="K") { dist = dist * 1.609344 }
  	if (unit=="N") { dist = dist * 0.8684 }
  	return dist
  }
})
})}


    render() {
<this.calculateCoffee/>
        return (

        <div>Here is Coffee!</div>
      )
    }
}


export default CoffeeLocations;
