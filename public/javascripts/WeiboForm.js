var WeiboForm = React.createClass({
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
          this.props.getWeibos();
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
    return (<form method="post" action="/weibo/add">

      <div class="form-group">
        <label htmlFor="weibo_content"><span>{this.props.username}</span>说：</label>
        <input id="weibo_content" ref="weiboContent" className="form-control" type="text" name="weiboConent"
               placeholder="请输入微博的内容" ref="weiboContent"/>
      </div>
      <br/>

      <a type="submit" className="btn btn-primary" onClick={this.handleAdd}>提交</a>
    </form>);
  }
});