var React = require('react')
var GreeterForm = require('./GreeterForm')

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {name: 'React'}
  },
  getInitialState: function() {
    return {name: this.props.name, message: this.props.message}
  },
  handleNewData: function(updates) {
    this.setState(updates)
  },
  // onButtonClick: function (e) {
  //     e.preventDefault();
  //
  //     var nameRef = this.refs.name;
  //     var name = nameRef.value;
  //     nameRef.value = '';
  //     if (typeof name === 'string' && name.length > 0) {
  //         this.setState({
  //             name: name
  //         });
  //     }
  // },
  render: function() {
    var name = this.state.name
    var message = this.state.message
    return (
      <div>
        <h2>Hello {name}!</h2>
        <p>Message is {message}</p>
        <GreeterForm onNewData={this.handleNewData} />
        {/* <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form> */}
      </div>
    )
  }
})
module.exports = Greeter
