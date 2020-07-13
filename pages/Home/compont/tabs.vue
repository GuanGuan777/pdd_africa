<template>
	<view>
		<!-- 导航栏 -->
		<view class="tabs">
			<scroll-view scroll-x="true">
				<view class="tabs-card">
					<text class="tabs-item" @click="clickTab">Hot</text>
					<text class="tabs-item">Cate</text>
				</view>
			</scroll-view>
		</view>
		
		
	</view>
</template>

<script>
</script>

<style scoped>
	.tabs{
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
		margin-left: 17px;
	}
	/* 轮播图 */
	.swiper{
		margin: 15px 15px;
		height: 155px;
	}
	.swiper image{
		width: 100%;
		
	}
</style>
