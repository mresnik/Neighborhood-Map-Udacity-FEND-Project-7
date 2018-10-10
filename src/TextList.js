import React, { Component } from 'react';

class TextList extends Component {

  componentDidMount() {
    this.updateMarkers()
  }

  constructor(props) {
    super(props);
    this.state = {value : 'a'};
    this.handleChange = this.handleChange.bind(this);
  }

// Change value to day of week
  handleChange(event) {
    this.setState({value: event.target.value})
  }

  updateMarkers = () => {
    let locations = this.props.locationsData;
    let markers = this.props.markers;
    let modal = this.props.showTheModal;
    let i = 0;
    let modalinfo = this.props.modalInfo;
    let theLocations = document.getElementsByClassName('location-name');
      for(i = 0; i < theLocations.length; i++) {
          theLocations[i].addEventListener("click", function() {
            modalinfo(this.innerHTML)
            markers.map((marker) =>(
              marker.title === this.innerHTML &&
              setTimeout(function(){
              modal(true); }, 1) &&
              window.google.maps.event.trigger(marker, 'click')
            ))
      })}

      markers.map((marker) => {
        marker.setVisible(false);
        locations.map((location) => {
          if (marker.title === location.name && location.days.includes(this.state.value)) {
          marker.setVisible(true);
          }
        })
    })
  }

createLocation = () => {
  let locations = this.props.locationsData;
  let meetings = this.props.meetingsData;
  let markers = this.props.markers;
  markers.map((marker) => {
    marker.setVisible(false);
    locations.map((location) => {
      if (marker.title === location.name && location.days.includes(this.state.value)) {
        marker.setVisible(true);
        }
    })
  })

  return (
  locations.map((location) => (
      location.days.includes(this.state.value) &&
      <div key={location.id} >
        <div className="location-name" role="button"
          >{location.name}</div>
          <div className="location-meetings">

                  {meetings.map((meeting) => (
                    <div key={meeting.id}>
                      {meeting.locationID === location.id &&
                      <p>{meeting.day + " " + meeting.time + " "}<span className="location-meeting"> {meeting.meetingName} </span> {" " + meeting.format }</p>
                      }
                    </div>
                  ))}

        </div>
      </div>
    )
  ))
}

  render() {

    return (
      <section className="locations-list open">
        <div className="locations-list-inner">
          <h1>Find Your Meeting</h1>
                <div className="day-selector">
                <label>
                        Choose Day Of Week:
                        <select id="dayofweek" value={this.state.value}
                          onChange={this.handleChange}>
                            <option value="a">All Days</option>
                            <option value="m">Monday</option>
                            <option value="t">Tuesday</option>
                            <option value="w">Wednesday</option>
                            <option value="h">Thursday</option>
                            <option value="f">Friday</option>
                            <option value="s">Saturday</option>
                            <option value="u">Sunday</option>
                        </select>
                    </label>
                </div>
            <div>
                <this.createLocation />
            </div>
        </div>
      </section>
    )
  }
}

export default TextList;
