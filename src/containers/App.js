import React from 'react';
<<<<<<< HEAD
import { Header } from '../components';
import Home from './Home';
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest } from '../actions/authentication';
import { searchRequest } from '../actions/search';
import { getInfoRequest } from '../actions/getInfo';
import update from 'react-addons-update';


import JqxDropDownList from '../jqwidgets-react/react_jqxdropdownlist.js';
import JqxGrid from '../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       record: ["123", "345"]
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGetEmpName = this.handleGetEmpName.bind(this);
  }

  handleLogout(){
    this.props.logoutRequest().then(
      () => {
        Materialize.toast('Good Bye!', 2000);

        // empties the session
        let loginData = {
          isLoggedIn: false,
          username: ''
        };

        document.cookie = 'key=' + btoa(JSON.stringify(loginData));
      }
    );
  }

  handleSearch(contents) {
    return this.props.searchRequest(contents).then(
      () => {
        console.log(contents);
      }
    );
  }

  handleGetEmpName(){
    return this.props.getInfoRequest().then(
      () => {

        if(this.props.empstatus !== 'SUCCESS') {

          let errorMessage= [
              'Something broke',
              'You are not logged in',
              'That memo does not exist'
          ];

          // NOTIFY ERROR
          let $toastContent = $('<span style="color: #FFB4BA">' + errorMessage[this.props.starStatus.error - 1] + '</span>');
          Materialize.toast($toastContent, 2000);

          // IF NOT LOGGED IN, REFRESH THE PAGE
          if(this.props.getInfo.error === 2) {
              setTimeout(()=> {location.reload(false)}, 2000);
          }
        }
        else {
          //console.log(this.refs.myDropDownList.source);

          var dataAdapter2 = new $.jqx.dataAdapter(["test"]);

          this.setState({
            record: [dataAdapter2]
          });
          console.log(this.refs.myDropDownList);

          // this.setState({
          //   source: this.props.empnames
          // });
          //console.log('success ' + this.state.source);
        }
      }
    );
  }

  componentDidMount() {
    console.log(this.refs.myDropDownList);
  }

  componentWillUpdate() {

  }

  render(){
      // check whether current route is login or register using regex
      let re = /(login|register)/;
      let isAuth = re.test(this.props.location.pathname);

      // let source_grid =
      //   {
      //       datatype: "xml",
      //       datafields: [
      //           { name: 'ProductName', type: 'string' },
      //           { name: 'QuantityPerUnit', type: 'int' },
      //           { name: 'UnitPrice', type: 'float' },
      //           { name: 'UnitsInStock', type: 'float' },
      //           { name: 'Discontinued', type: 'bool' }
      //       ],
      //       root: "Products",
      //       record: "Product",
      //       id: 'ProductID',
      //       url: "sampledata/products.xml"
      //   };
      //
      // let cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
      //   if (value < 20) {
      //       return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
      //   }
      //   else {
      //       return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
      //   }
      // }
      //
      // let dataAdapter = new $.jqx.dataAdapter(source_grid);
      //
      // let columns =
      // [
      //   { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
      //   { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200 },
      //   { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200 },
      //   { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: cellsrenderer, width: 100 },
      //   { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
      // ];
      //
      // let columngroups =
      // [
      //     { text: 'Product Details', align: 'center', name: 'ProductDetails' }
      // ];
      // <JqxGrid width={850} source={dataAdapter} pageable={true}
      //      sortable={true} altrows={true} enabletooltips={true}
      //      autoheight={true} editable={true} columns={columns}
      //      selectionmode={'multiplecellsadvanced'} columngroups={columngroups}
      // />

      let source = {
        localdata: this.state.record
      };

      var dataAdapter = new $.jqx.dataAdapter(source);

      return (
        <div>
        <JqxDropDownList id="123" ref="myDropDownList"
            width={200} height={50} source={dataAdapter} />
            <p>{this.state.record}</p>

          <button type="button" onClick={this.handleGetEmpName}>조회하기</button>
          {isAuth ? undefined : <Header isLoggedIn={this.props.status.isLoggedIn}
                                        onLogout={this.handleLogout}
                                        onSearch={this.handleSearch}
                                        usernames={this.props.usernames}/>}
          {this.props.children}
          <Home/>
        </div>
      );
  }

  componentDidUpdate() {
    // alert(this.state.source);

    console.log('componentDidUpdate:' + this.refs.myDropDownList.props.source);
    //console.log('componentDidMount');
    //this.refs.myDropDownList.selectIndex(1);



    // let updating = false;
    // let select = document.getElementById('select');
    // this.refs.myDropDownList.loadFromSelect('select');
    // this.refs.myDropDownList.on('select', (event) => {
    //     if (event.args && !updating) {
    //         let index = event.args.item.index;
    //         select.selectedIndex = index;
    //     }
    // });
    // select.addEventListener('change', (event) => {
    //     updating = true;
    //     let index = select.selectedIndex;
    //     this.refs.myDropDownList.selectIndex(index);
    //     this.refs.myDropDownList.ensureVisible(index);
    //     updating = false;
    // },true);

      // get cookie by name
      function getCookie(name) {
          var value = "; " + document.cookie;
          var parts = value.split("; " + name + "=");
          if (parts.length == 2) return parts.pop().split(";").shift();
      }

      // get loginData from cookie
      let loginData = getCookie('key');

      // if loginData is undefined, do nothing
      if(typeof loginData === "undefined") return;

      // decode base64 & parse json
      loginData = JSON.parse(atob(loginData));

      // if not logged in, do nothing
      if(!loginData.isLoggedIn) return;

      // page refreshed & has a session in cookie,
      // check whether this cookie is valid or not
      this.props.getStatusRequest().then(
          () => {
              // if session is not valid
              if(!this.props.status.valid) {
                  // logout the session
                  loginData = {
                      isLoggedIn: false,
                      username: ''
                  };

                  document.cookie='key=' + btoa(JSON.stringify(loginData));

                  // and notify
                  let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
                  Materialize.toast($toastContent, 4000);

              }
          }
      );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.authentication.status,
    usernames: state.search.usernames,
    empstatus: state.getInfo.name.status,
    empnames: state.getInfo.name.usernames
  };
