var React = require('react');

var GreeterForm = React.createClass({
    onButtonClick: function (e) {
        e.preventDefault();
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onButtonClick}>
                <div>
                    <input type="text" ref="name" />
                </div>
                <div>
                    <textarea cols="30" rows="10" ref="message"></textarea>
                </div>
                <button>Update</button>
            </form>
        );
    }
});

module.exports = GreeterForm;
