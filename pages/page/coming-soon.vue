<template>
  <div>
    <div class="template-password">
      <div class="container">
        <div id="container" class="text-center">
          <div>
            <div id="login">
              <div>
                <div class="logo mb-4">
                  <nuxt-link :to="{ path: '/shop/fashion'}">
                    <img
                      :src="logoimage"
                      alt="Multikart_fashion"
                      class="img-fluid"
                    />
                  </nuxt-link>
                </div>
                <h2 class="mb-3">{{title}}</h2>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <form action="#" class="theme-form">
                    <div class="col-md-12 mt-2">
                      <h3>Enter Your Email:</h3>
                    </div>
                    <div class="form-row">
                      <div class="col-md-12">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          class="form-control"
                          autofocus
                        />
                      </div>
                      <div class="col-md-12">
                        <div class="actions">
                          <button type="submit" class="btn btn-solid">notify me</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div id="footer" class="mt-4">
                <div id="owner">
                  Are you the store owner?
                  <a href="#">Log in here</a> or
                  <a href="#">change your password settings</a>
                </div>
              </div>
            </div>
            <div id="powered">
              <p>{{copyright}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      logoimage: require('@/assets/images/icon/logo.png'),
      title: 'Will be Opening Soon!',
      copyright: '© 2018, Powered by Multikart.'
    }
  }
}
</script>
