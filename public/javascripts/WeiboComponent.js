var WeiboComponent = React.createClass({
  getInitialState: function () {
    return {username: "", weibos: []};
  },
  componentDidMount: function () {
    this.getUsername();
    this.getWeibos();
  },
  handleAdd: function (e) {
    e.preventDefault();
    var _input = this.refs.weiboContent.getDOMNode();
    var _content = _input.value;
    $.ajax({
      url: '/weibo/add',
      dataType: 'json',
      type: 'POST',
      data: {
        weiboConent: _content
      },
      success: function (result) {
        if (result) {
          this.getWeibos();
          _input.value = "";
        } else {
          alert("微博发送失败！");
        }
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function () {
    var weiboLists = this.state.weibos.map(function (weibo) {
      return (
        <div>
          <li>
            【{weibo.time}】{weibo.author} 说 ：{weibo.content}
             <a href={"/weibo/delete/" + weibo._id}
               className="text-danger del">  删除
             </a>
          </li>
        </div>
        );
    });
    return (
      <div>
        <ul className="list-unstyled">
          {weiboLists}
        </ul>

        <form method="post" action="/weibo/add">

          <div class="form-group">
            <label htmlFor="weibo_content"><span>{this.state.username}</span>说：</label>
            <input id="weibo_content" ref="weiboContent" className="form-control" type="text" name="weiboConent"
                   placeholder="请输入微博的内容" ref="weiboContent"/>
          </div>
          <br/>

          <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>提交</button>
        </form>
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
        this.addDelhandle();
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  addDelhandle: function () {
    var ctx = this;
    $('.del').click(function (e) {
      e.preventDefault();
      var _url = $(this).attr('href');
      $.ajax({
        url: _url,
        dataType: 'json',
        type: 'GET',
        success: function (result) {
          if (result) {
            this.getWeibos();
          } else {
            alert("删除失败！");
          }
        }.bind(ctx),
        error: function (xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(ctx)
      });
    });
  },
});