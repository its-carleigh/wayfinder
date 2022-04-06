<template>
	<div>
		<div>Enter a word and see what words are similar to it, and what the word is a type of! (Credit to WordsAPI)</div>
		<div>Enter your word here: </div>
		<div class="d-flex">
			<v-text-field v-model="word" @change="goToApi"></v-text-field>
			<v-btn @click="goToApi">Submit</v-btn>
		</div>
		<div v-if="wordsimilarTo">
			The word <span style="font-weight: bold">{{ word }}</span> is simliar to: 
			<v-textarea :value="wordsimilarTo"></v-textarea>
		</div>
		<div v-if="wordsTypeOf">
			The word <span style="font-weight: bold">{{ word }}</span> is a type of: 
			<v-textarea :value="wordsTypeOf"></v-textarea>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'APIPage',
		data() {
			return {
				word: null,
				wordsimilarTo: null,
				wordsTypeOf: null,
			}
		},
		methods: {
			goToApi() {
				let me = this
				const options = {
				  method: 'GET',
				  url: 'https://wordsapiv1.p.rapidapi.com/words/' + me.word + '/similarTo',
				  headers: {
				    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
				    'X-RapidAPI-Key': '882a7a00b1mshdade817941a1e05p14096ajsn5708438b7509'
				  }
			    }
				const options2 = {
				  method: 'GET',
				  url: 'https://wordsapiv1.p.rapidapi.com/words/' + me.word + '/typeOf',
				  headers: {
				    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
				    'X-RapidAPI-Key': '882a7a00b1mshdade817941a1e05p14096ajsn5708438b7509'
				  }
			    }

				axios.request(options)
					.then(function (response) {
						console.log(response.data)
						if(response.data) {
							me.wordsimilarTo = [...response.data.similarTo]
						}
					}).catch(function (error) {
						console.error(error);
					})

				axios.request(options2)
					.then(function (response) {
						console.log(response.data)
						if(response.data) {
							me.wordsTypeOf = [...response.data.typeOf]
						}
					}).catch(function (error) {
						console.error(error);
					})
			}
		}
	}
</script>