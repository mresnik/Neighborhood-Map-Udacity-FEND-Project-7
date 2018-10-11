import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import locationsData from './data/locationsData';
import meetingsData from './data/meetingsData';
import TextList from './TextList';
import TopNav from './TopNav';
import Icon from './images/NAIcon.png';
import CoffeeModal from './CoffeeModal';
import ErrorModal from './ErrorModal';
import MapsModal from './MapsModal';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    coffee:[],
    closeCoffee:[],
    showModal:false,
    showErrorModal:false,
    showMapsModal:false,
    modalInfoId: '',
    markers: []
  };
}

  modalInfo = (id) => {
    this.setState({ modalInfoId : id})
  }

  showTheModal = (newState) => {
    this.setState({showModal : newState})
  }

  showTheErrorModal = (newState) => {
    this.setState({showErrorModal : newState})
  }

  showTheMapsModal = (newState) => {
    this.setState({showMapsModal : newState})
  }

// Creating promise for Google Maps based on
// https://stackoverflow.com/questions/48493960/using-google-map-in-react-component
  getGoogleMaps() {
    // If we haven't already defined the promise, define it
    if (!this.googleMapsPromise) {
      this.googleMapsPromise = new Promise((resolve) => {
        // Add a global handler for when the API finishes loading
        window.resolveGoogleMapsPromise = () => {
          // Resolve the promise
          resolve(window.google);

          // Tidy up
          delete window.resolveGoogleMapsPromise;
        };

        // Load the Google Maps API
        const script = document.createElement("script");
        const API = 'AIzaSyBSLwJS2xc6mbIZlAawcLmhtc_lq3aLL0c';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API}&callback=resolveGoogleMapsPromise`;
        script.async = true;
        document.body.appendChild(script);
      })
    }

    // Return a promise for the Google Maps API
    return this.googleMapsPromise;
  }

  componentWillMount() {
    // Start Google Maps API loading since we know we'll soon need it
    this.getGoogleMaps();
  }

  componentDidMount() {
    // Once the Google Maps API has finished loading, initialize the map
    this.getGoogleMaps()
    .then((google) => {
            const uluru = {lat: 41.237557, lng: -80.818417};
            const map = new google.maps.Map(document.getElementById('map'), {
              zoom: 10.5,
              mapTypeControl: false,
              center: uluru
            });

                  let infowindow = new window.google.maps.InfoWindow();

                  //// TODO: For future version instead of having an API call for each location
                  //// I would have on call to get coffee shops for the entire area. For each
                  //// location I would then calculate the closest coffee shops - perhaps using
                  //// the code at https://www.geodatasource.com/developers/javascript. This
                  //// would reduce API calls and also make the error handling much better since
                  //// there would potentially be one Foursquare error instead of sixteen
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
                      this.showTheErrorModal(true)
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

    })
    .catch((error) => {
          this.showTheMapsModal(true);
          });
  };

  render() {
    return (
      <div>
        <TopNav />
        <main id="map"></main>
        <TextList triggerMarker = {this.triggerMarker} showTheModal = {this.showTheModal} modalInfoId={this.state.modalInfoId} showModal = {this.state.showModal} modalInfo={this.modalInfo} locationsData = {locationsData} meetingsData = {meetingsData} markers= {this.state.markers} infowindow = {this.props.infowindow} map = {this.map} infowindowContent = {this.props.infowindowContent}/>
        <CoffeeModal showTheModal = {this.showTheModal} modalInfoId={this.state.modalInfoId} modalInfo={this.modalInfo} showModal = {this.state.showModal} locationsData = {locationsData}/>
        <ErrorModal showTheErrorModal = {this.showTheErrorModal} showErrorModal = {this.state.showErrorModal}/>
        <MapsModal showTheMapsModal = {this.showTheMapsModal} showMapsModal = {this.state.showMapsModal}/>
      </div>
    )
  }
}

/*function loadMapScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}*/

export default App;
