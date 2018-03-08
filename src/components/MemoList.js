import React from 'react';
<<<<<<< HEAD
import { Memo } from '../components';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MemoList extends React.Component {
  // 전달받은 props 값이 달라질 때만 render() 메소드를 실행한다.
  shoudComponentUpdate(nextProps, nextState) {
    let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
    return update;
  }

    render() {
      const mapToComponents = data => {
          return data.map((memo, i) => {

              return (<Memo
                          data={memo}
                          ownership={ (memo.writer === this.props.currentUser) }
                          key={memo._id}
                          index={i}
                          onEdit={this.props.onEdit}
                          onRemove={this.props.onRemove}
                          onStar={this.props.onStar}
                          currentUser={this.props.currentUser}
              />);
          });
      };

      return (
          <div>
            <ReactCSSTransitionGroup transitionName="memo"
                            transitionEnterTimeout={2000}
                            transitionLeaveTimeout={1000}>
                {mapToComponents(this.props.data)}
            </ReactCSSTransitionGroup>
          </div>
      );
=======
import { Memo } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MemoList extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        let update = JSON.stringify(this.props) !== JSON.stringify(nextProps);
        return update;
    }

    render() {

        

        const mapToComponents = data => {
            return data.map((memo, i) => {
                return (
                    <Memo
                        data={memo}
                        ownership={ memo.writer===this.props.currentUser }
                        key={memo._id}
                        onEdit={this.props.onEdit}
                        onRemove={this.props.onRemove}
                        onStar={this.props.onStar}
                        index={i}
                        currentUser={this.props.currentUser}
                    />
                );
            });
        };

        return(
            <div>
                <ReactCSSTransitionGroup
                    transitionName="memo"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={1000}>
                    {mapToComponents(this.props.data)}
                </ReactCSSTransitionGroup>
            </div>
        );
>>>>>>> master
    }
}

MemoList.propTypes = {
<<<<<<< HEAD
    data: PropTypes.array,
    currentUser: PropTypes.string,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
    onStar: PropTypes.func
=======
    data: React.PropTypes.array,
    currentUser: React.PropTypes.string,
    onEdit: React.PropTypes.func,
    onRemove: React.PropTypes.func,
    onStar: React.PropTypes.func
>>>>>>> master
};

MemoList.defaultProps = {
    data: [],
    currentUser: '',
    onEdit: (id, index, contents) => {
<<<<<<< HEAD
      console.error('edit function not defined');
    },
    onRemove: (id, index) => {
      console.error('remove function not defined');
    },
    onStar: (id, index) => {
      console.error('star function not defined');
    }
};


=======
        console.error('onEdit not defined');
    },
    onRemove: (id, index) => {
        console.error('onRemove not defined');
    },
    onStar: (id, index) => {
        console.error('onStar not defined');
    }
};

>>>>>>> master
export default MemoList;
