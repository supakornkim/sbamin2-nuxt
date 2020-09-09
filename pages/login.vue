<template>
  <div class="bg-gradient-primary">
    <div class="container">

      <!-- Outer Row -->
      <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input type="text" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Username..."
                        v-model="formlogin.username">
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password"
                        v-model="formlogin.password">
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input type="checkbox" class="custom-control-input" id="customCheck">
                          <label class="custom-control-label" for="customCheck">Remember Me</label>
                        </div>
                      </div>
                      <a href="" @click.prevent="userLogin()" class="btn btn-primary btn-user btn-block">
                        Login
                      </a>
                      <hr>
                      <a href="index.html" class="btn btn-google btn-user btn-block">
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a href="index.html" class="btn btn-facebook btn-user btn-block">
                        <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </a>
                    </form>
                    <hr>
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="register.html">Create an Account!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>

</template>

<script>
  export default {
    layout: 'blank',
    // page component definitions
    data() {
      return {
        error:false,
        loading: false,
        siteadmin:false,
        formlogin : {
          username:'', //ljungdurst@gmail.com
          password:'',
        },
      }
    },
    methods: {
      async userLogin() {
        this.loading = true
        try {
          await this.$auth.loginWith('local', { data : this.formlogin })
          .then((response)=>{
            console.log(response)
            this.loading = false

            var objects = Object.values(this.$auth.$state.user.roles)
            var toSearch = "siteadmin";

            for(var i=0; i<objects.length; i++) {
              if (objects[i] == toSearch){
                this.siteadmin = true
                break;
              }
            }

            if (this.siteadmin == true){
              //if (this.$auth.user.agent_type=='teacher'){
              //  this.$router.push('/user/dashboard')
              //}
              //if (this.$auth.user.agent_type=='agent'){
                this.$router.push('/')
              //}
            }else{
              this.$auth.logout()
              this.error = true
            }
            //if (this.$auth.user.uid > 0){
              //this.$router.push('/user/dashboard')
            //}else{
            //  this.$auth.logout()
            //}
            //console.log(this.quiz_result)
          })
          //.then(() => this.$auth.fetchUser())
          //console.log(this.$auth.user)
        }catch (e){
          this.loading = false
          //console.log(e)
          this.error = true
        }
      },
    }
  }
</script>
