import React, {Component} from 'react';
import ReactModal from 'react-modal';

class ErrorModal extends Component {
    constructor() {
        super();
        this.handleOpenErrorModal = this.handleOpenErrorModal.bind(this);
        this.handleCloseErrorModal = this.handleCloseErrorModal.bind(this);
    }

    // Shows the modal when there is an error
    handleOpenErrorModal() {
        this.showTheErrorModal(true);
    }

    // Closes the modal when the overlay or close button are clicked
    handleCloseErrorModal() {
        this.props.showTheErrorModal(false);
    }

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
