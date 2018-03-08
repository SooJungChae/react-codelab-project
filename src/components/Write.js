import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

class Write extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        contents: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleChange(e) {
      this.setState({
          contents: e.target.value
      });
  }

  handlePost() {
        let contents = this.state.contents;
        console.log(this.props);
=======

class Write extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contents: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleChange(e) {
        this.setState({
            contents: e.target.value
        });
    }

    handlePost() {
        let contents = this.state.contents;
>>>>>>> master

        this.props.onPost(contents).then(
            () => {
                this.setState({
                    contents: ""
                });
<<<<<<< HEAD
                console.log('메모 리스트 리로드');
=======
>>>>>>> master
            }
        );
    }

<<<<<<< HEAD
  render() {
      return (
        <div className="container write">
            <div className="card">
                <div className="card-content">
                <textarea
                        className="materialize-textarea"
                        placeholder="Write down your memo"
                        value={this.state.contents}
                        onChange={this.handleChange}></textarea>
                </div>
                <div className="card-action">
                    <a onClick={this.handlePost}>POST</a>
                </div>
            </div>
        </div>
      );
  }
}

Write.propTypes = {
  onPost: PropTypes.func
};

Write.defaultProps = {
  onPost: (contents) => { console.error('post function no defined'); }
=======

    render() {
        return (
            <div className="container write">
                <div className="card">
                    <div className="card-content">
                        <textarea className="materialize-textarea" placeholder="Write down your memo"
                        value={this.state.contents}
                        onChange={this.handleChange}></textarea>
                    </div>
                    <div className="card-action">
                        <a onClick={this.handlePost}>POST</a>
                    </div>
                </div>
            </div>
        );
    }
}

Write.propTypes = {
    onPost: React.PropTypes.func
};

Write.defaultProps = {
    onPost: (contents) => { console.error('onPost not defined'); }
>>>>>>> master
};

export default Write;
