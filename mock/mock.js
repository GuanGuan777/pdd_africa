const Mock=require('mockjs')
 const Random = Mock.Random;
let id=Mock.mock('@id')
console.log(id)
var obj=Mock.mock({
	id:"@id",
	username:"@cname",
	
})
console.log(obj)
// var productList=Mock.mock({
// 	"datalist":[
// 		{
// 			"datalist|10-20":[{
// 				'id':'@id',
// 				'title':'@cname',
// 				'price|4000-5000':0,
// 				'num|500-4000':0
				
// 			}]
// 		}
		
// 	]
// })
// console.log(productList)
// let product=[];
// let productList=[];
// for(let j=0;j<7;j++){
// 	for(let i=0;i<2;i++){
// 		let productItem={
// 			"id":'@id',
// 			"title":'@csentence()',
// 			'price|4000-5000':1,
// 			'num|500-4000':1,
// 			'img':Random.image('152x143', '#7fe7f7')
// 		}
// 		product.push(productItem)
// 	}
// 	productList.push(product)
// }

var tabList=Mock.mock({
	"tabList":[
		{
			id:"1",
			name:"Hot",
			className:"Hot"
		},
		{
			id:"2",
			name:"Cate",
			className:"Cate"
		},
		{
			id:"3",
			name:"cloths"
		},
		{
			id:"4",
			name:"sports"
		},
		{
			id:"5",
			name:"phone"
		},
		{
			id:"6",
			name:"medicine"
		},
		{
			id:"7",
			name:"shoes"
		}
	]
})
var productList=Mock.mock({
	"datalist":[
		[
			{
				"id":"1",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"2",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"3",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"4",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"5",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
		],
		[
			{
				"id":"1",
				"title":"Dejavu Lace Front Human Hair Wigs Body Wave Human Hair Wigs 13*4 Lace Front Wig ",
				"price":"4000",
				"num":"1234"
			},
			{
				"id":"2",
				"title":"Dejavu Lace Front Human Hair Wigs Body Wave Human Hair Wigs 13*4 Lace Front Wig ",
				"price":"4000",
				"num":"1234"
			},
			{
				"id":"3",
				"title":"Dejavu Lace Front Human Hair Wigs Body Wave Human Hair Wigs 13*4 Lace Front Wig ",
				"price":"4000",
				"num":"1234"
			},
			{
				"id":"4",
				"title":"Dejavu Lace Front Human Hair Wigs Body Wave Human Hair Wigs 13*4 Lace Front Wig ",
				"price":"4000",
				"num":"1234"
			},
			{
				"id":"5",
				"title":"Dejavu Lace Front Human Hair Wigs Body Wave Human Hair Wigs 13*4 Lace Front Wig ",
				"price":"4000",
				"num":"1234"
			},
			{
				"id":"6",
				"title":"Dejavu Lace Front Human Hair Wigs Body Wave Human Hair Wigs 13*4 Lace Front Wig ",
				"price":"4000",
				"num":"1234"
			},
		],
		[
			{
				"id":"1",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"2",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"3",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"4",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
			{
				"id":"5",
				"title":"假发女非洲黑色长卷发中分外贸欧美时尚头套厂家直销 ",
				"price":"3000",
				"num":"2345"
			},
		]
	]
		
	
})
console.log(productList)
Mock.mock('/product_list',productList)
Mock.mock('/tab_list',tabList)

