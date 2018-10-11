import React, {Component} from 'react';
import ReactModal from 'react-modal';

class MapsModal extends Component {
    constructor() {
        super();
        this.handleOpenMapsModal = this.handleOpenMapsModal.bind(this);
        this.handleCloseMapsModal = this.handleCloseMapsModal.bind(this);
    }

    // Shows the modal when there is an error
    handleOpenMapsModal() {
        this.showTheMapsModal(true);
    }

    // Closes the modal when the overlay or close button are clicked
    handleCloseMapsModal() {
        this.props.showTheMapsModal(false);
    }

    render() {

        return ( <
            div >
            <
            ReactModal isOpen = {
                this.props.showMapsModal
            }
            contentLabel = "onRequestClose Example"
            onRequestClose = {
                this.handleCloseMapsModal
            }
            className = "ErrorModal"
            overlayClassName = "ErrorOverlay"
            shouldCloseOnOverlayClick = {
                true
            } >
            <p>Shoot!</p>
            <p>I'm having a problem loading the Google Maps Information.</p>
            <p>I am really sorry!</p>
            <
            button onClick = {
                this.handleCloseMapsModal
            } > Close Modal < /button>  < /
            ReactModal >
            </div>
        );
    }
}
ReactModal.setAppElement('#root');
export default MapsModal;
