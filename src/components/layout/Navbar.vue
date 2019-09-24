<template>
  <header class="main_menu home_menu">
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-11">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a v-if="!session" class="navbar-brand no-session" href="/"> <img src="@/assets/images/icons/logo.png" alt="logo"> </a>
                    <a v-else class="navbar-brand session" href="/"> <img src="@/assets/images/icons/logo.png" alt="logo"> </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="menu_icon"><i class="fas fa-bars"></i></span>
                    </button>

                    <div class="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shop">Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div class="main-menu-item">
                        <a v-if="!session" href="/login" role="button">Login</a>
                        <!-- <a v-else v-on:click="logout" role="button" style="cursor: pointer">Logout</a> -->
                        <div class="nav-item dropdown" v-else>
                            <a class="nav-link dropdown-toggle text-nowrap px-3" v-d-toggle.user-actions style="cursor: pointer">
                                <img class="user-avatar rounded-circle mr-2" :src="avatarImg" alt="User Avatar"> <span class="d-none d-md-inline-block">{{session.fullname}}</span>
                            </a>
                            <d-collapse id="user-actions" class="dropdown-menu dropdown-menu-small">
                                <d-dropdown-item><i class="material-icons">&#xE7FD;</i> Profile</d-dropdown-item>
                                <d-dropdown-divider />
                                <d-dropdown-item href="#" class="text-danger">
                                  <i class="material-icons text-danger">&#xE879;</i> <span v-on:click="logout">Logout</span>
                                </d-dropdown-item>
                            </d-collapse>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
import graphqlFunction from '@/graphqlFunction';
import basicFunction from '@/basicFunction';
import address from '@/address';
export default {
  name: 'navbar',
  data(){
      return{
          session: {},
          avatarImg: null,
      }
  },

  created: function()
  {
      this.fetchSession();
  },

  methods: {
    fetchSession() {
        this.session = this.$session.get('user');
        if(this.session) {
            this.avatarImg = require('@/assets/images/uploads/' + this.$session.get('user').profile_picture + '.png')
        }
    },
    logout() {
        this.axios.get(address + ":3000/logout").then((response) => {
            alert("Successfully Logged Out");
            basicFunction.deleteAllCookies();
            localStorage.clear();
            this.$session.destroy();
            this.$router.push('/');
            location.reload();
        });
    },
  }
};
</script>
<style scoped>
    .user-avatar {
        width: 40px;
        height: 40px;
    }
    @media screen and (max-width: 600px) {
        .session img {
            margin-top: 23px;
        }
    }
</style>
