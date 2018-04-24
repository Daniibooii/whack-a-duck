import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED } from '../Events';
import LoginForm from './LoginForm';
import './LandingPage/LandingPage.css';
/* for Socket.io, does this need to be directly under components?
do I need to add the other PORT info here? */

const socketUrl = "http://localhost:3231"
/* may need to adjust above: remove 3231 after testing */

/*class LandingPage extends Component { */
  export default class Layout extends Component {
  constructor(props) {
	  super(props);

	  this.state = {
	  	socket:null,
	  	user:null
	  };
	}

	componentWillMount() {
		this.initSocket()
	}

	/*
	*	Connect to and initializes the socket.
	*/
	initSocket = ()=>{
		const socket = io(socketUrl)

		socket.on('connect', ()=>{
			console.log("Connected");
		})

		this.setState({socket})
	}

	/*
	* 	Sets the user property in state
	*	@param user {id:number, name:string}
	*/
	setUser = (user)=>{
		const { socket } = this.state
		socket.emit(USER_CONNECTED, user);
		this.setState({user})
	}
          render() {
        		const { title } = this.props
        		const { socket, user } = this.state
        		return (
              <div className="LandingPage-main">
                  <header className="LandingPage-header">
                    <h1 className="LandingPage-title">Welcome to Whack-a-Duck!</h1>
                  </header>
                  <LoginForm socket={socket} setUser={this.setUser} />
                  <p className="LandingPage-intro">
                    If you start as a <strong>whacker</strong>, get whacking!<br />
                    Move with the mouse and use [button] to whack.
                    If you start as a <strong>duck</strong>, eat the colored balls and avoid being whacked!<br />
                    Use the mouse to move; hitting <strong>S</strong> will allow you to dive, but you can only hold your breath for so long.< br/>
                    This game will test your <strong>react</strong>ions!
                </p>
              </div>
        		);
        	}
        }



/*export default LandingPage;*/




// Socket.io template code below
// Enclosing function
/*function() {

    IO {
        All code related to Socket.IO connections goes here.
    }

    App {
        Generic game logic code.

        Host {
            Game logic for the 'Host' (big) screen.
        }

        Player {
            Game logic specific to 'Player' screens.
        }
    }
}*/
