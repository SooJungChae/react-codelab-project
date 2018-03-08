import React from 'react';
<<<<<<< HEAD
import { Home } from './Home';

class Wall extends React.Component {
  render() {
    console.log(this.props.params);
    return (
      <Home username={this.props.match.params.username} />
    );
  }
=======
import { Home } from 'containers';

class Wall extends React.Component {
    render() {        
        return(
            <Home username={this.props.params.username}/>
        );
    }
>>>>>>> master
}

export default Wall;
