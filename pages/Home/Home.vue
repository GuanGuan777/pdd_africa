<template>
	<view>
		<Search></Search>
		<Product></Product>
	</view>
</template>

<script>
	import axios from 'axios'
	import Search from './compont/search.vue'
	import Product from './compont/product.vue'
	export default{
		components:{
			Search,
			Product
		},
		data(){
			return{
				productList:[]
			}
		},
		mounted() {
			this.getData();
		},
		methods:{
			getData(){
				axios.get('/product_list').then((res)=>{
					console.log(res)
				})
			}
		}
		
	}
</script>

<style>
	
</style>
