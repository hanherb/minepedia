let query = {
	allUser: `query getAllUser {
      users {
        _id
        fullname
        email
        role
        status
        authority
        badan_usaha
        izin
        generasi
        tahapan_kegiatan
        komoditas
        alamat_kantor
        telepon
        fax
        website
        npwp
        lokasi_tambang
        siup
        tdp
        skt_minerba
        profile_picture
      }
    }`,

	singleUser: `query getSingleUser($userId: String!) {
      user(_id: $userId) {
        _id
        fullname
        email
        role
        status
        authority
        badan_usaha
        izin
        generasi
        tahapan_kegiatan
        komoditas
        alamat_kantor
        telepon
        fax
        website
        npwp
        lokasi_tambang
        siup
        tdp
        skt_minerba
        profile_picture
      }
    }`,

    addUser: `mutation createSingleUser($input:PersonInput) {
          createUser(input: $input) {
              fullname
          }
  	}`,

  	updateUser: `mutation updateSingleUser($userEmail:String!, $input:PersonInput) {
          updateUser(email: $userEmail, input: $input) {
              fullname
          }
  	}`,

  	deleteUser: `mutation deleteSingleUser($userEmail:String!) {
	      deleteUser(email: $userEmail) {
	          fullname
	      }
  	}`,

    allCommerce: `query getAllItem {
	    commerces {
	      _id
	      name
	      price
	      qty
	      description
	      category
	      user
	      user_id
	      image
	    }
  	}`,

    singleCommerce: `query getSingleItem($itemId: String!) {
	    commerce(_id: $itemId) {
	      _id
	      name
	      price
	      qty
	      description
	      category
	      user
	      user_id
	      image
	    }
  	}`,

  	addCommerce: `mutation createSingleCommerce($input:CommerceInput) {
	      createCommerce(input: $input) {
	          name
	      }
  	}`,

  	updateCommerce: `mutation updateSingleCommerce($itemId: String!, $input:CommerceInput) {
          updateCommerce(_id: $itemId, input: $input) {
              name
          }
 	}`,

 	deleteCommerce: `mutation deleteSingleCommerce($itemId: String!) {
          deleteCommerce(_id: $itemId) {
              name
          }
  	}`,

  	allRole: `query getAllRole {
	    roles {
	        role_name
	    }
  	}`,

  	allPlugin: `query getAllPlugin {
        plugins {
          name
          status
        }
  	}`
}

export default query;