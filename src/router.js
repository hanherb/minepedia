import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Errors from './views/Errors.vue';
import Tables from './views/Tables.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: '/home',
      meta: { layout: 'no-navigation' },
      component: Home,
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('./views/Analytics.vue'),
    },
    {
      path: '/user-profile/:id',
      name: 'user-profile',
      component: () => import('./views/UserProfile.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'no-navigation' },
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'no-navigation' },
      component: Register,
    },
    {
      path: '/rekap-belanja-barang',
      name: 'rekap-belanja-barang',
      component: () => import('./views/RekapBelanjaBarang.vue'),
    },
    {
      path: '/rekap-belanja-barang-total',
      name: 'rekap-belanja-barang-total',
      component: () => import('./views/RekapBelanjaBarangTotal.vue'),
    },
    {
      path: '/rekap-belanja-barang-perusahaan',
      name: 'rekap-belanja-barang-perusahaan',
      component: () => import('./views/RekapBelanjaBarangPerusahaan.vue'),
    },
    {
      path: '/rekap-arus-kas',
      name: 'rekap-arus-kas',
      component: () => import('./views/RekapArusKas.vue'),
    },
    {
      path: '/rekap-anggaran-belanja',
      name: 'rekap-anggaran-belanja',
      component: () => import('./views/RekapAnggaranBelanja.vue'),
    },
    {
      path: '/rekap-asumsi-keuangan',
      name: 'rekap-asumsi-keuangan',
      component: () => import('./views/RekapAsumsiKeuangan.vue'),
    },
    {
      path: '/rekap-harga-pokok',
      name: 'rekap-harga-pokok',
      component: () => import('./views/RekapHargaPokok.vue'),
    },
    {
      path: '/rekap-investasi',
      name: 'rekap-investasi',
      component: () => import('./views/RekapInvestasi.vue'),
    },
    {
      path: '/rekap-keuangan-lainnya',
      name: 'rekap-keuangan-lainnya',
      component: () => import('./views/RekapKeuanganLainnya.vue'),
    },
    {
      path: '/rekap-laba-rugi',
      name: 'rekap-laba-rugi',
      component: () => import('./views/RekapLabaRugi.vue'),
    },
    {
      path: '/rekap-neraca',
      name: 'rekap-neraca',
      component: () => import('./views/RekapNeraca.vue'),
    },
    {
      path: '/rekap-penerimaan-negara',
      name: 'rekap-penerimaan-negara',
      component: () => import('./views/RekapPenerimaanNegara.vue'),
    },
    {
      path: '/rekap-sumber-pembiayaan',
      name: 'rekap-sumber-pembiayaan',
      component: () => import('./views/RekapSumberPembiayaan.vue'),
    },
    {
      path: '/rekap-user',
      name: 'rekap-user',
      component: () => import('./views/RekapUser.vue'),
    },
    {
      path: '/company-list',
      name: 'company-list',
      component: () => import('./views/CompanyList.vue'),
    },
    {
      path: '/supplier-list',
      name: 'supplier-list',
      component: () => import('./views/SupplierList.vue'),
    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/tables',
      name: 'tables',
      component: Tables,
    },
    {
      path: '/not-admin',
      name: 'not-admin',
      meta: { layout: 'non-admin' },
      component: () => import('./views/NotAdmin.vue'),
    },
    {
      path: '/not-authenticated',
      name: 'not-authenticated',
      component: () => import('./views/NotAuthenticated.vue'),
    },
    {
      path: '*',
      redirect: '/errors',
    },
  ],
});
