import "nprogress/nprogress.css";
import "../src/highlight.css";
import "./css/global.css";
import "./css/prism.css";
import "./css/page.css";

export default ({ router, setHead, rootOptions }) => {
  if (process.browser) {
    const nprogress = require("nprogress");

    const loaded = Object.create(null);

    nprogress.configure({ showSpinner: false });

    router.beforeEach((to, from, next) => {
      if (!loaded[to.path]) {
        nprogress.start();
      }
      next();
    });

    router.afterEach(to => {
      loaded[to.path] = true;
      nprogress.done();
    });
  }

  setHead(vm => ({
    meta: [
      {
        name: "description",
        content: vm.$siteConfig.description
      }
    ]
  }));
  rootOptions.head = function() {
    return {
      script: [
        {
          type: "text/javascript",
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML",
          async: true
        }
      ]
    };
  };
};
