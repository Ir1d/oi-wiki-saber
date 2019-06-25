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
      <div class="header-right">
        <ul class="menu">
          <li class="menu-item">
            <saber-link to="/intro">简介</saber-link>
          </li>
          <li class="menu-item">
            <saber-link to="/basic.html">基础部分</saber-link>
          </li>
          <li class="menu-item">
            <saber-link to="/search/">搜索</saber-link>
          </li>
          <li class="menu-item">
            <saber-link to="/dp/">动态规划</saber-link>
          </li>
          <li class="menu-item">
            <saber-link to="/string/">字符串</saber-link>
          </li>
          <li class="menu-item">
            <saber-link to="/math/">数学</saber-link>
          </li>
          <li class="menu-item">
            <saber-link to="/ds/">数据结构</saber-link>
          </li>

          <li class="menu-item">
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
          </li>
        </ul>
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

.menu {
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
}
</style>
