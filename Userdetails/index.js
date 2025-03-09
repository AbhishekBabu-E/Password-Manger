import {Component} from 'react'
import {v4} from 'uuid'
import Yourpasswords from '../Yourpasswords'

import './index.css'

class Userdetails extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    showpassword: false,
    ListOfPasswords: [],
    searchPass: '',
  }

  deletePass = id => {
    const {website, username, password, ListOfPasswords} = this.state

    const deletedList = ListOfPasswords.filter(ei => ei.id !== id)

    this.setState({
      ListOfPasswords: deletedList,
    })
  }

  getDisplayOfPassword = filteredPasswords => {
    const {
      website,
      username,
      password,
      ListOfPasswords,
      showpassword,
      searchPass,
    } = this.state

    return (
      <ul className="passwordsListCont">
        {filteredPasswords.map(eachItem => (
          <Yourpasswords
            key={eachItem.id}
            APassword={eachItem}
            showpassword={showpassword}
            deletePass={this.deletePass}
          />
        ))}
      </ul>
    )
  }

  onwebsite = event => {
    const {website, username, password} = this.state

    this.setState({
      website: event.target.value,
    })
  }

  onusername = event => {
    const {website, username, password} = this.state
    const {value} = event.target
    this.setState({
      username: value,
    })
  }

  onPassword = event => {
    const {website, username, password} = this.state

    this.setState({
      password: event.target.value,
    })
  }

  Add = event => {
    event.preventDefault()
    const {website, username, password, ListOfPasswords} = this.state

    const newObj = {
      id: v4(),
      Web: website,
      User: username,
      Pass: password,
    }

    this.setState(prev => ({
      ListOfPasswords: [...prev.ListOfPasswords, newObj],
      website: '',
      username: '',
      password: '',
    }))
  }

  getNoPasswordDisplay = () => {
    return (
      <div className="nopasswordsCont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          className="nopasslogo"
          alt="no passwords"
        />

        <p className="nopasswordHd">No Passwords</p>
      </div>
    )
  }

  onShowP = () => {
    const {website, username, password, ListOfPasswords, showpassword} =
      this.state

    this.setState(prev => ({
      showpassword: !prev.showpassword,
    }))
  }

  seachAPassword = event => {
    const {
      website,
      username,
      password,
      ListOfPasswords,
      showpassword,
      searchPass,
    } = this.state

    this.setState({
      searchPass: event.target.value,
    })
  }

  render() {
    const {
      website,
      username,
      password,
      ListOfPasswords,
      showpassword,
      searchPass,
    } = this.state

    const filteredPasswords = ListOfPasswords.filter(
      ei =>
        ei.User.toLowerCase().includes(searchPass.toLocaleLowerCase()) ||
        ei.Web.toLowerCase().includes(searchPass.toLocaleLowerCase()),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="Passlogo"
          alt="app logo"
        />

        <div className="userContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="pmlogo"
          />

          <form className="formCont" onSubmit={this.Add}>
            <h1 className="addpasswordHd">Add New Password</h1>

            <ul className="allInputElements">
              <li className="websiteCont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="weblogo"
                />

                <input
                  type="text"
                  className="inputtext"
                  placeholder="Enter Website"
                  onChange={this.onwebsite}
                  value={website}
                />
              </li>

              <li className="websiteCont">
                <div className="onlyImage">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="weblogo"
                  />
                </div>
                <input
                  type="text"
                  className="inputtext"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.onusername}
                />
              </li>

              <li className="websiteCont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="weblogo"
                />

                <input
                  type="password"
                  className="inputtext"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onPassword}
                />
              </li>
            </ul>

            <button className="butt" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="sub_userContainer">
          <div className="headCont">
            <h1 className="passwordOptionCounterAndHead">
              Your Passwords{' '}
              <p className="counterCont">{ListOfPasswords.length}</p>
            </h1>

            <div className="displayInputSearch">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="searchLogo"
                alt="search"
              />

              <input
                type="search"
                className="searchInput"
                placeholder="Search"
                onChange={this.seachAPassword}
                value={searchPass}
              />
            </div>
          </div>

          <hr className="hori" />

          <div className="checkboxCont">
            <input type="checkbox" id="check" onClick={this.onShowP} />
            <label htmlFor="check" className="labeltext">
              Show Passwords
            </label>
          </div>

          <div>
            {filteredPasswords.length > 0
              ? this.getDisplayOfPassword(filteredPasswords)
              : this.getNoPasswordDisplay()}
          </div>
        </div>
      </div>
    )
  }
}

export default Userdetails
