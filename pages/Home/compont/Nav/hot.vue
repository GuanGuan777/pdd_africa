<template>
	<view>
		<Product></Product>
	</view>
</template>

<script>
	import axios from 'axios'
	import Search from '../search.vue'
	import Tabs from '../tabs.vue'
	import Product from '../product.vue'
	export default{
		components:{
			Search,
			Tabs,
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
