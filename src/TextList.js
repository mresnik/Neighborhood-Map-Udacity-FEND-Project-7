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
    const { locationsData, markers, showTheModal, modalInfo } = this.props;
    const locations = locationsData;
    const modal = showTheModal;
    const modalinfo = modalInfo;
    const theLocations = document.getElementsByClassName('location-name');
    for(let i = 0; i < theLocations.length; i++) {
          theLocations[i].addEventListener("click", function() {
            modalinfo(this.innerHTML)
            markers.map((marker) => (
              marker.title === this.innerHTML &&
              setTimeout(function() {
              modal(true); }, 1) &&
              window.google.maps.event.trigger(marker, 'click')
            ))
      })
    }

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

  const locations = this.props.locationsData;
  const meetings = this.props.meetingsData;
  const markers = this.props.markers;
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

render(){
  const days = [
    ['a', 'All Days'],
    ['m', 'Monday'],
    ['t', 'Tuesday'],
    ['w', 'Wednesday'],
    ['h', 'Thursday'],
    ['f', 'Friday'],
    ['s', 'Saturday'],
    ['u', 'Sunday']
  ];
  const dropdownOptions = () => (
    days.map(day => (
      <option key={day[0]} value={day[0]}>{day[1]}</option>
    ))
  )
  return (
    <section className="locations-list open">
      <div className="locations-list-inner">
        <h1>Find Your Meeting</h1>
        <div className="day-selector">
          <label>
            Choose Day Of Week:
            <select
              id="dayofweek"
              value={this.state.value}
              onChange={this.handleChange}
            >
              {dropdownOptions()}
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
