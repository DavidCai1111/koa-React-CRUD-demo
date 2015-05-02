var AuthForm = React.createClass({
  render : function () {
    return (
      <form action={this.props.action} method="post">
        <div className="form-group">
          <label htmlFor="username">用户名：</label>
          <input type="text" id="username" className="form-control" placeholder="请输入用户名" name="username"/>
        </div>

        <div class="form-group">
          <label htmlFor="password">密码：</label>
          <input type="password" id="password" className="form-control" placeholder="请输入密码" name="password"/>
        </div>

        <input type="submit" className="btn btn-primary" value={this.props.name}/>
        <a href="/" className="btn btn-danger">返回首页</a>
      </form>
    );
  }
});