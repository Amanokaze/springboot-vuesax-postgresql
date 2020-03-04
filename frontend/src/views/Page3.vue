<template>
	<div>
		<h4>PostgreSQL Procedure Test - Create Menu</h4>
    <div class="p-8">
      <form name="form" @submit.prevent="handleCreate">
          <div class="vx-card__title">
              <h4 class="mb-4">Create Menu</h4>
          </div>
          <div class="clearfix">
              <vs-input
                  data-vv-validate-on="blur"
                  name="name"
                  label-placeholder="Name"
                  placeholder="Name"
                  v-model="name"
                  class="w-full mt-6" />

              <vs-input
                  data-vv-validate-on="blur"
                  name="parent_id"
                  label-placeholder="Parent ID"
                  placeholder="Parent ID"
                  v-model="parent_id"
                  class="w-full mt-6" />

              <vs-input
                  data-vv-validate-on="blur"
                  name="seq"
                  label-placeholder="Sequence"
                  placeholder="Sequence"
                  v-model="seq"
                  class="w-full mt-6" />

              <vs-input
                  data-vv-validate-on="blur"
                  name="description"
                  label-placeholder="Description"
                  placeholder="Description"
                  v-model="description"
                  class="w-full mt-6" />

              <vs-button class="float-right mt-6">Create</vs-button>
              <div v-if="message" class="alert alert-danger" role="alert">{{ result }}{{ message }}</div>
          </div>
      </form>
      </div>
	</div>
</template>
<script>
import axios from 'axios';
const API_URL = 'http://localhost:8080/api/data/';

export default {
  name: 'Page3',
  data() {
    return {
      name: '',
      parent_id: '',
      seq: '',
      description: '',
      result: '',
      message: ''
    };
  },
  methods: {
    handleCreate() {
      return axios
        .post(API_URL + 'insertMenu', {
          name: this.name,
          parent_id: this.parent_id,
          seq: this.seq,
          description: this.description
        })
        .then(response => {
            console.log(response.data);
            this.result = response.data.x_result;
            this.message = response.data.x_message;
        });
    }    
  }
};
</script>