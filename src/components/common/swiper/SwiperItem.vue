<template>
	<div class="slide">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Slide",
};
</script>

<style >
.slide {
	width: 100%;
	/* width: 375.2px; */
	flex-shrink: 0;
}

.slide img {
	width: 100%;
}
</style>
