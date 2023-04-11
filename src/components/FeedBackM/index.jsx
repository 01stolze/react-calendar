import './styles.css'
import P from 'prop-types'

export const FeedBackMessages = ({ feedBackM }) => {
  return (
    <div className="feedBackMessage">
      {feedBackM == 'added' && <div id="successfulAdded">Adicionado!</div>}
      {feedBackM == 'deleted' && <div id="successfulDeleted">Deletado!</div>}
      {feedBackM == 'edited' && <div id="successfulEdited">Editado!</div>}
    </div>
  )
}

FeedBackMessages.propTypes = {
  feedBackM: P.string,
}
