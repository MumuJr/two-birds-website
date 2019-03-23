<template>
  <div id="roasters">
    <!-- Roasting Type Section  -->
    <div class="container">
      <div class="hero-content py-2 text-center">
        <h1 class="hero-heading">Roasted Coffee</h1>
        <p
          class="lead text-muted"
        >Each roaster adds their own unique touch to our coffee. We are excited to be able to represent such a talented group.</p>
      </div>
    </div>

    <!-- Selection Tabs -->
    <div class="container">
      <ul class="nav nav-tabs nav-justified flex-column flex-sm-row" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="washed-tab"
            data-toggle="tab"
            href="#washed"
            role="tab"
            aria-controls="washed"
            aria-selected="true"
          >Washed</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="cima-tab"
            data-toggle="tab"
            href="#cima"
            role="tab"
            aria-controls="cima"
            aria-selected="false"
          >CIMA Washed</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="pulp-tab"
            data-toggle="tab"
            href="#pulp"
            role="tab"
            aria-controls="pulp"
            aria-selected="false"
          >Pulp Natural</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="natural-tab"
            data-toggle="tab"
            href="#natural"
            role="tab"
            aria-controls="natural"
            aria-selected="false"
          >Natural</a>
        </li>
      </ul>

      <!-- Washed Clients -->
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="washed"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div class="container">
            <div class="col-lg-8 my-3">
              <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id olor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
            </div>
            <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img src="../assets/domestique.jpeg" alt="product" class="img-fluid">
                    </div>
                    <div class="py-2">
                      <a
                        href="https://domestiquecoffee.com/product/guatemala"
                        class="btn btn-light btn-md roasting"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Domestique Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/PHOENIX_BagFront-Smart-Esperanza.png"
                        alt="Blue Print Coffee"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://phoenixcoffee.com/shop/esperanza-guatemala"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Phoenix Coffee Co.</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image" id="chosenbean">
                      <img src="../assets/chosenbean.jpg" alt="product" class="img-fluid">
                    </div>
                    <div class="py-2">
                      <a
                        href="https://www.thechosenbean.com/guatemala-the-chosen-bean-origin/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >The Chosen Bean</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CIMA yeast Clients -->
        <div class="tab-pane fade" id="cima" role="tabpanel" aria-labelledby="cima-tab">
          <div class="container">
            <div class="col-lg-8 my-3">
              <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
            </div>
            <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pulp Natural Clients -->
        <div class="tab-pane fade" id="pulp" role="tabpanel" aria-labelledby="pulp-tab">
          <div class="container">
            <div class="col-lg-8 my-3">
              <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
            </div>
            <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img src="../assets/Goodmancoffee.jpg" alt="product" class="img-fluid">
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Natural Clients -->
        <div class="tab-pane fade" id="natural" role="tabpanel" aria-labelledby="natural-tab">
          <div class="container">
            <div class="col-lg-8 my-3">
              <p>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</p>
            </div>
            <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
              <div class="row">
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product">
                    <div class="product-image">
                      <img
                        src="../assets/Blueprint-Coffee-Penrose-v17-600x600.jpg"
                        alt="product"
                        class="img-fluid"
                      >
                    </div>
                    <div class="py-2">
                      <a
                        href="https://blueprintcoffee.com/store/coffee/esperanza/"
                        class="btn btn-light btn-md"
                        tabindex="-1"
                        role="button"
                        aria
                        disabled="true"
                      >Blueprint Coffee</a>
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
  name: "roasters",
  data() {
    return {};
  }
};
</script>