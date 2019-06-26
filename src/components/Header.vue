<template>
  <header class="header">
    <div class="container">
      <div class="header-left">
        <div
          class="toggle"
          @click="toggleLeftbar"
          role="button"
          aria-label="Toggle Leftbar"
          tabindex="0"
        >
          <svg viewBox="0 0 512 512">
            <path
              d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"
              ssrc="6.0."
            ></path>
          </svg>
        </div>
        <h1 class="logo">
          <saber-link to="/">OI Wiki</saber-link>
        </h1>
      </div>
      <div class="our-nav">
        <!-- <div class="header-right"> -->
        <nav class="site-nav">
          <input type="checkbox" id="nav-trigger" class="nav-trigger">
          <label for="nav-trigger">
            <span class="menu-icon">
              <svg viewBox="0 0 18 15" width="18px" height="15px">
                <path
                  d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"
                ></path>
              </svg>
            </span>
          </label>

          <div class="trigger" v-if="$themeConfig.nav">
            <!-- <ul> -->
            <template v-for="(navItem, index) in $themeConfig.nav">
              <!-- <li> -->
              <saber-link :key="index" class="page-link" :to="navItem.link">{{ navItem.text }}</saber-link>
              <!-- </li> -->
            </template>
            <!-- </!-->
            <a href="https://github.com/24OI/OI-wiki" target="_blank" class="github-link">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                class="svg-inline--fa fa-github fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleLeftbar() {
      if (document.body.classList.contains("show-leftbar")) {
        document.body.classList.remove("show-leftbar");
      } else {
        document.body.classList.add("show-leftbar");
      }
    }
  },

  mounted() {
    const Headroom = require("headroom.js");
    this.headroom = new Headroom(this.$el, {
      onPin() {
        document.body.classList.add("header-pinned");
      },
      onUnpin() {
        document.body.classList.remove("header-pinned");
      }
    });
    this.headroom.init();
  },

  beforeDestroy() {
    if (this.headroom) {
      this.headroom.destroy();
    }
  }
};
</script>


<style scoped>
.header {
  height: var(--header-height);
  background: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  transform: translateY(0);
  transition: transform 0.3s ease;

  & a {
    color: #000;
  }

  &.headroom--unpinned {
    transform: translateY(-100%);
  }
}

.header >>> .container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
}

.toggle {
  margin-right: 5px;
  height: 40px;
  width: 40px;
  padding: 8px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 940922px;
  margin-left: -8px;
  use-select: none;
  outline: none;

  &:hover,
  &:focus {
    background: #f5f5f5;
    cursor: pointer;
  }

  & svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.logo {
  font-size: 1.4rem;
  margin: 0;
  font-weight: 700;
}

.github-link svg {
  ]width: 25px;
  height: 25px;
}

/* .menu {
  list-style: none;
  margin: 0;
  font-size: 1rem;
  display: flex;
  height: 100%;

  & a {
    color: var(--text-light-color);
    display: flex;
    height: 100%;
    align-items: center;
    line-height: 1.7;

    &:hover,
    &.router-link-exact-active {
      color: var(--theme-color);
    }

    &.router-link-exact-active {
      box-shadow: inset 0 -2px 0 var(--theme-color);
    }
  }
}

.menu-item {
  &:not(:first-child) {
    margin-left: 20px;
  }

  & svg {
    width: 20px;
    height: 20px;
  }

  & .discord-link {
    color: #a3b7fb;

    &:hover {
      color: #6c83d4;
    }
  }
} */

.site-nav {
  position: absolute;
  top: 9px;
  right: 15px;
  background-color: #fdfdfd;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  text-align: right;
}
.site-nav .nav-trigger {
  display: none;
}
.site-nav .menu-icon {
  float: right;
  width: 36px;
  height: 26px;
  line-height: 0;
  padding-top: 10px;
  text-align: center;
}
.site-nav .menu-icon > svg path {
  fill: #424242;
}
.site-nav label[for="nav-trigger"] {
  display: block;
  float: right;
  width: 36px;
  height: 36px;
  z-index: 2;
  cursor: pointer;
}
.site-nav input ~ .trigger {
  clear: both;
  display: none;
}
.site-nav input:checked ~ .trigger {
  display: block;
  padding-bottom: 5px;
}
.site-nav .page-link {
  color: #111;
  line-height: 1.5;
  display: block;
  padding: 5px 10px;
  margin-left: 20px;
}
.site-nav .page-link:not(:last-child) {
  margin-right: 0;
}
@media screen and (min-width: 600px) {
  .site-nav {
    position: static;
    float: right;
    border: none;
    background-color: inherit;
  }
  .site-nav label[for="nav-trigger"] {
    display: none;
  }
  .site-nav .menu-icon {
    display: none;
  }
  .site-nav input ~ .trigger {
    display: block;
  }
  .site-nav .page-link {
    display: inline;
    padding: 0;
    margin-left: auto;
  }
  .site-nav .page-link:not(:last-child) {
    margin-right: 20px;
  }
}
</style>
