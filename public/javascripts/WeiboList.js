var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var WeiboList = React.createClass({
  handleDel: function (e) {
    e.preventDefault();
    var _url = e.target.href;
    $.ajax({
      url: _url,
      dataType: 'json',
      type: 'GET',
      success: function (result) {
        if (result) {
          this.props.getWeibos();
        } else {
          alert("删除失败！");
        }
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(_url, status, err.toString());
      }.bind(this)
    });
  },
  render : function () {
    var ctx = this;
    var weiboLists = this.props.weibos.map(function (weibo) {
      return (
        <div>
          <li>
            【{weibo.time}】{weibo.author} 说 ：{weibo.content}
            <a href={"/weibo/delete/" + weibo._id}
               className="text-danger del" onClick={this.handleDel}>  删除
            </a>
          </li>
        </div>
      );
    }.bind(ctx));
    return (
      <ul className="list-unstyled">
        <ReactCSSTransitionGroup transitionName="weibo">
        {weiboLists}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
});