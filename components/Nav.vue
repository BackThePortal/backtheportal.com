<template>
	<header
		class="group absolute sticky top-0 flex border-b-4 border-slate-300 bg-sky-700/50 p-4 shadow-lg backdrop-blur-sm transition hover:border-white hover:bg-sky-600/70 hover:shadow-2xl"
	>
		<NavLink
			to="/"
			class-name="text-4xl font-bold text-slate-300 group-hover:text-white active:!text-sky-300"
		>
			Backo.
		</NavLink>
		<div
			class="flex grow place-items-center justify-end gap-2 text-xl font-light"
		>
			<NavLink to="/blog">Blog</NavLink>
			<NavLink to="/projects">Projects</NavLink>
		</div>
	</header>
</template>

<script></script>

<style scoped></style>
