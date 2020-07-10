<template>
	<view>
		<!-- 这个组件主要负责商品列表-->
		
			<view class="product-list">
			
				<view class="product" v-for="item in productList" :key="item.id" @click="goPath">
					<view class="product-image">
						<image :src="item.img" mode="widthFix"></image>
					</view>
					<view class="product-text">
						<view class="product-name">
						{{item.title}}
						</view>
						<view class="product-price">
							<text> XAF {{item.price}}</text>
							
						</view>
						<view class="product-num">
							已拼{{item.num}}件
						</view>
					</view>
				</view>
				
				
			</view>
		
	</view>
</template>

<script>
	import axios from 'axios'
	export default{
		data (){
			return {
				productList:[]
			}
		},
		mounted() {
			this.getData();
		},
		methods:{
			getData(){
				axios.get('/product_list').then((res)=>{
					console.log(res);
					this.productList=res.data
				})
			},
			goPath(){
				console.log("ok")
				uni.navigateTo({
					url:"./Detail/detail"
				})
			}
		}
	}
</script>

<style scoped>
	.product-list{
		margin: 0 15px;
	}
	.product{
		display: flex;
		width: 345px;
		height: 143px;
		border-bottom: 0.5px solid #E3E3E3;
		margin-bottom: 15px;
	}
	.product-image image{
		width: 152px;
		height: 143px;
		
	}
	.product-text{
		padding: 3px 5px 6px 7px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.product-name{
		font-family: STSong;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
		display: flex;
		align-items: center;
		letter-spacing: -0.015em;
		
		color: #000000;
	}
	.product-price{
		font-family: Arial;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 152.36%;
		letter-spacing: -0.015em;
		color: #D81E06;
		
	}
	.product-num{
		font-family: STSong;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: -0.015em;
		
		color: #000000;
		
	}
</style>
