<template>
  <div>
    <Header />
    <Breadcrumbs title="Dashboard" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <b-card no-body v-bind:class="'dashboardtab'">
            <b-tabs pills card vertical>
              <b-tab title="Account Info" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My Dashboard</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">Change Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Newsletters</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <p>You are currently not subscribed to any newsletter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Address Book</h3>
                              <a href="#">Manage Addresses</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>
                                  You have not set a default billing address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>
                                  You have not set a default shipping address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Address Book">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Address Book</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>From your Address book you have the ability to change or edit your shipping and billing address.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Address Information</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Address Book</h3>
                              <a href="#">Manage Addresses</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>
                                  You have not set a default billing address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>
                                  You have not set a default shipping address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="My Orders">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My orders</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>From your Orders you have the ability to view your all orders and status of order.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Order Information</h2>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title mb-3">
                              <h3>orders list</h3>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>Order no: 2105</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>Order no: 1032</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box mt-2">
                            <div class="row">
                              <div class="col-sm-6">
                                <h4>Order no: 2105</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                              <div class="col-sm-6">
                                <h4>Order no: 1032</h4>
                                <h6>Slim Fit Cotton Shirt</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Newsletter">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Newsletter</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Change Password">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Change password</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">Change Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Newsletters</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <p>You are currently not subscribed to any newsletter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Log out">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>Log Out</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, MARK JECNO !</p>
                        <p>Log out From your Account Dashboard. Select a link below to view or edit information.</p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Contact Information</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <h6>MARK JECNO</h6>
                                <h6>MARk-JECNO@gmail.com</h6>
                                <h6>
                                  <a href="#">Change Password</a>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Newsletters</h3>
                                <a href="#">Edit</a>
                              </div>
                              <div class="box-content">
                                <p>You are currently not subscribed to any newsletter.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="box">
                            <div class="box-title">
                              <h3>Address Book</h3>
                              <a href="#">Manage Addresses</a>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <h6>Default Billing Address</h6>
                                <address>
                                  You have not set a default billing address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                              <div class="col-sm-6">
                                <h6>Default Shipping Address</h6>
                                <address>
                                  You have not set a default shipping address.
                                  <br />
                                  <a href="#">Edit Address</a>
                                </address>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  }
}
</script>
