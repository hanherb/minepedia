<template>
  <d-container fluid class="main-content-container px-4">
    <d-row>
      <d-col lg="8" class="mx-auto mt-4">
        <d-card class="card-small edit-user-details mb-4">
          <d-card-header class="p-0">

            <!-- User Details - Background -->
            <div class="edit-user-details__bg">
              <img src="@/assets/images/user-profile/up-user-details-background.jpg" alt="User Details Background Image">
              <label class="edit-user-details__change-background">
                            <i class="material-icons mr-1">&#xE439;</i> Change Background Photo
                            <d-input class="d-none" type="file" />
                          </label>
            </div>

          </d-card-header>
          <d-card-body class="p-0">

            <!-- Nav Wrapper -->
            <d-form class="py-4">
              <d-form-row class="mx-4">
                <d-col class="mb-3">
                  <d-form-text tag="p" class="text-muted m-0">Setup your general profile details.</d-form-text>
                </d-col>
              </d-form-row>
              <d-form-row class="mx-4">
                <d-col lg="8">
                  <d-form-row>

                    <!-- Full Name -->
                    <d-col md="12" class="form-group">
                      <label for="fullName">Full Name</label>
                      <d-input v-model="input.fullname" type="text" id="fullName"/>
                    </d-col>

                    <!-- Location -->
                    <d-col md="6" class="form-group">
                      <label for="userLocation">Location</label>
                      <d-input-group seamless>
                        <d-input-group-text slot="prepend">
                          <i class="material-icons">&#xE0C8;</i>
                        </d-input-group-text>
                        <d-input v-model="input.location" id="userLocation"/>
                      </d-input-group>
                    </d-col>

                    <!-- Phone Number -->
                    <d-col md="6" class="form-group">
                      <label for="phoneNumber">Phone Number</label>
                      <d-input-group seamless>
                        <d-input-group-text slot="prepend">
                          <i class="material-icons">&#xE0CD;</i>
                        </d-input-group-text>
                        <d-input v-model="input.phone_number" id="phoneNumber"/>
                      </d-input-group>
                    </d-col>

                    <!-- Email Address -->
                    <d-col md="12" class="form-group">
                      <label for="emailAddress">Email</label>
                      <d-input-group seamless>
                        <d-input-group-text slot="prepend">
                          <i class="material-icons">&#xE0BE;</i>
                        </d-input-group-text>
                        <d-input v-model="input.email" id="emailAddress" disabled />
                      </d-input-group>
                    </d-col>

                  </d-form-row>
                </d-col>

                <!-- User Profile Picture -->
                <d-col lg="4">
                  <label for="userProfilePicture" class="text-center w-100 mb-4">Profile Picture</label>
                  <div class="edit-user-details__avatar m-auto">
                    <img :src="avatarImg" alt="User Avatar">
                    <label class="edit-user-details__avatar__change">
                                <i class="material-icons mr-1">&#xE439;</i>
                                <input @change="onFileChange" type="file" id="userProfilePicture" class="d-none" />
                              </label>
                  </div>
                  <span v-if="profile_picture_upload.name" size="sm" class="d-table mx-auto mt-4"><i class="material-icons">&#xE2C3;</i> Image Uploaded</span>
                </d-col>

              </d-form-row>

              <d-form-row class="mx-4">

                <!-- User Bio -->
                <d-col md="6" class="form-group">
                  <label for="userBio">Bio</label>
                  <textarea v-model="input.description" rows="5" wrap="soft" class="form-control form-control-lg" />
                </d-col>

              </d-form-row>

              <hr />

              <!-- Change Password -->
              <d-form-row class="mx-4">
                <d-col class="mb-3">
                  <d-form-text tag="h6" class="m-0">Change Password</d-form-text>
                  <d-form-text tag="p" class="text-muted m-0">Change your current password.</d-form-text>
                </d-col>
              </d-form-row>

              <d-form-row class="mx-4">

                <!-- Old Password -->
                <d-col md="4" class="form-group">
                  <label for="oldPassword">Old Password</label>
                  <d-input type="password" id="oldPassword" placeholder="Old Password" />
                </d-col>

                <!-- New Password -->
                <d-col md="4" class="form-group">
                  <label for="newPassword">New Password</label>
                  <d-input type="password" id="newPassword" placeholder="New Password" />
                </d-col>

                <!-- Repeat New Password -->
                <d-col md="4" class="form-group">
                  <label for="repeatNewPassword">Repeat New Password</label>
                  <d-input type="password" id="repeatNewPassword" placeholder="Repeat New Password" />
                </d-col>

              </d-form-row>
            </d-form>
          </d-card-body>

          <!-- Save Changes -->
          <d-card-footer class="border-top">
            <d-button size="sm" class="btn-accent ml-auto d-table mr-3" v-on:click="submitFile">
              Save Changes
            </d-button>
          </d-card-footer>

        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import graphqlFunction from '../graphqlFunction';
