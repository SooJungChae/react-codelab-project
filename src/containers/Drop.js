import React from 'react';
//import JqxDropDownList from '../../jqwidgets-react/react_jqxdropdownlist.js';

class Drop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let source =
   [
       "Affogato",
       "Americano",
       "Bicerin",
       "Breve",
       "Café Crema",
       "Caffé Latte",
       "Espresso"
   ];
   console.log('Drop');
    return (
      <div>
      드로테스트...
      </div>
    );
  }
}

export default Drop;
