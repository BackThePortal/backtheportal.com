<template>
	<div>
		<h2 class="text-5xl font-medium">Blog</h2>
		<ContentList path="/blog/posts" v-slot="{ posts }">
			{{ posts }}
			<section class="grid">
				<article class="border border-slate-100" v-for="post in posts">
					<h3 v-html="post.title"></h3>
					<p v-text="post.body"></p>
				</article>
			</section>
		</ContentList>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
