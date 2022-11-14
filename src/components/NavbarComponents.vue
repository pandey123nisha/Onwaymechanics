<template>
  <div>
    <modal name="login-form">
      <div class="container">
        <h3>Login</h3>
        <h6>Please sign in to continue</h6>
        <div class="py-5">
          <div class="login">
            <div class="row">
              <div class="col-md-9">
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
                <div class="py-3">
                  <button class="btn" type="submit">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <nav class="navbar navbar-expand-lg nav-menu">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'home' })"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'discuss' })"
                >Discussion</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'feedback' })"
                >Feedback</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'info' })"
                >Info</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <button
              class="btn btn-outline-success"
              type="submit"
              @click.prevent="showLoginForm()"
            >
              login
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponents",
  methods: {
    showLoginForm() {
      this.$modal.show("login-form");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #2b5434;
}

.nav-item {
  font-weight: bold;
  font-size: 18px;
  padding-left: 30px;
}

a {
  color: white;
}

.btn {
  color: white;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 0 0 30px rgb(0 0 0 / 20%);
}

.form-control {
  border-radius: 10px;
  padding: 10px;
}
.login {
  padding-left: 60px;
}
</style>
