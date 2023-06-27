<template>
	<NuxtLink
		:to="to"
		:class="[
			route.path === to ? 'font-bold' : '',
			className ?? 'rounded-md px-2 py-1 transition hover:bg-sky-200/30',
		]"
	>
		<slot
	/></NuxtLink>
</template>

<script setup lang="ts">
defineProps(['to', 'className']);

const route = useRoute();
</script>

<style scoped>
a {
	@apply no-underline;
}
</style>
