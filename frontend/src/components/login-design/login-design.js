import React, { Component } from 'react';


class LoginDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      id_user: '',
    };
  }


  render() {
    return (
        //put html for login
      <div>
      <!DOCTYPE html>
      <html lang="en" dir="ltr">

      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <link rel="stylesheet" href="frontend/src/css/main_login.css">
        <title>Login Page</title>

        <link href="https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Tinos:700i&display=swap" rel="stylesheet">
      </head>

      <body>

        <div class="row no-gutters">
          <div class="col no-gutters">
            <div class="leftside">

              <div style="position: absolute;
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    top: 10%;">
                <img src="frontend/src/images/swellodesk_image.png" class="rounded mx-auto d-block" alt="swello">

              </div>
              <p class="text-center">Build your dream project.
                Collaborate with your team.
                Work at your own pace.</p>


            </div>
          </div>

          <div class="col no-gutters">
            <div class="rightside">
              <br>
              <form class="form-inline">
                <label class="sr-only" for="inlineFormInputUsername2">Username</label>
                <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Username">

                <label class="sr-only" for="inlineFormInputGroupPassword2">Password</label>
                <div class="input-group mb-2 mr-sm-2">

                  <input type="password" class="form-control" id="inlineFormInputGroupUsername2" placeholder="...............................">
                </div>

                <div class="form-check mb-2 mr-sm-2">
                  <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                  <label class="form-check-label" for="inlineFormCheck">
                    Remember me
                  </label>
                </div>


                <button type="submit" class="btn btn-primary mb-2">Submit</button>
      </form>
                <h1 class="text-center">Join SwelloDesk Today!</h1><br>
                <div class="col-md-12 text-center">
                  <div class="mx-auto" <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Sign up</button>
                    <button type="button" class="btn btn-primary">Sign up with Facebook</button>
                    <button type="button" class="btn btn-primary">Sign up with Google</button>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </body>

      </html>

      </div>
    );
  }
}

export default LoginDesign;
