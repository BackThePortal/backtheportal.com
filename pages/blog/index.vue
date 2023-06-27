<template>
	<div>
		<h2 class="text-5xl font-medium">Blog</h2>
		<article v-for="post in contentQuery">
			<h3>{{ post.title }}</h3>
		</article>
	</div>
</template>

<script setup lang="ts">
const contentQuery = await queryContent('blog', 'posts')
	.sort({ title: 1 })
	.limit(5)
	.find();
</script>

<style scoped></style>
