import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { Write, MemoList } from '../components';
import { memoPostRequest,
        memoListRequest,
        memoEditRequest,
        memoRemoveRequest,
        memoStarRequest } from '../actions/memo';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
      super(props);

      this.handlePost = this.handlePost.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.handleStar = this.handleStar.bind(this);

      this.loadNewMemo = this.loadNewMemo.bind(this);
      this.loadOldMemo = this.loadOldMemo.bind(this);

      this.state = {
        loadingState: false,
        initiallyLoaded: false
      };
  }

  componentDidMount() {
    // 5초마다 새 메모 로딩
    const loadMemoLoop = () => {
      this.loadNewMemo().then(
        () => {
          //this.memoLoaderTimeoutId = setTimeout(loadMemoLoop, 5000);
        }
      );
    };

    const loadUntilScrollable = () => {
      // IF THE SCROLLBAR DOES NOT EXIST,
      if($("body").height() < $(window).height()) {
        this.loadOldMemo().then(
            () => {
                // DO THIS RECURSIVELY UNLESS IT'S LAST PAGE
                if(!this.props.isLast) {
                    loadUntilScrollable();
                }
            }
        );
      }
    };

    this.props.memoListRequest(true, undefined, undefined, this.props.username).then(
        () => {
          // BEGIN NEW MEMO LOADING LOOP
          setTimeout(loadUntilScrollable, 1000);
          // begin new memo loading loop
          loadMemoLoop();

          this.setState({
            initiallyLoaded: true
          });
        }
    );
    //
    // $(window).scroll(() => {
    //     // WHEN HEIGHT UNDER SCROLLBOTTOM IS LESS THEN 250
    //     if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
    //         console.log("LOAD NOW");
    //         this.setState({
    //           loadingState: true
    //         });
    //     }
    //     else{
    //       if(this.state.loadingState){
    //         this.setState({
    //           loadingState: false
    //         });
    //       }
    //     }
    // });
  }

  componentWillUnmount() {
      // STOPS THE loadMemoLoop
      clearTimeout(this.memoLoaderTimeoutId);

      // REMOVE WINDOWS SCROLL LISTENER
       $(window).unbind();

       this.setState({
         initiallyLoaded: false
       })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.username !== prevProps.username) {
      this.componentWillUnmount();
      this.componentDidMount();
    }
  }

  //.새 메모 읽어들이기
  loadNewMemo() {
      // CANCEL IF THERE IS A PENDING REQUEST
      if(this.props.listStatus === 'WAITING') {
          return new Promise((resolve, reject)=> {
              resolve();
          });
      }
          // promise 를 리턴한 이유는, write 에서 해당 메소드를 입력하고
          // then 을 사용할 수 있게 만들기 위함.

      // IF PAGE IS EMPTY, DO THE INITIAL LOADING
      if(this.props.memoData.length === 0 )
          return this.props.memoListRequest(true);

      return this.props.memoListRequest(false, 'new', this.props.memoData[0]._id, this.props.username);
  }

  loadOldMemo() {
    // CANCEL IF USER IS READING THE LAST PAGE
    if(this.props.isLast) {
        return new Promise(
            (resolve, reject)=> {
                resolve();
            }
        );
    }

    // GET ID OF THE MEMO AT THE BOTTOM
    let lastId = this.props.memoData[this.props.memoData.length - 1]._id;

    // START REQUEST
    return this.props.memoListRequest(false, 'old', lastId, this.props.username).then(() => {
        // IF IT IS LAST PAGE, NOTIFY
        if(this.props.isLast) {
            Materialize.toast('You are reading the last page', 2000);
        }
    });
}

  /* POST MEMO */
  handlePost(contents) {
      return this.props.memoPostRequest(contents).then(
          () => {
              if(this.props.postStatus.status === "SUCCESS") {
                  // TRIGGER LOAD NEW MEMO
                  // TO BE IMPLEMENTED
                  this.loadNewMemo().then(
=======
import { Write, MemoList } from 'components';
import {
    memoPostRequest,
    memoListRequest,
    memoEditRequest,
    memoRemoveRequest,
    memoStarRequest
} from 'actions/memo';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleStar = this.handleStar.bind(this);
        this.loadNewMemo = this.loadNewMemo.bind(this);
        this.loadOldMemo = this.loadOldMemo.bind(this);
        this.state = {
            loadingState: false,
            initiallyLoaded: false
        };
    }

    componentDidMount() {
        const loadMemoLoop = () => {
            this.loadNewMemo().then(
                () => {
                    this.memoLoaderTimeoutId = setTimeout(loadMemoLoop, 5000);
                }
            );
        };

        const loadUntilScrollable = () => {
            // IF THE SCROLLBAR DOES NOT EXIST,
            if($("body").height() < $(window).height()) {
                this.loadOldMemo().then(
                    () => {
                        // DO THIS RECURSIVELY UNLESS IT'S LAST PAGE
                        if(!this.props.isLast) {
                            loadUntilScrollable();
                        }
                    }
                );
            }
        };


        this.props.memoListRequest(true, undefined, undefined, this.props.username).then(
            () => {
                setTimeout(loadUntilScrollable, 1000);
                loadMemoLoop();
                this.setState({
                    initiallyLoaded: true
                });
            }
        );

        $(window).scroll(() => {
            // WHEN HEIGHT UNDER SCROLLBOTTOM IS LESS THEN 250
            if ($(document).height() - $(window).height() - $(window).scrollTop() < 250) {
                if(!this.state.loadingState) {
                    this.loadOldMemo();
                    this.setState({
                        loadingState: true
                    });
                }
            } else {
                if(this.state.loadingState) {
                    this.setState({
                        loadingState: false
                    });
                }
            }
        });
    }

    componentWillUnmount() {
        // STOPS THE loadMemoLoop
        clearTimeout(this.memoLoaderTimeoutId);

        // REMOVE WINDOWS SCROLL LISTENER
        $(window).unbind();

        this.setState({
            initiallyLoaded: false
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.username !== prevProps.username) {
            this.componentWillUnmount();
            this.componentDidMount();
        }
    }

    loadNewMemo() {
         // CANCEL IF THERE IS A PENDING REQUEST
        if(this.props.listStatus === 'WAITING') {
            return new Promise((resolve, reject) => {
                resolve();
            });
        }

        // IF PAGE IS EMPTY, DO THE INITIAL LOADING
        if(this.props.memoData.length === 0 )
            return this.props.memoListRequest(true);



        return this.props.memoListRequest(false, 'new', this.props.memoData[0]._id, this.props.username);
    }

    loadOldMemo() {
        // CANCEL IF USER IS READING THE LAST PAGE
        if(this.props.isLast) {
            return new Promise(
                (resolve, reject)=> {
                    resolve();
                }
            );
        }

        // GET ID OF THE MEMO AT THE BOTTOM
        let lastId = this.props.memoData[this.props.memoData.length - 1]._id;

        // START REQUEST
        return this.props.memoListRequest(false, 'old', lastId, this.props.username).then(() => {
            // IF IT IS LAST PAGE, NOTIFY
            if(this.props.isLast) {
                Materialize.toast('You are reading the last page', 2000);
            }
        });
    }

    handlePost(contents) {
        return this.props.memoPostRequest(contents).then(
            () => {
                if(this.props.postStatus.status === "SUCCESS") {
                    // TRIGGER LOAD NEW MEMO
                    // TO BE IMPLEMENTED
                    this.loadNewMemo().then(
>>>>>>> master
                        () => {
                            Materialize.toast("Success!", 2000);
                        }
                    );
<<<<<<< HEAD
              } else {
                  /*
                      ERROR CODES
                          1: NOT LOGGED IN
                          2: EMPTY CONTENTS
                  */
                  let $toastContent;
                  switch(this.props.postStatus.error) {
                      case 1:
                          // IF NOT LOGGED IN, NOTIFY AND REFRESH AFTER
                          $toastContent = $('<span style="color: #FFB4BA">You are not logged in</span>');
                          Materialize.toast($toastContent, 2000);
                          setTimeout(()=> {location.reload(false);}, 2000);
                          break;
                      case 2:
                          $toastContent = $('<span style="color: #FFB4BA">Please write something</span>');
                          Materialize.toast($toastContent, 2000);
                          break;
                      default:
                          $toastContent = $('<span style="color: #FFB4BA">Something Broke</span>');
                          Materialize.toast($toastContent, 2000);
                          break;
                  }
              }
          }
      );
    }

  handleEdit(id, index, contents) {
    return this.props.memoEditRequest(id, index, contents).then(
      () => {
        if(this.props.editStatus.status === "SUCCESS") {
          Materialize.toast('Success!', 2000);
        } else {
          /*
              ERROR CODES
                  1: INVALID ID,
                  2: EMPTY CONTENTS
                  3: NOT LOGGED IN
                  4: NO RESOURCE
                  5: PERMISSION FAILURE
          */
          let errorMessage = [
              'Something broke',
              'Please write soemthing',
              'You are not logged in',
              'That memo does not exist anymore',
              'You do not have permission'
          ];

          let error = this.props.editStatus.error;

          // NOTIFY ERROR
          let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[error - 1] + '</span>');
          Materialize.toast($toastContent, 2000);

          // IF NOT LOGGED IN, REFRESH THE PAGE AFTER 2 SECONDS
          if(error === 3) {
              setTimeout(()=> {location.reload(false)}, 2000);
          }
        }
      }
    )
  }

  handleRemove(id, index) {
    return this.props.memoRemoveRequest(id, index).then(
      () => {
        if(this.props.removeStatus.status === "SUCCESS") {
        // LOAD MORE MEMO IF THERE IS NO SCROLLBAR
        // 1 SECOND LATER. (ANIMATION TAKES 1SEC)
        setTimeout(() => {
            if($("body").height() < $(window).height()) {
                this.loadOldMemo();
            }
        }, 1000);
      } else {
        // ERROR
        /*
            DELETE MEMO: DELETE /api/memo/:id
            ERROR CODES
                1: INVALID ID
                2: NOT LOGGED IN
                3: NO RESOURCE
                4: PERMISSION FAILURE
        */
        let errorMessage = [
            'Something broke',
            'You are not logged in',
            'That memo does not exist',
            'You do not have permission'
        ];

         // NOTIFY ERROR
        let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.removeStatus.error - 1] + '</span>');
        Materialize.toast($toastContent, 2000);


        // IF NOT LOGGED IN, REFRESH THE PAGE
        if(this.props.removeStatus.error === 2) {
            setTimeout(()=> {location.reload(false)}, 2000);
        }
      }
      }
    )
  }

  handleStar(id, index) {
    this.props.memoStarRequest(id, index).then(
      () => {
        if(this.props.starStatus.status !== 'SUCCESS') {
          /*
              TOGGLES STAR OF MEMO: POST /api/memo/star/:id
              ERROR CODES
                  1: INVALID ID
                  2: NOT LOGGED IN
                  3: NO RESOURCE
          */
          let errorMessage= [
              'Something broke',
              'You are not logged in',
              'That memo does not exist'
          ];


          // NOTIFY ERROR
          let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.starStatus.error - 1] + '</span>');
          Materialize.toast($toastContent, 2000);


          // IF NOT LOGGED IN, REFRESH THE PAGE
          if(this.props.starStatus.error === 2) {
              setTimeout(()=> {location.reload(false)}, 2000);
          }
        }
      }
    )
  }

  handleSearch(id) {
    return this.props.searchRequest(id).then(

    )
  }

  render() {
    const nothing = (
      <div>
        <h3>로그인해주세요.</h3>
      </div>
    )

    const write = (
      <Write
        onPost={this.handlePost}
      />
    )

    const emptyView = (
      <div className="container">
        <div className="empty-page">
          <b>{this.props.username}</b> isn't registered or hasn't written any memo
        </div>
      </div>
    );

    const wallHeader = (
      <div>
        <div className="container wall-info">
          <div className="card wall-info blue lighten-2 white-text">
            <div className="card-content">
              {this.props.username}
            </div>
          </div>
        </div>
        { this.props.memoData.length === 0 && this.state.initiallyLoaded ? emptyView : undefined }
      </div>
    );

    return (
      <div className="wrapper">
        {typeof this.props.username !== "undefined" ? wallHeader : undefined }
        { this.props.isLoggedIn && typeof this.props.username === "undefined" ? write : nothing }
        <MemoList data={this.props.memoData}
                  currentUser={this.props.currentUser}
                  onEdit={this.handleEdit}
                  onRemove={this.handleRemove}
                  onStar={this.handleStar} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.status.isLoggedIn,
        currentUser: state.authentication.status.currentUser,
        postStatus: state.memo.post,
=======
                } else {
                    /*
                        ERROR CODES
                            1: NOT LOGGED IN
                            2: EMPTY CONTENTS
                    */

                    let $toastContent;
                    switch(this.props.postStatus.error) {
                        case 1:
                            // IF NOT LOGGED IN, NOTIFY AND REFRESH AFTER
                            $toastContent = $('<span style="color: #FFB4BA">You are not logged in</span>');
                            Materialize.toast($toastContent, 2000);
                            setTimeout(()=> {location.reload(false);}, 2000);
                            break;
                        case 2:
                            $toastContent = $('<span style="color: #FFB4BA">Please write something</span>');
                            Materialize.toast($toastContent, 2000);
                            break;
                        default:
                            $toastContent = $('<span style="color: #FFB4BA">Something Broke</span>');
                            Materialize.toast($toastContent, 2000);
                            break;
                    }
                }
            }
        );
    }

    handleEdit(id, index, contents) {
        return this.props.memoEditRequest(id, index, contents).then(() => {
            if(this.props.editStatus.status === 'SUCCESS') {
                Materialize.toast('Success!', 2000);
            } else {
                /*
                       ERROR CODES
                           1: INVALID ID,
                           2: EMPTY CONTENTS
                           3: NOT LOGGED IN
                           4: NO RESOURCE
                           5: PERMISSION FAILURE
                */
                let errorMessage = [
                        'Something broke',
                        'Please write soemthing',
                        'You are not logged in',
                        'That memo does not exist anymore',
                        'You do not have permission'
                    ];

                let error = this.props.editStatus.error;

                // NOTIFY ERROR
                let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[error - 1] + '</span>');
                Materialize.toast($toastContent, 2000);

                // IF NOT LOGGED IN, REFRESH THE PAGE AFTER 2 SECONDS
                if(error === 3) {
                    setTimeout( ()=> {location.reload(false);}, 2000);
                }


            }
        });
    }

    handleRemove(id, index) {
        this.props.memoRemoveRequest(id, index).then(
            () => {
                if(this.props.removeStatus.status === "SUCCESS") {
                    setTimeout(() => {
                        if($("body").height() < $(window).height()) {
                            this.loadOldMemo();
                        }
                    }, 1000);
                } else {
                    /*
                    DELETE MEMO: DELETE /api/memo/:id
                    ERROR CODES
                        1: INVALID ID
                        2: NOT LOGGED IN
                        3: NO RESOURCE
                        4: PERMISSION FAILURE
                    */
                    let errorMessage = [
                        'Something broke',
                        'You are not logged in',
                        'That memo does not exist',
                        'You do not have permission'
                    ];

                     // NOTIFY ERROR
                    let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.removeStatus.error - 1] + '</span>');
                    Materialize.toast($toastContent, 2000);


                    // IF NOT LOGGED IN, REFRESH THE PAGE
                    if(this.props.removeStatus.error === 2) {
                        setTimeout(()=> {location.reload(false);}, 2000);
                    }
                }
            }
        );
    }

    handleStar(id, index) {
        this.props.memoStarRequest(id, index).then(
            () => {
                if(this.props.starStatus.status !== "SUCCESS") {
                    /*
                        TOGGLES STAR OF MEMO: POST /api/memo/star/:id
                        ERROR CODES
                            1: INVALID ID
                            2: NOT LOGGED IN
                            3: NO RESOURCE
                    */
                    let errorMessage= [
                        'Something broke',
                        'You are not logged in',
                        'That memo does not exist'
                    ];


                    // NOTIFY ERROR
                    let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.starStatus.error - 1] + '</span>');
                    Materialize.toast($toastContent, 2000);


                    // IF NOT LOGGED IN, REFRESH THE PAGE
                    if(this.props.starStatus.error === 2) {
                        setTimeout(()=> {location.reload(false);}, 2000);
                    }
                }
            }
        );
    }

    render() {
        const write = (<Write onPost={this.handlePost}/>);

        const emptyView = (
            <div className="container">
                <div className="empty-page">
                    <b>{this.props.username}</b> isn't registered or hasn't written any memo
                </div>
            </div>
        );

        const wallHeader = (
            <div>
                <div className="container wall-info">
                    <div className="card wall-info blue lighten-2 white-text">
                        <div className="card-content">
                            {this.props.username}
                        </div>
                    </div>
                </div>
                { this.state.initallyLoaded  && this.props.memoData.length === 0 ? emptyView : undefined }
            </div>
        );

        return (
            <div className="wrapper">
                { typeof this.props.username !== 'undefined' ? wallHeader : undefined }
                {this.props.isLoggedIn ? <Write onPost={this.handlePost}/> : undefined}
                <MemoList data={this.props.memoData} currentUser={this.props.currentUser}
                    onEdit={this.handleEdit}
                    onRemove={this.handleRemove}
                    onStar={this.handleStar}/>
            </div>
        );
    }
}

