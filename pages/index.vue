<template>
	<div class="mb-4">
		<h2 class="text-5xl font-medium">
			Hi there, I'm <span class="text-sky-200">Backo</span>.
		</h2>
		<p class="text-2xl">Also known as BackThePortal in other places.</p>
	</div>

	<p>
		Welcome to my website, made in
		<a href="https://nuxt.com" target="_blank">Nuxt 3</a>. Here you'll find all
		my web projects, as well as my blog and other cool things I've done.
	</p>

	<p>I'm...</p>

	<h3 class="mb-4 mt-6 text-2xl font-bold">Latest blog posts</h3>
</template>

<script setup lang="ts">
const sentences = {
	list: [
		"Isn't this website a little empty?",
		'I wonder if those aliens are here or not.',
		'Never trust strangers on the Internet.',
		'I should step outside and touch grass.',
		"Huh? Didn't know you could do that.",
	],
	get random() {
		return this.list[Math.floor(Math.random() * this.list.length)];
	},
};

const sentence = ref(sentences.random);
</script>

<style>
@tailwind base;
@layer base {
	p {
		@apply mb-2;
	}
}
</style>
