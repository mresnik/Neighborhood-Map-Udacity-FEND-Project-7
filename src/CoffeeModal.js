import React, {Component} from 'react';
import ReactModal from 'react-modal';

class CoffeeModal extends Component {
    constructor() {
        super();
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    // Shows the modal when list item is clicked
    handleOpenModal() {
        this.showTheModal(true);
    }

    // Closes the modal when the overlay or close button are clicked
    handleCloseModal() {
        this.props.showTheModal(false);
    }

    // Creates modal content
    getInfo = () => {
        let locationsData = this.props.locationsData;
        let modalInfoId = this.props.modalInfoId;
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
    }

    render() {

        return ( <
            div >
            <
            ReactModal isOpen = {
                this.props.showModal
            }
            contentLabel = "onRequestClose Example"
            onRequestClose = {
                this.handleCloseModal
            }
            className = "Modal"
            overlayClassName = "Overlay"
            shouldCloseOnOverlayClick = {
                true
            } >
            <
            this.getInfo / >

            <
            button onClick = {
                this.handleCloseModal
            } > Close Modal < /button> <
            img id = "foursquare"
            alt = "Foursquare Logo"
            src = {
                require('./images/foursquare.png')
            }
            /> < /
            ReactModal > <
            /div>
        );
    }
}
ReactModal.setAppElement('#root');
export default CoffeeModal;
