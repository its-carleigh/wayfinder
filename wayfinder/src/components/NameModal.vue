<template>
	<v-dialog v-model="openDialog" maxWidth="400" persistent>
     <v-card style="padding: 20px">
        <span>Please enter your name:</span>
        <v-text-field placeholder="hello! enter name here" v-model="name" @change="onNameChange" class="ma-4"/>
        <v-btn @click="resetInitial">Close</v-btn>
     </v-card>
  </v-dialog>
</template>

<script>
	export default {
		name: 'NameModal',
		data() {
			return {
				openDialog: true,
				name: null
			}
		},
		methods: {
			onNameChange() {
				this.$store.commit('updateUserName', this.name)
			},
			resetInitial() {
    		this.$store.commit('setInitialLoad', false)
			}
		},
	}
</script>