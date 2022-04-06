<template>
	<div class="d-flex" style="justify-content: space-between">
		<div>
			Monkey Card!
			<v-img :src="require('@/assets/monkey.jpg')" max-width="400px" max-height="300px"/>
		</div>
		and
		<div>
			Otis Card!
			<v-img :src="require('@/assets/otis.jpg')" max-width="400px" max-height="300px"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Pictures'
	}
</script>