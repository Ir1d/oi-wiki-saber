<template>
  <Wrap :page="page" :showLeftbar="false">
    <h1 class="page-title">{{ page.attributes.title }}</h1>
    <PostMeta :page="page"/>
    <div class="page-content">
      <slot name="default"/>
    </div>
    <div class="prev-next-page">
      <saber-link class="prev-page" v-if="prevNextPage.prev" :to="prevNextPage.prev.link">
        <span class="arrow">←</span>
        {{ prevNextPage.prev.title }}
      </saber-link>
      <saber-link class="next-page" v-if="prevNextPage.next" :to="prevNextPage.next.link">
        {{ prevNextPage.next.title }}
        <span class="arrow">→</span>
      </saber-link>
    </div>
  </Wrap>
</template>

<script>
import Wrap from "../components/Wrap.vue";
import PostMeta from "../components/PostMeta.vue";

export default {
  components: {
    Wrap,
    PostMeta
  },

  props: ["page"],

  mounted() {
    // console.log(window.MathJax);
    if (window.MathJax) {
      window.MathJax.Hub.Config({
        showProcessingMessages: false, //关闭js加载过程信息
        messageStyle: "none", //不显示信息
        jax: ["input/TeX", "output/HTML-CSS"],
        tex2jax: {
          inlineMath: [["$", "$"], ["\\(", "\\)"]], //行内公式选择符
          displayMath: [["$$", "$$"], ["\\[", "\\]"]], //段内公式选择符
          skipTags: [
            "script",
            "noscript",
            "style",
            "textarea",
            "pre",
            "code",
            "a"
          ], //避开某些标签
          processEscapes: true
        },
        "HTML-CSS": {
          availableFonts: ["STIX", "TeX"] //可选字体
          // showMathMenu: false //关闭右击菜单显示
        }
      });

      window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    }
  },

  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`,
      meta: [
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:site",
          content: "@saber_land"
        },
        {
          name: "twitter:title",
          content: this.page.attributes.title
        },
        {
          name: "twitter:description",
          content: this.page.attributes.subtitle
        }
      ]
    };
  },
  computed: {
    flatSidebarItems() {
      return this.$themeConfig.sidebarMenu.reduce((res, item) => {
        return res.concat(item.children);
      }, []);
    },
    prevNextPage() {
      for (const [index, item] of this.flatSidebarItems.entries()) {
        if (item.link === this.$route.path) {
          return {
            prev: this.flatSidebarItems[index - 1],
            next: this.flatSidebarItems[index + 1]
          };
        }
      }
      return {};
    }
  }
};
</script>

<style scoped>
.prev-next-page {
  display: inline-block;
  width: 100%;
  margin-top: 80px;
}

.arrow {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

.prev-page {
  float: left;
}

.next-page {
  float: right;
}

.prev-page,
.next-page {
  border: 1px solid var(--border-color);
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 0.875rem;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    border-color: #dddddd;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
}
</style>
