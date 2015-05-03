var WeiboComponent = React.createClass({
  getInitialState: function () {
    return {username: "", weibos: []};
  },
  componentDidMount: function () {
    this.getUsername();
    this.getWeibos();
  },
  render: function () {
    return (
      <div>
        <WeiboList weibos={this.state.weibos} getWeibos={this.getWeibos} />
        <WeiboForm username={this.state.username} getWeibos={this.getWeibos} />
      </div>
    );
  },
  getUsername: function () {
    $.ajax({
      url: this.props.usernameUrl,
      dataType: 'json',
      type: 'GET',
      success: function (username) {
        this.setState({username: username});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getWeibos: function () {
    $.ajax({
      url: this.props.weiboUrl,
      dataType: 'json',
      type: 'GET',
      success: function (results) {
        this.setState({weibos: results.weibos});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
});