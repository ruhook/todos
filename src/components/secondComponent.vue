<script type="text/javascript">
	export default {
		data() {
		    return {
		      author: "微信公众号 jinkey-love",
		      articles: []
		    }
		}
	}
</script>

<template>
	<div id="secondcomponent">
		<h1>I am anthoer page</h1>
		<a>written by {{ author }}</a>
		<p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
		<router-link to="second/san">去第3页</router-link>
	    <router-link to="/">返回首页</router-link>
	</div>
</template>