<template>
  <div id="dashboard">
    <!-- Main Background Image -->
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="content">
              <h1>Two Birds Coffee</h1>
              <hr>
              <router-link to="/aboutus" class="btn btn-primary">Our Story</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section between (Certifications) -->
    <div class="container marketing">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <img class="rounded-circle" src="../assets/BirdFriendly.jpg" width="350" height="200">
        </div>
        <div class="col-lg-4 col-md-6">
          <img class="rounded-circle" src="../assets/Organic.jpg" width="350" height="200">
        </div>
        <div class="col-lg-4 col-md-12">
          <img class="rounded-circle" src="../assets/ManosDeMujer.jpg" width="350" height="200">
        </div>
      </div>
    </div>

    <!-- Coffee Selection -->
    <div class="section">
      <div class="container">
        <div class="process">
          <h2 class="processes">Finca Esperanza</h2>
          <div class="row d-flex justify-content-center">
            <div class="card-deck">
              <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="card text-center" style="width: 18rem;">
                  <img class="card-img-top" src="../assets/IMG_0688.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Washed</h5>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="card text-center" style="width: 18rem;">
                  <img class="card-img-top" src="../assets/IMG_0750.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">CIMA Washed</h5>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="card text-center" style="width: 18rem;">
                  <img class="card-img-top" src="../assets/IMG_0695.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Natural</h5>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-3">
                <div class="card text-center" style="width: 18rem;">
                  <img class="card-img-top" src="../assets/IMG_0707.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">Pulp Natural</h5>
                    <p
                      class="card-text"
                    >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="contactus-1 section-image contact-us">
      <div class="col-md-5 col-sm-6 col-8">
        <div class="card card-contact card-raised">
          <form>
            <div class="card-header text-center">
              <h4 class="card-title">Contact Us!</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 pr-2">
                  <label>First Name</label>
                  <input type="text" class="form-control" placeholder="John">
                </div>
                <div class="col-md-6 pr-2">
                  <label>Last Name</label>
                  <input type="text" class="form-control" placeholder="Smith">
                </div>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                >
              </div>
              <div class="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  placeholder="Two Birds changed my life!"
                  rows="4"
                ></textarea>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <button type="submit" class="btn btn-primary pull-right">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {};
  }
};
</script>



