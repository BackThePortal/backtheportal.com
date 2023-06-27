<template>
	<div>
		<ContentDoc :path="$route.path">
			<template #not-found>
				<h1 class="mb-2 text-3xl font-bold text-red-400">Post not found.</h1>
				<p>Go back to <NuxtLink to="/blog">blog</NuxtLink>.</p>
			</template>
			<template v-slot="{ doc }">
				<p class="font-light">
					Written by
					<span class="font-medium text-sky-200">{{ doc.author }}</span> on
					<span class="font-medium">{{
						dayjs(doc.date).format('dddd, MMMM D, YYYY hh:mm A')
					}}</span>
				</p>
				<article class="prose prose-sky mt-2 font-light">
					<h1 class="text-sky-200">{{ doc.title }}</h1>
					<ContentRenderer :value="doc"> </ContentRenderer>
				</article>
			</template>
		</ContentDoc>
	</div>
</template>

<script setup lang="ts">
import { useDayjs } from '#imports';

const route = useRoute();
const post = ref();

const dayjs = useDayjs();
</script>

<style scoped>
a {
	@apply no-underline;
}
</style>
