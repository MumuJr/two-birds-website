<template>
  <nav>
    <div class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <router-link to="/">
          <img src="../assets/icon-fc-small copy.png" width="40" height="40">
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/finca">Finca Esperanza</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/roasters">Roasters</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/events">Events</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Menu</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://www.facebook.com/TwoBirdsCoffee/">FaceBook</a>
                <a class="dropdown-item" href="https://www.instagram.com/twobirdscoffee/">Instagram</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Contact Us</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>





