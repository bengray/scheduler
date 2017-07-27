import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, setItem } from '../actions/items';
import { ButtonGroup, Button, Modal } from 'react-bootstrap';

class TimeSlots extends Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            showModal: false,
            nameInput: ""
        };
    }

    handleChange(event) {
        this.setState({ nameInput: event.target.value });
    }

    open(item) {
        this.setState({ showModal: true });
        // this.props.setItem(item);
    }

    close() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <ButtonGroup className="col-xs-12" vertical>
                    {this.props.items.map((item) => (
                        <div>
                            <Button className="col-xs-2 col-xs-offset-5"
                                    bsStyle={item.scheduled === "true" ? "danger" : "default"}
                                    onClick={() => this.open(item)}
                            >
                                {item.displayName}
                            </Button>
                        </div>
                    ))}
                </ButtonGroup>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter a name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input onChange={() => this.handleChange} placeholder="Enter a name" value={this.state.name}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsSize="small"
                                onClick={() => console.log("hello")}
                        >
                            Save
                        </Button>
                    </Modal.Footer>

                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(fetchItems()),
        setItem: (item) => dispatch(setItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlots);
