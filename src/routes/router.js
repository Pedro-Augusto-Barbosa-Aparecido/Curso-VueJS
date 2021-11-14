import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home";
import Videos from "@/pages/Videos";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/videos",
        component: Videos
    },
    {
        path: "/sobre",
        component: Sobre
    },
    {
        path: "/contato",
        component: Contato
    }

];

const router = new VueRouter({
    routes,
    mode: "history"

});

export default router;
