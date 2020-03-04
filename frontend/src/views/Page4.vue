<template>
	<div>
		<h4>PostgreSQL Table Query Test</h4>
    <div class="p-8">
      <form name="form" @submit.prevent="handleGet">
          <div class="vx-card__title">
              <h4 class="mb-4">Get Menu</h4>
          </div>
          <div class="clearfix">
              <vs-input
                  data-vv-validate-on="blur"
                  name="name"
                  label-placeholder="Name"
                  placeholder="Name"
                  v-model="name"
                  class="w-full mt-6" />

              <vs-button class="float-right mt-6">Get Desc</vs-button>
          </div>
      </form>
      </div>
	</div>
</template>
<script>
import axios from 'axios';
const API_URL = 'http://localhost:8080/api/data/';

export default {
  name: 'Page4',
  data() {
    return {
      name: ''
    };
  },
  methods: {
    handleGet() {
      return axios
        .post(API_URL + 'getMenuDesc', {
          name: this.name,
        })
        .then(response => {
            console.log(response.data);
            if (response.data.description == null) {
              alert('No data found');
            } else {
              alert(response.data.description);
            }
        })
        .catch(error => {
          console.log(error.response)
          alert('Unexpected Error');
        });
    }    
  }
};

</script>