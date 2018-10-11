import React, {Component} from 'react';
import ReactModal from 'react-modal';

class ErrorModal extends Component {
    constructor() {
        super();
        this.handleOpenErrorModal = this.handleOpenErrorModal.bind(this);
        this.handleCloseErrorModal = this.handleCloseErrorModal.bind(this);
    }

    // Shows the modal when list item is clicked
    handleOpenErrorModal() {
        this.showTheErrorModal(true);
    }

    // Closes the modal when the overlay or close button are clicked
    handleCloseErrorModal() {
        this.props.showTheErrorModal(false);
    }

    // Creates modal content
  /*  getInfo = () => {
        return (
            locationsData.map((location) => (
                location.name === modalInfoId &&
                <
                div key = {
                    location.id
                } >
                <
                p className = "ModalTitle" > Check out these places close to {
                    location.name
                }
                for a cup of coffee after the meeting: < /p> <
                ul className = "VenueDetails" >
                <
                li className = "ModalTitle" > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][0] &&
                    location.coffee[0][0].venue &&
                    location.coffee[0][0].venue.name
                } <
                /li> <
                li > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][0] &&
                    location.coffee[0][0].venue &&
                    location.coffee[0][0].venue.location &&
                    location.coffee[0][0].venue.location.formattedAddress[0]
                } <
                /li> <
                li > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][0] &&
                    location.coffee[0][0].venue &&
                    location.coffee[0][0].venue.location &&
                    location.coffee[0][0].venue.location.formattedAddress[1]
                } <
                /li> < /
                ul > <
                ul className = "VenueDetails" >
                <
                li className = "ModalTitle" > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][1] &&
                    location.coffee[0][1].venue &&
                    location.coffee[0][1].venue.name
                } <
                /li> <
                li > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][1] &&
                    location.coffee[0][1].venue &&
                    location.coffee[0][1].venue.location &&
                    location.coffee[0][1].venue.location.formattedAddress[0]
                } <
                /li> <
                li > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][1] &&
                    location.coffee[0][1].venue &&
                    location.coffee[0][1].venue.location &&
                    location.coffee[0][1].venue.location.formattedAddress[1]
                } <
                /li> < /
                ul > <
                ul className = "VenueDetails" >
                <
                li className = "ModalTitle" > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][2] &&
                    location.coffee[0][2].venue &&
                    location.coffee[0][2].venue.name
                } <
                /li> <
                li > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][2] &&
                    location.coffee[0][2].venue &&
                    location.coffee[0][2].venue.location &&
                    location.coffee[0][2].venue.location.formattedAddress[0]
                } <
                /li> <
                li > {
                    location.coffee &&
                    location.coffee[0] &&
                    location.coffee[0][2] &&
                    location.coffee[0][2].venue &&
                    location.coffee[0][2].venue.location &&
                    location.coffee[0][2].venue.location.formattedAddress[1]
                } <
                /li> < /
                ul > <
                /div>
            )))
    }*/

    render() {

        return ( <
            div >
            <
            ReactModal isOpen = {
                this.props.showErrorModal
            }
            contentLabel = "onRequestClose Example"
            onRequestClose = {
                this.handleCloseErrorModal
            }
            className = "ErrorModal"
            overlayClassName = "ErrorOverlay"
            shouldCloseOnOverlayClick = {
                true
            } >
            <p>Shoot!</p>
            <p>I'm having a problem loading Coffee Shop location info
            from Foursquare.</p>
            <p>I am really sorry!</p>
            <
            button onClick = {
                this.handleCloseErrorModal
            } > Close Modal < /button>  < /
            ReactModal >
            </div>
        );
    }
}
ReactModal.setAppElement('#root');
export default ErrorModal;
