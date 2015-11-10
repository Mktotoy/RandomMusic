<html>
<head>
<?php   require_once('view/head.php');
?>
    <link href="css/indexcss.css" rel="stylesheet">
</head>

<body>
<div class="site-wrapper">
    <div class="site-wrapper-inner">
        <div class="cover-container">
            <div class="masthead clearfix">
                <div class="inner">
                    <h3 class="masthead-brand title">Random Music</h3>

                    <ul class="nav masthead-nav">
                        <li>
                            <a href="#">Electro</a>
                        </li>

                        <li>
                            <a href="#">Classic</a>
                        </li>

                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="inner cover">
                <h1 class="cover-heading">Home of the free music</h1>

                <p class="lead">The place to enjoy just listening to free music at random, when you have no idea what you can listen.
                    All musics are free to use for a personnal use. Discover new authors and musicians here.
                </p>


                <p  class="lead"><a id="nav" class="btn btn-lg" href="#" data-toggle="modal" data-target="#signinmodal">Sign in</a></p>
                <!-- Modal Signin -->
                <div class="modal fade " id="signinmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog " role="document">
                        <div class="modal-content signmodal">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h1 class="modal-title" id="myModalLabel">Sign in</h1>
                            </div>
                            <div class="modal-body">
                                <div class="main">

                                    <h2>Please Log In</h2>
                                    <div class="row">
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <a href="#" class="btn btn-primary btn-block">Facebook</a>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <a href="#" class="btn btn-info btn-block">Google</a>
                                        </div>
                                    </div>
                                    <div class="login-or">
                                        <hr class="hr-or">
                                        <span class="span-or">or</span>
                                    </div>

                                    <form role="form">
                                        <div class="form-group">
                                            <label for="inputUsernameEmail">Username</label>
                                            <input type="text" class="form-control" id="inputUsernameEmail">
                                        </div>
                                        <div class="form-group">

                                            <label for="inputPassword">Password</label>
                                            <input type="password" class="form-control" id="inputPassword">
                                        </div>
                                        <div class="checkbox pull-right">
                                            <label>
                                                <input type="checkbox">
                                                Remember me </label>
                                        </div>
                                        <button type="submit" class="btn btn btn-primary">
                                            Log In
                                        </button>
                                    </form>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <p  class="lead"><a id="nav" class="btn btn-lg btn-success" href="#" data-toggle="modal" data-target="#signupmodal">Sign up</a></p>
                <!-- Modal Signup -->
                <div class="modal fade" id="signupmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content signmodal">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h1 class="modal-title" id="myModalLabel">Sign up</h1>
                            </div>
                            <div class="modal-body">
                                <div class="main">

                                    <h2>Please sign up</h2>
                                    <div class="row">
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <a href="#" class="btn btn-primary btn-block">Facebook</a>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <a href="#" class="btn btn-info btn-block">Google</a>
                                        </div>
                                    </div>
                                    <div class="login-or">
                                        <hr class="hr-or">
                                        <span class="span-or">or</span>
                                    </div>

                                    <form role="form">
                                        <div class="form-group">
                                            <label for="inputUsername">Username</label>
                                            <input type="text" class="form-control" id="inputUsername" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputEmail">Email</label>
                                            <input type="email" class="form-control" id="inputEmail" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="checkEmail">Check Email</label>
                                            <input type="email" class="form-control" id="checkEmail" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPassword">Password</label>
                                            <input type="password" class="form-control" id="inputPassword" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="checkPassword">Check Password</label>
                                            <input type="password" class="form-control" id="checkPassword" required>
                                        </div>
                                        <div class="checkbox pull-right">
                                            <label>
                                                <input type="checkbox">
                                                I accept all terms and agreements. Read <a href="#">here</a></label>
                                        </div>
                                        <button type="submit" class="btn btn btn-success">
                                            Create account
                                        </button>
                                    </form>

                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>






            </div>


        </div>
    </div>
</div>
<?php
  require_once('view/player.php');
?>



<?php
    require_once('view/script.php');
?>
</body>
</html>
