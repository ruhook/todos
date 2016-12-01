<script type="text/javascript">
	import { mapActions } from 'vuex';
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {
				inpt: ''
			}
		},
		computed: {
			...mapGetters({
				getTest: 'getTest'
			})
		},
		methods: {
			...mapActions([
				'testing'
			])
		}
	}
</script>

<template>
	<div>
		<div>{{ inpt }}</div>
		<input id="inpt" v-model="inpt" />
		<div @click="testing">{{ getTest }}</div>
	    <router-link to="/vuex2/first/200">第一页</router-link>
	    <br/>
	    <router-link to="/vuex2/second">第二页</router-link>
	</div>
</template>

