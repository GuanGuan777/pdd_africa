<template>
	<view class="container">
		<!-- 这个子组件主要负责写header+导航-->
		<!-- 上面的状态栏 -->
		<view class="uni-status-bar"></view>
		<!-- 头部包括 菜单购物车 -->
		<view class="header">
			<view class="Menu">
			<view class="iconfont icon-caidan"></view>
			</view>
			
			<view class="Cart">
				<view class="iconfont icon-cart">
					
				</view>
			</view>
		</view>
		<!-- 搜索框 -->
		<view class="Search-bar">
			
			<input   class="Search-box" type="text" value="" />
			
			<view class="Search-text">
				human hair wig
			</view>
			<view class="iconfont icon-sousuo">
				
			</view>
			
		</view>
		<!-- 导航栏 -->
		
		
		
	</view>
</template>

<script>
	export default{
		
		data(){
			return{
				
			}
		},
		methods:{
			clickTab(){
				
			}
		}
	}
</script>

<style scoped>
	.container{
		margin: 0 15px;
	}
	/* 状态栏 */
	.uni-status-bar{
			width: 100%;
			height: 44px;
			/* background-color:green ; */
		}
		/* 头部 */
	.header{
			width: 100%;
			height: 36px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	.Menu .icon-caidan{
		color: #515151;	
		font-size: 40rpx;
	}
	/* 搜索框 */
	.Search-box{
		position: absolute;
		width: 275px;
		height: 36px;
		left: 50px;
		top: 44px;
		background: #E3E3E3;
		border-radius: 4px;
	}
	.Search-text{
		position: absolute;
		width: 113.98px;
		height: 16px;
		left: 152.22px;
		top: 54px;
		
		font-family: Comfortaa;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		letter-spacing: -0.333333px;
		color: #707070;
	}	
	.icon-sousuo{
		position: absolute;
		left: 35.57%;
		right: 60.7%;
		top: 55px;
		bottom: 94.01%;
		font-size: 14px;
		
		
	}
		
	/* 购物车 */
	.Cart{
		
	}
	.Cart .icon-cart{
		color: #515151;
		font-size: 50rpx;
	}
	/* 导航栏 */
	/* .Navigate-bar{
		width: 100%;
		height: 27px;
		
		
		display: flex;
		border-bottom: 0.5px solid #E3E3E3;
	}
	.hot{
		
		position: absolute;
		width: 27px;
		height: 16px;
		left: 17px;
		top: 86px;
		
		
		font-family: Comfortaa;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 16px;
		
		
		display: flex;
		align-items: center;
		text-align: center;
		letter-spacing: -0.015em;
		
		color: #D81E06;
	}
	.cate{
		position: absolute;
		width: 34px;
		height: 16px;
		left: 62px;
		top: 86px;
		font-family: Comfortaa;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 16px;
	
		
		display: flex;
		align-items: center;
		text-align: center;
		letter-spacing: -0.015em;
		
		color: #4F4E4E;
	} */
	/* .tabs{
		display: flex;
		align-items: center;
		width: 100%;
		height: 27px;
		border-bottom: 0.5px solid #E3E3E3;;
		font-family: Comfortaa;
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		line-height: 16px;
		
	}
	.tabs-item{
		margin-right: 18px;
	} */
	/* 轮播图 */
	/* .swiper{
		margin: 16px auto;
	}
	.swiper image{
		width: 100%;
		
	} */
</style>