=======
import { Header } from 'components';
import { connect } from 'react-redux';
import { getStatusRequest, logoutRequest } from 'actions/authentication';
import { searchRequest } from 'actions/search';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleLogout() {
        this.props.logoutRequest().then(
            () => {
                 Materialize.toast('Good Bye!', 2000);

                 // EMPTIES THE SESSION
                let loginData = {
                    isLoggedIn: false,
                    username: ''
                };

                document.cookie = 'key=' + btoa(JSON.stringify(loginData));
            }
        );
    }

    handleSearch(keyword) {
        this.props.searchRequest(keyword);
    }

    componentDidMount() {
        // get cookie by name
        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        }

        // get login data from cookie
        let loginData = getCookie('key');

        // if loginData is undefined, do nothing
        if(typeof loginData === "undefined") return;

        // decode base64 & parse json
        loginData = JSON.parse(atob(loginData));

        // if not logged in, do nothing
        if(!loginData.isLoggedIn) return;

        // page refreshed & has a session in cookie,
        // check whether this cookie is valid or not
        this.props.getStatusRequest().then(
            () => {
                if(!this.props.status.valid) {
                    // if session is not valid
                    // logout the session
                    loginData = {
                        isLoggedIn: false,
                        username: ''
                    };

                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));

                    // and notify
                    let $toastContent = $('<span style="color: #FFB4BA">Your session is expired, please log in again</span>');
                    Materialize.toast($toastContent, 4000);
                }
            }
        );

    }

    render(){
        let re = /(login|register)/;
        let isAuth = re.test(this.props.location.pathname);

        return (
            <div>
                { isAuth ? undefined : <Header isLoggedIn={this.props.status.isLoggedIn}
                onLogout={this.handleLogout}
                onSearch={this.handleSearch}
                usernames={this.props.searchResults}/> }
                { this.props.children }
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authentication.status,
        searchResults: state.search.usernames
    };
>>>>>>> master
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStatusRequest: () => {
            return dispatch(getStatusRequest());
        },
        logoutRequest: () => {
<<<<<<< HEAD
          return dispatch(logoutRequest());
        },
        searchRequest: (contents) => {
          return dispatch(searchRequest(contents));
        },
        getInfoRequest: () => {
          return dispatch(getInfoRequest());
=======
            return dispatch(logoutRequest());
        },
        searchRequest: (keyword) => {
            return dispatch(searchRequest(keyword));
>>>>>>> master
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
