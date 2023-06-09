import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { fetchDisabledFields } from "../../utils/fetchDisabledFieldsData";
import { ThemeContext } from "../../App";

export default function TicketUpdateModal(props) {
  const disabledFields = fetchDisabledFields();
  const {
    selectCurrentTickets,
    ticketUpdateModal,
    editTickets,
    closeModal,
    onChangeTickets,
    submitTickets,
  } = props;
const value=useContext(ThemeContext)
const theme=value.theme
  return (
    <Modal show={ticketUpdateModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>EDIT DETAILS</Modal.Title>
      </Modal.Header>
      <Modal.Body className={theme==="light"?"bg-light":"bg-black"}>
        <form onSubmit={submitTickets}>
          <div className="card submit mb-2 ">
            <h6>Ticket Id:{selectCurrentTickets._id}</h6>
          </div>

          <div className="input-group mb-2">
            <span className="input-group-text">Title </span>
            <input
              className="form-control"
              type="text"
              name="title"
              disabled={disabledFields.title}
              value={selectCurrentTickets.title}
              onChange={props.onChangeTickets}
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Assignee </span>
            <input
              className="form-control"
              type="text"
              name="assignee"
              disabled={disabledFields.assignee}
              value={selectCurrentTickets.assignee}
              onChange={onChangeTickets}
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Status </span>
            <select
              className="form-select"
              name="status"
              disabled={disabledFields.status}
              value={selectCurrentTickets.status}
              onChange={onChangeTickets}
            >
              <option value="OPEN"> OPEN </option>
              <option value="PROGRESS"> PROGRESS </option>
              <option value="CLOSED"> CLOSED </option>
              <option value="BLOCKED"> BLOCKED </option>
            </select>
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Priority </span>
            <input
              className="form-control"
              type="text"
              name="priority"
              disabled={disabledFields.ticketPriority}
              value={selectCurrentTickets.ticketPriority}
              onChange={onChangeTickets}
            />
          </div>
          <div className="input-group mb-2">
            <textarea
              type="text"
              name="description"
              disabled={disabledFields.description}
              onChange={onChangeTickets}
              className="form-control mb-2 md-textarea"
              value={selectCurrentTickets.description}
            />
          </div>
          <Button variant="warning" onClick={closeModal} className="m-3">
            Close
          </Button>
          <Button variant="primary" type="submit" className="m-3">
            Save Changes
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
