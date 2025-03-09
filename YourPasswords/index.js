import {Component} from 'react'
import './index.css'

class Yourpasswords extends Component {
  render() {
    const {APassword, showpassword, deletePass} = this.props

    const {id, Web, User, Pass} = APassword

    const onDel = () => {
      deletePass(id)
    }
    return (
      <li className="boxPass">
        <div className="FL">{User[0].toUpperCase()}</div>

        <div className="displaywupCont">
          <p className="webConthd">{Web}</p>
          <p className="userHdCont">{User}</p>
          <p className="passCont">
            {showpassword ? (
              Pass
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                className="startsLogo"
                alt="stars"
              />
            )}
          </p>
        </div>

        <button
          type="submit"
          className="delbutt"
          onClick={onDel}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="deletelogo"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default Yourpasswords
