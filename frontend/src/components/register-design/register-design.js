import React, { Component } from 'react';

class RegisterDesign extends Component {
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
      //put html for register
      <div>
        <div class="row no-gutters">
          <div class="col no-gutters">
            <div class="leftside">
              <div style="position: absolute;
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    top: 10%;" <div class="text-center">
                <img src="frontend/src/images/swellodesk_image.png" class="rounded mx-auto d-block" alt="swello"></img>
              </div>
            </div>
          </div>

          <div class="col no-gutters">
            <div class="rightside">
              <form role="form" method="POST" action="#">

                <legend class="text-center">SwelloDesk</legend>

                <fieldset>
                  <legend>Please complete to create your account</legend>

                  <div class="form-group col-md-12">
                    <label for="first_name">First name</label>
                    <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="last_name">Last name</label>
                    <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="pw" id="password" placeholder="Password">
                  </div>

                  <div class="form-group col-md-12">
                    <label for="confirm_password">Confirm Password</label>
                    <input type="password" class="form-control" name="cpw" id="confirm_password" placeholder="Confirm Password">
                  </div>

                </fieldset>

                <div class="form-group">
                  <div class="col-md-12">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" value="" id="cbox">
                        I accept the <a href="#">terms and conditions</a>.
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary">
                      Sign Up
                    </button><br>
                    <a href="#">Already have an account? Sign In</a>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </div>
    );
  }
}

export default RegisterDesign;
