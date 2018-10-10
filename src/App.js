import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import locationsData from './data/locationsData';
import meetingsData from './data/meetingsData';
import TextList from './TextList';
import TopNav from './TopNav';
import Icon from './images/NAIcon.png';
import CoffeeModal from './CoffeeModal';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    coffee:[],
    closeCoffee:[],
    showModal:false,
    modalInfoId: '',
    markers: []
  };
}

  componentDidMount() {
    this.createMap()
  }


  modalInfo = (id) => {
    this.setState({ modalInfoId : id})
  }


  showTheModal = (newState) => {
    this.setState({showModal : newState})
  }

  createMap = () => {
    loadMapScript("https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyBSLwJS2xc6mbIZlAawcLmhtc_lq3aLL0c&callback=initMap")
    window.initMap = this.initMap;
  }

  initMap = () => {
  let map = new window.google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.237557, lng: -80.818417},
    mapTypeControl: false,
    zoom: 10.5
  })

  let infowindow = new window.google.maps.InfoWindow();
  for (let i = 0; i < locationsData.length; i++) {
    let location = locationsData[i].location;
    fetch('https://api.foursquare.com/v2/venues/explore?client_id=CXNU2AK1BGVEXHI1LV25QNNHJSYISS1ILQMDTCSZVOPDTJC2&client_secret=4N13WAF34TEZLHKYD0MS5QZ0AAOESW5MJV1ZMEQXJ0UKJUED&v=20180323&limit=3&ll='+location.lat+','+location.lng+'&query=coffee')
   .then(response =>
      response.json())
    .then(data =>
    (
        locationsData[i].coffee.push(data.response.groups[0].items)
      )
    )
    // Code for handling API response
    .catch(err => {
      alert("Shoot! I'm having a problem loading Coffee Shop location info "+
       "from Foursquare. Since I'm looking for coffee by 16 distinct meeting " +
       "locations the chances are pretty good that you might need to click " +
       "more than once."
      )
    });

          // Get the position from the location array.
          let position = locationsData[i].location;
          let title = locationsData[i].name;
          let address = locationsData[i].address;
          let city = locationsData[i].city;
          let state = locationsData[i].state;
          let zip = locationsData[i].zip;
          let heading = locationsData[i].imageHeading;
          let pitch = locationsData[i].imagePitch;
          let fov = locationsData[i].imageFov;
          let source = 'https://maps.googleapis.com/maps/api/streetview?'
          let key = 'AIzaSyBSLwJS2xc6mbIZlAawcLmhtc_lq3aLL0c'
          let infowindowContent = '<div class="Window-title">'
              + title + '</div><div><img class="Window-image" src="' + source +
              'key=' + key + '&location=' + address + city + state + zip +
              '&size=300x175&heading=' + heading + '&pitch=' + pitch + '&fov='
              + fov + '" alt="' + title + '"></img></div><div class="Window-address">' + address
              + ' ' + city + ', ' + state + ' ' + zip +'</div>'

              // Create a marker per location, and put into markers array.
              let marker = new window.google.maps.Marker({
                map: map,
                position: position,
                title: title,
                animation: window.google.maps.Animation.DROP,
                icon: Icon,
                id: i
              });

              marker.addListener('click', function() {
                setTimeout(function(){ marker.setAnimation(null); }, 1000)
                marker.setAnimation(window.google.maps.Animation.BOUNCE)
                infowindow.setContent(infowindowContent)
                this.map.setCenter(marker.position)
                infowindow.open(map, marker);
              });

          // Push the marker to our array of markers.
              this.state.markers.push(marker);
      }

      map.addListener('click', function() {
        infowindow.close(map, this.marker);
      });
}

  render() {
    return (
      <div>
        <TopNav />
        <main id="map"></main>
        <TextList triggerMarker = {this.triggerMarker} showTheModal = {this.showTheModal} modalInfoId={this.state.modalInfoId} showModal = {this.state.showModal} modalInfo={this.modalInfo} locationsData = {locationsData} meetingsData = {meetingsData} markers= {this.state.markers} infowindow = {this.props.infowindow} map = {this.map} infowindowContent = {this.props.infowindowContent}/>
        <CoffeeModal showTheModal = {this.showTheModal} modalInfoId={this.state.modalInfoId} modalInfo={this.modalInfo} showModal = {this.state.showModal} locationsData = {locationsData}/>
      </div>
    )
  }
}

function loadMapScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
