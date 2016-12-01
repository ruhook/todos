<script type="text/javascript">
	export default {
		data() {
			return {
				author: "微信公众号 jinkey-love"
			}
		}
	}
</script>

<template>
	<div id="firstcomponent">
		<h1>I am a title</h1>
		<a>written by {{ author }}</a>
		<div>{{ $route.params.id }}</div>
		<router-link to="second">去第2页</router-link>
	    <router-link to="/">返回首页</router-link>
	</div>
</template>
