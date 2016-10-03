<template>
	<div>
	  <div class="minilogo"></div>
	  <div>
	    <strong>{{ Author }}</strong>
	    <span>{{ When }}</span>
	  </div>
  </div>
</template>

<script>
export default {
	props: {
		Author: String,
		When: Date,
	}
};
</script>