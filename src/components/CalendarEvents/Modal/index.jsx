import Modal from 'react-modal'
import './styles.css'
import P from 'prop-types'
import { handleEditEvent } from '../funcs/handleEditEvent'
import { editEventsData } from '../data'
import { getFormData } from '../funcs/getFormData'
import { handleRequiredForm } from '../funcs/requiredForm'

Modal.setAppElement('#root')

export const openModal = (setIsOpen) => {
  setIsOpen(true)
}
export const closeModal = (setIsOpen, setEditState) => {
  editEventsData[0] = { title: '', date: '' }
  setIsOpen(false)
  if (setEditState != null) {
    setEditState(false)
  }
}

export const EventsModal = ({
  modalIsOpen,
  setIsOpen,
  setEventTitle,
  setEventDate,
  d,
  setD,
  editState,
  setEditState,
  setFeedBackM,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(setIsOpen, setEditState)}
      contentLabel="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <div className="modal-container">
        <div className="title-row">
          <button
            type="button"
            onClick={() => closeModal(setIsOpen, setEditState)}
          >
            x
          </button>
          <h1>{!editState ? 'Add a new event' : 'Edit a event'}</h1>
        </div>
        <div className="form-container">
          <form id="modal-form">
            <div className="form-row">
              <label>Título</label>
              <span className="required">*</span>
              <input
                type="text"
                id="title"
                placeholder="Título do evento"
                maxLength="25"
                defaultValue={editEventsData[0].title}
                onChange={handleRequiredForm}
              ></input>
            </div>
            <div className="form-row">
              <label>Data</label>
              <span className="required">*</span>
              <input
                type="date"
                id="date"
                onChange={handleRequiredForm}
                defaultValue={editEventsData[0].date}
              ></input>
            </div>
            <div className="form-row">
              <label>Começa:</label>
              <input
                type="time"
                id="begin-time"
                defaultValue={editEventsData[0].hourStart}
              ></input>
              <label>Termina:</label>
              <input
                type="time"
                id="end-time"
                defaultValue={editEventsData[0].hourEnd}
              ></input>
            </div>
            <div className="form-row">
              <label>Descrição</label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descrição"
                maxLength="40"
                defaultValue={editEventsData[0].description}
              ></input>
            </div>
            <div className="form-row" id="color-form-row">
              <label className="colorLabel">Cor do ícone</label>
              <input
                type="color"
                name="colorIcon"
                id="colorBox"
                defaultValue={
                  editEventsData[0].iconColor
                    ? editEventsData[0].iconColor
                    : '#3395ff'
                }
              ></input>
            </div>
            {!editState ? (
              <div className="add-event">
                <button
                  type="button"
                  onClick={() =>
                    getFormData(
                      setIsOpen,
                      setEventTitle,
                      setEventDate,
                      d,
                      setD,
                      setEditState,
                      setFeedBackM,
                    )
                  }
                >
                  Add event
                </button>
              </div>
            ) : (
              <div className="edit-button">
                <button
                  type="button"
                  onClick={() => {
                    handleEditEvent(null, setIsOpen, setFeedBackM)
                    closeModal(setIsOpen, setEditState)
                  }}
                >
                  Edit event
                </button>
              </div>
            )}
          </form>
        </div>
        <div className="modal-footer">
          {editState && (
            <button
              type="button"
              onClick={() => {
                handleEditEvent('delete', setIsOpen, setFeedBackM)
                closeModal(setIsOpen, setEditState)
              }}
              className="modal-footer-delete"
            >
              Delete
            </button>
          )}
          <button
            className="modal-footer-close"
            type="button"
            onClick={() => closeModal(setIsOpen, setEditState)}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

EventsModal.propTypes = {
  modalIsOpen: P.bool,
  setIsOpen: P.func,
  setEventTitle: P.func,
  setEventDate: P.func,
  d: P.number,
  setD: P.func,
  editState: P.bool,
  setEditState: P.func,
  setFeedBackM: P.func,
}
