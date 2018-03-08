import React from 'react';
import TimeAgo from 'react-timeago';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Memo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      value: props.data.contents
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleStar = this.handleStar.bind(this);
  }

  toggleEdit() {
    if(this.state.editMode) {
      let id = this.props.data._id;
      let index = this.props.index;
      let contents = this.state.value;

      this.props.onEdit(id, index, contents).then( () => {
        this.setState({
          editMode: !this.state.editMode
        });
      })
    } else {
      this.setState({
        editMode: !this.state.editMode
      });
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleRemove(e) {
    let id = this.props.data._id;
    let index = this.props.index;
    this.props.onRemove(id, index);
  }

  handleStar() {
    let id = this.props.data._id;
    let index = this.props.index;
    this.props.onStar(id, index);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let current = {
      props: this.props,
      state: this.state
    };

    let next = {
      props: nextProps,
      state: nextState
    }
    let update = JSON.stringify(current) !== JSON.stringify(next);
    return update;
  }
  render() {

      var { data, ownership } = this.props;



      //console.log(data._id);

      const dropDownMenu = (
          <div className="option-button">
              <a className='dropdown-button'
                   id={`dropdown-button-${data._id}`}
                   data-activates={`dropdown-${data._id}`}>
                  <i className="material-icons icon-button">more_vert</i>
              </a>
              <ul id={`dropdown-${this.props.data._id}`} className='dropdown-content'>
                  <li><a onClick={this.toggleEdit}>Edit</a></li>
                  <li><a onClick={this.handleRemove}>Remove</a></li>
              </ul>
          </div>
      );

      let editedInfo = (
        <span style={{color: '#AAB5BC'}}> Edited <TimeAgo date={this.props.data.date.edited} live={true} /></span>
      )

      let starStyle = (this.props.data.starred.indexOf(this.props.currentUser) > -1) ? { color: '#ff9980' } : {} ;

      const memoView = (
        <div className="card">
            <div className="info">
                <Link to={`/wall/${this.props.data.writer}`} className="username">{this.props.data.writer}</Link> wrote a log · <TimeAgo date={this.props.data.date.created}/>
                { this.props.data.is_edited ? editedInfo : undefined }
                { ownership ? dropDownMenu : undefined }
            </div>
            <div className="card-content">
                {data.contents}
            </div>
            <div className="footer">
                <i className="material-icons log-footer-icon star icon-button"
                  style={starStyle}
                  onClick={this.handleStar}>star</i>
                <span className="star-count">{data.starred.length}</span>
            </div>
        </div>
      );

      const editView = (
        <div className="write">
          <div className="card">
            <div className="card-content">
              <textarea className="materialize-textarea"
                    value={this.state.value}
                    onChange={this.handleChange}></textarea>
            </div>
            <div className="card-action">
              <a onClick={this.toggleEdit}>OK</a>
            </div>
          </div>
        </div>
      );

      return (
          <div className="container memo">
          <h2>메모리스트</h2>
              { this.state.editMode ? editView : memoView }
          </div>
      );
    }

  componentDidMount() {
    //console.log('componentDidMount ' + this.props.data._id);
      // WHEN COMPONENT MOUNTS, INITIALIZE DROPDOWN
      // (TRIGGERED WHEN REFRESHED)
      $('#dropdown-button-'+this.props.data._id).dropdown({
          belowOrigin: true // Displays dropdown below the button
      });
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate' +this.props.data._id);
      // WHEN COMPONENT UPDATES, INITIALIZE DROPDOWN
      // (TRIGGERED WHEN LOGGED IN)
      $('#dropdown-button-'+this.props.data._id).dropdown({
          belowOrigin: true // Displays dropdown below the button
      });
  }

}

Memo.propTypes = {
    data: PropTypes.object,
    ownership: PropTypes.bool,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    onStar: PropTypes.func,
    index: React.PropTypes.number
=======
import { Link } from 'react-router';

class Memo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            value: props.data.contents
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleStar = this.handleStar.bind(this);
    }

    componentDidMount() {
        // WHEN COMPONENT MOUNTS, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN REFRESHED)
        $('#dropdown-button-'+this.props.data._id).dropdown({
            belowOrigin: true // Displays dropdown below the button
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        let current = {
            props: this.props,
            state: this.state
        };

        let next = {
            props: nextProps,
            state: nextState
        };

        let update = JSON.stringify(current) !== JSON.stringify(next);
        return update;
    }

    componentDidUpdate(prevProps, prveState) {
        // WHEN COMPONENT UPDATES, INITIALIZE DROPDOWN
        // (TRIGGERED WHEN LOGGED IN)
        $('#dropdown-button-'+this.props.data._id).dropdown({
            belowOrigin: true // Displays dropdown below the button
        });

        if(this.state.editMode) {
            // Trigger key up event to the edit input so that it auto-resizes (Materializecss Feature)
            $(this.input).keyup();
        }
    }

    toggleEdit() {
        if(this.state.editMode) {
            let id = this.props.data._id;
            let index = this.props.index;
            let contents = this.state.value;

            this.props.onEdit(id, index, contents).then(() => {
                this.setState({
                    editMode: !this.state.editMode
                });
            });
        } else {
            this.setState({
                editMode: !this.state.editMode
            });
        }

    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleRemove() {
        const id = this.props.data._id;
        const index = this.props.index;

        this.props.onRemove(id, index);
    }

    handleStar() {
        const id = this.props.data._id;
        const index = this.props.index;

        this.props.onStar(id, index);
    }

    render() {
        var { data, ownership } = this.props;

        const dropDownMenu = (
            <div className="option-button">
                <a className='dropdown-button'
                     id={`dropdown-button-${data._id}`}
                     data-activates={`dropdown-${data._id}`}>
                    <i className="material-icons icon-button">more_vert</i>
                </a>
                <ul id={`dropdown-${data._id}`} className='dropdown-content'>
                    <li><a onClick={this.toggleEdit}>Edit</a></li>
                    <li><a onClick={this.handleRemove}>Remove</a></li>
                </ul>
            </div>
        );

        // EDITED info
        const editedInfo = (
            <span style={{color: '#AAB5BC'}}> · Edited <TimeAgo date={this.props.data.date.edited} live={true}/></span>
        );

        const starStyle = (this.props.data.starred.indexOf(this.props.currentUser) > -1) ? { color: '#ff9980' } : { };

        const memoView = (
            <div className="card">
                <div className="info">
                    <Link to={`/wall/${this.props.data.writer}`} className="username">{data.writer}</Link> wrote a log · <TimeAgo date={data.date.created}/>
                    { this.props.data.is_edited ? editedInfo : undefined }
                    { ownership ? dropDownMenu : undefined }
                </div>
                <div className="card-content">
                    {data.contents}
                </div>
                <div className="footer">
                    <i className="material-icons log-footer-icon star icon-button" style={starStyle} onClick={this.handleStar}>star</i>
                    <span className="star-count">{data.starred.length}</span>
                </div>
            </div>
        );

        const editView = (
            <div className="write">
                <div className="card">
                    <div className="card-content">
                        <textarea
                            ref={ ref => { this.input = ref; } }
                            className="materialize-textarea"
                            value={this.state.value}
                            onChange={this.handleChange}></textarea>
                    </div>
                    <div className="card-action">
                        <a onClick={this.toggleEdit}>OK</a>
                    </div>
                </div>
            </div>
        );

        return(
            <div className="container memo">
               { this.state.editMode ? editView : memoView }
           </div>
        );
    }
}

Memo.propTypes = {
    data: React.PropTypes.object,
    ownership: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    onRemove: React.PropTypes.func,
    onStar: React.PropTypes.func,
    currentUser: React.PropTypes.string
>>>>>>> master
};

Memo.defaultProps = {
    data: {
<<<<<<< HEAD
        _id: 'id1234567890',
        writer: 'Writer',
        contents: 'Contents',
        is_edited: false,
        date: {
            edited: new Date(),
            created: new Date()
        },
=======
        _id: 'id12367890',
        writer: 'Writer',
        contents: 'Contents',
        is_edited: false,
        date: { edited: new Date(), created: new Date() },
>>>>>>> master
        starred: []
    },
    ownership: true,
    onEdit: (id, index, contents) => {
<<<<<<< HEAD
      console.log('onEdit function not defined');
    },
    onRemove: (id, index) => {
      console.error('remove function not defined');
    },
    onStar: (id, index) => {
    console.error('star function not defined');
    },
    starStatus: {},
    currentUser: '',
    index: -1
}
=======
        console.error('onEdit not defined');
    },
    onRemove: (id, index) => {
        console.error('onRemove not defined');
    },
    onStar: (id, index) => {
        console.error('onStar not defined');
    },
    currentUser: ''
};
>>>>>>> master

export default Memo;
