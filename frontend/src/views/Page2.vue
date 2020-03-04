<template>
	<div>
		<h4>PostgreSQL Table Query Test</h4>
		<div class="sample">
			<ul v-if="sites && sites.length">
				<li v-for="(site, idx) of sites" v-bind:key="idx">
          {{ site.id }} / 
					{{ site.site_name }} / 
          {{ site.location }} / 
          {{ site.country }}
					<hr>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import DataService from '../services/data.service';

export default {
  name: 'User',
  data() {
    return {
      sites: []
    };
  },
  mounted() {
    DataService.getSites().then(
      response => {
        this.sites = response.data;
        console.log(this.sites);
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>