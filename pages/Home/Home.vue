<template>
	<view>
		<view class="sticky-box">
			<Search></Search>
			<scroll-view class="tab-view" scroll-x="true">
				
				<view class="tabs-card">
					<view class="tabs-item"  v-for="(item,index) in tabList" :key="item.id" @click="clickTab(index)" :curren="tabIndex":class="{'active':tabIndex==index}">
					{{item.name}}
					</view>
					<!-- 下划线 -->
					<view class="tab-line"></view>
					<!-- <text class="tabs-item " @click="clickTab" >Hot
					</text>
					<text class="tabs-item" @click="clickTab">Cate</text> -->
					
				</view>
			</scroll-view>	
			
					
		</view>
		
		<scroll-view scroll-x="true" scroll-y="true">
			<Product :productlist="productList"></Product>
		</scroll-view>
	
	</view>
	
</template>

<script>
	import axios from 'axios'
	import Hot from './compont/Nav/hot.vue'
	import Search from './compont/search.vue'
	import  Product from './compont/product.vue'
	import Cate from './compont/Nav/cate.vue'
	export default{
		components:{
			Search,
			Hot,
			Cate,
			Product
			
		},
		data(){
			return{
				productList:[],
				tabIndex:0,
				
				tabList:[],
				
			}
		},
		mounted() {
			this.getData();
		},
		methods:{
			getData(){
				axios.get('/tab_list').then((res)=>{
					console.log(res)
					this.tabList=res.data.tabList
				});
				axios.get('/product_list').then((res)=>{
					this.productList=res.data.datalist[0]	
				})
				
			},
			
			clickTab(index){
				console.log("ok");
				this.tabIndex=index;
				console.log(this.tabIndex);
				
				axios.get('/product_list').then((res)=>{
					console.log(res);
					// this.productList.map((val,index)=>{	
					// this.productList=res.data[index]
					
					// })
					for(var i=0;i<res.data.datalist.length;i++){
						this.productList=res.data.datalist[index]
					}
					console.log(this.productList)
							
					
				})
				
			}
		}
		
	}
</script>

<style>
	.sticky-box{
		position: sticky;
		top: 0;
		background: #fff;
		z-index: 999;
	}
	.tabs-card{
		display: flex;
		align-items: center;
		width: 100%;
		height: 27px;
		border-bottom: 0.5px solid #E3E3E3;
		font-family: Comfortaa;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 16px;
		
		
	}
	.active{
		color: #D81E06;
	}
	.tabs-item{
		margin-left: 17px;
	}
	.tab-line{
		width: 33px;
		height: 0px;
		border-bottom: 2px solid #D81E06;
	}
</style>