Home.PropTypes = {
    username: React.PropTypes.string
};

Home.defaultProps = {
    username: undefined
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authentication.status.isLoggedIn,
        postStatus: state.memo.post,
        currentUser: state.authentication.status.currentUser,
>>>>>>> master
        memoData: state.memo.list.data,
        listStatus: state.memo.list.status,
        isLast: state.memo.list.isLast,
        editStatus: state.memo.edit,
        removeStatus: state.memo.remove,
<<<<<<< HEAD
        starStatus: state.memo.star,
        searchStatus: state.search.usernames
=======
        starStatus: state.memo.star
>>>>>>> master
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        memoPostRequest: (contents) => {
            return dispatch(memoPostRequest(contents));
        },
        memoListRequest: (isInitial, listType, id, username) => {
            return dispatch(memoListRequest(isInitial, listType, id, username));
        },
        memoEditRequest: (id, index, contents) => {
<<<<<<< HEAD
          return dispatch(memoEditRequest(id, index, contents));
        },
        memoRemoveRequest: (id, index) => {
          return dispatch(memoRemoveRequest(id, index));
=======
            return dispatch(memoEditRequest(id, index, contents));
        },
        memoRemoveRequest: (id, index) => {
            return dispatch(memoRemoveRequest(id, index));
>>>>>>> master
        },
        memoStarRequest: (id, index) => {
            return dispatch(memoStarRequest(id, index));
        }
    };
};

<<<<<<< HEAD
Home.PropTypes = {
  username: PropTypes.string
};

Home.defaultProps = {
  username: undefined
};
=======
>>>>>>> master

export default connect(mapStateToProps, mapDispatchToProps)(Home);
