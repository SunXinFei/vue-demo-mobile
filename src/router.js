import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/blog_rules"
    },
    {
      path: "/blog_rules",
      name: "BlogRules",
      component: () =>
        import(/* webpackChunkName: "blog_rules" */ "./views/BlogRules.vue")
    },
    {
      path: "/blog_list/:id",
      props: true,
      name: "BlogList",
      component: () =>
        import(/* webpackChunkName: "blog_list" */ "./views/BlogList.vue")
    }

  ]
});
