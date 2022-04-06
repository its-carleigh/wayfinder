<template>
	<div>
		<v-menu 
			offset-y
		>
			<template v-slot:activator="{ on }">
				<v-btn v-on="on">Click Me To See Color Options
					<v-icon :color="selectedColor">fa-solid fa-square</v-icon>
				</v-btn>
			</template>
			<v-card style="max-width: 325px">
				<span v-for="color in colors">
					<v-icon @click="onColorChange(color)" :color="color">fa-solid fa-square</v-icon>
				</span>
			</v-card>
		</v-menu>
	</div>
</template>

<script>
	export default {
		name: 'CustomColorSelector',
		data() {
			return {
				colors: ['#0049FF', '#2B87FF', '#539AF8', '#89B7F4', '#C4DCFA',
						'#0EA449', '#49C379', '#5BE893', '#84FFB5', '#B4F8CF',
						'#FF8E07', '#FFA200', '#FFBD00', '#FFE072', '#FFEEAA',
						'#F02D1F', '#FD4336', '#FF675D', '#FF8D85', '#F8D1CE',
						'#3CCCCA', '#53DAD8', '#66EEEC', '#93F9F7', '#C0FBFA',
						'#5A53C9', '#746DE0', '#8E88EA', '#AFAAF9', '#DCDAFB'],
				selectedColor: '#0049FF',
				openMenu: false,
			}
		},
		methods: {
			onColorChange(color) {
				this.selectedColor = color
				this.$store.commit('updateThemeColor', color)
			}
		}
	}
</script>