import address from '../address';
import headers from '../headers';

export default {
  name: 'update-user',
  data(){
      return{
        input:{
          email: "",
          fullname: "",
          location: "",
          phone_number: "",
          biodata: "",
        },
        id: "",
        role: "",
        authority: [],
        status: "",
        profile_picture: "",
        profile_picture_upload: [],
        avatarImg: require('@/assets/images/uploads/' + this.$session.get('user').profile_picture + '.png'),
      }
  },

  created: function()
  {
      this.fetchUser();
  },

  methods: {
      fetchUser() {
        let id = this.$session.get('user')._id;
        this.axios.get(address + ":3000/get-user", headers).then((response) => {
          let query = `query getSingleUser($userId: String!) {
            user(_id: $userId) {
              _id
              fullname
              email
              role
              authority
              status
              location
              phone_number
              biodata
              profile_picture
            }
          }`;
          let variable = {
            userId: id
          };
          graphqlFunction.graphqlFetchOne(query, variable, (result) => {
            this.id = result.user._id;
            this.input.email = result.user.email;
            this.input.fullname = result.user.fullname;
            this.input.location = result.user.location;
            this.input.phone_number = result.user.phone_number;
            this.input.biodata = result.user.biodata;
            this.role = result.user.role;
            this.authority = result.user.authority;
            this.status = result.user.status;
            this.profile_picture = result.user.profile_picture;
          });
        })
      },

      onFileChange(event) {
        this.profile_picture_upload = event.target.files[0];
      },

      submitFile() {
        if(!this.input.fullname || !this.input.location || !this.input.phone_number) {
          alert("Please fill the provided form");
        }
        else {
          let formData = new FormData();
          formData.append('profile_picture', this.profile_picture_upload, 'profile_' + this.id);

          this.axios.post(address + ':3000/post-picture', formData, headers)
          .then((response) => {
            if(response.data != 'No Profile Picture Uploaded') {
              this.profile_picture = response.data.originalname;
              this.updateSession(response.data.originalname);
            }
            this.updateUser();
          });
        }
      },

      updateUser() {
        if(this.status == "wait-profile"){
          this.status = "active";
          localStorage.setItem('user_status', 'active');
        }
        let postObj = {
          email: this.input.email, 
          fullname: this.input.fullname,
          role: this.role,
          authority: this.authority,
          status: this.status,
          location: this.input.location,
          phone_number: this.input.phone_number,
          biodata: this.input.biodata,
          profile_picture: this.profile_picture,
        };
        this.axios.post(address + ':3000/update-user', postObj, headers)
        .then((response) => {
          let query = `mutation updateSingleUser($userEmail:String!, $input:PersonInput) {
              updateUser(email: $userEmail, input: $input) {
                  fullname
              }
          }`;
          let variables = {
            userEmail: this.input.email,
            input: postObj
          }
          graphqlFunction.graphqlMutation(query, variables, (result) => {
            location.reload();
            alert("Update User Success");
          });

        });
      },

      updateSession(picture) {
        var temp = this.$session.get('user');
        temp.profile_picture = picture;
        temp.status = 'active';
        this.$session.set('user', temp);
      }
  }
};
</script>
