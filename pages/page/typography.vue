<template>
  <div>
    <Header />
    <Breadcrumbs title="Typography" />
    <section class="section-b-space typography_section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="typography-box">
              <div class="headings">
                <h3>headings</h3>
                <span>
                  All HTML headings,
                  <code>&lt;h1&gt;</code> through
                  <code>&lt;h6&gt;</code>, are available.
                </span>
              </div>
              <div class="typo-content heading_content">
                <h1>h1 heading</h1>
                <h2>h2 heading</h2>
                <h3>h3 heading</h3>
                <h4>h4 heading</h4>
                <h5>h5 heading</h5>
                <h6>h6 heading</h6>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>Text Color</h3>
                <span>You can Give text color by using txt-* class</span>
              </div>
              <div class="typo-content">
                <p class="text-primary">
                  This is Primary text You can archive this adding
                  <code>.text-primary</code> class
                </p>
                <p class="text-secondary">
                  This is Secondary text You can archive this adding
                  <code>.text-secondary</code> class
                </p>
                <p class="text-success">
                  This is Success text You can archive this adding
                  <code>.text-success</code> class
                </p>
                <p class="text-info">
                  This is Info text You can archive this adding
                  <code>.text-info</code> class
                </p>
                <p class="text-warning">
                  This is Warning text You can archive this adding
                  <code>.text-warning</code> class
                </p>
                <p class="text-danger">
                  This is Danger text You can archive this adding
                  <code>.text-danger</code> class
                </p>
                <p class="text-dark">
                  This is Dark text You can archive this adding
                  <code>.text-dark</code> class
                </p>
                <p class="text-muted">
                  This is Primary text You can archive this adding
                  <code>.text-muted</code> class
                </p>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>Text Color</h3>
                <span>You can Give text color by using txt-* class</span>
              </div>
              <div class="typo-content product-pagination">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                      </span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                      </span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>Text Color</h3>
                <span>You can Give text color by using txt-* class</span>
              </div>
              <div class="typo-content">
                <form>
                  <div class="form-row">
                    <div class="col-12 mb-3">
                      <label for="name">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Enter Your name"
                        required
                      />
                    </div>
                    <div class="col-12 mb-3">
                      <label for="email">Email</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="col-12 mb-3">
                      <label>Write Your Message</label>
                      <textarea
                        class="form-control"
                        placeholder="Write Your Message"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row"></div>
                </form>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>Alignment</h3>
                <span>Use text utilities as needed to change the alignment of your blockquote.</span>
              </div>
              <div class="typo-content">
                <p class="text-left">This is a left aligned text .text-left</p>
                <p class="text-center">This is a center aligned text .text-center</p>
                <p class="text-right">This is a right aligned text .text-right</p>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>loader</h3>
              </div>
              <div class="typo-content loader-typo">
                <div class="pre-loader"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="typography-box">
              <div class="headings">
                <h3>buttons</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div class="typo-content typo-buttons">
                <a href="#" class="btn btn-solid mr-3">button</a>
                <a href="#" class="btn btn-outline mr-3">button</a>
                <a href="#" class="btn btn-solid black-btn mr-3">button</a>
                <a href="#" class="btn btn-solid btn-sm">button</a>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>Inline text elements</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div class="typo-content">
                <p>
                  You can use the mark tag to
                  <mark>highlight</mark> text.
                </p>
                <p>
                  <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p>
                  <s>This line of text is meant to be treated as no longer accurate.</s>
                </p>
                <p>
                  <ins>This line of text is meant to be treated as an addition to the document.</ins>
                </p>
                <p>
                  <u>This line of text will render as underlined</u>
                </p>
                <p>
                  <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>lists</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div class="typo-content">
                <div class="row">
                  <div class="col-sm-6">
                    <h6 class="sub-title">Unorder list</h6>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <h6 class="sub-title">order list</h6>
                    <ol>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Lorem ipsum dolor sit amet</li>
                    </ol>
                  </div>
                  <div class="col-sm-6">
                    <h6 class="sub-title">order list</h6>
                    <dl>
                      <dt>Lorem ipsum dolor sit amet</dt>
                      <dd>- ipsum dolor sit amet</dd>
                      <dt>Lorem ipsum dolor sit amet</dt>
                      <dd>- ipsum dolor sit amet</dd>
                      <dt>Lorem ipsum dolor sit amet</dt>
                      <dd>- ipsum dolor sit amet</dd>
                    </dl>
                  </div>
                  <div class="col-sm-6">
                    <h6 class="sub-title">order list</h6>
                    <ul>
                      <li>
                        <i class="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i class="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i class="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i class="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i class="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i class="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <i class="fa fa-angle-double-right mr-2"></i>Lorem ipsum dolor sit amet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>lists</h3>
                <span>Styling for common inline HTML5 elements.</span>
              </div>
              <div class="typo-content input_button">
                <div class="row">
                  <div class="col-sm-6">
                    <form>
                      <div>
                        <input type="radio" name="gender" id="one" value="male" />
                        <label for="one">radio button1</label>
                      </div>
                      <div>
                        <input type="radio" name="gender" id="two" value="male" />
                        <label for="two">radio button2</label>
                      </div>
                      <div>
                        <input type="radio" name="gender" id="three" value="male" />
                        <label for="three">radio button3</label>
                      </div>
                      <div>
                        <input type="radio" name="gender" id="four" value="male" />
                        <label for="four">radio button4</label>
                      </div>
                      <div>
                        <input type="radio" name="gender" id="five" value="male" />
                        <label for="five">radio button5</label>
                      </div>
                    </form>
                  </div>
                  <div class="col-sm-6">
                    <form>
                      <div>
                        <input type="checkbox" name="gender" id="six" value="male" />
                        <label for="six">checkbox button1</label>
                      </div>
                      <div>
                        <input type="checkbox" name="gender" id="seven" value="male" />
                        <label for="seven">checkbox button2</label>
                      </div>
                      <div>
                        <input type="checkbox" name="gender" id="eight" value="male" />
                        <label for="eight">checkbox button3</label>
                      </div>
                      <div>
                        <input type="checkbox" name="gender" id="nine" value="male" />
                        <label for="nine">checkbox button4</label>
                      </div>
                      <div>
                        <input type="checkbox" name="gender" id="ten" value="male" />
                        <label for="ten">checkbox button5</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>Naming a source</h3>
                <span>
                  Add a
                  <code class="highlighter-rouge">&lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in
                  <code
                    class="highlighter-rouge"
                  >&lt;cite&gt;</code>.
                </span>
              </div>
              <div class="typo-content">
                <blockquote class="blockquote">
                  <p
                    class="mb-0"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer class="blockquote-footer">
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div class="typography-box">
              <div class="headings">
                <h3>social icons</h3>
              </div>
              <div class="typo-content">
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-rss" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header1'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  }
}
</script>
