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
// 				'price|3000-5000':0,
// 				'num|500-3000':0
				
// 			}]
// 		}
		
// 	]
// })
// console.log(productList)
let productList=[];
for(let i=0;i<10;i++){
	let productItem={
		"id":'@id',
		"title":'@csentence()',
		'price|3000-5000':1,
		'num|500-3000':1,
		'img':Random.image('152x143', '#7fe7f7')
	}
	productList.push(productItem)
}
Mock.mock('/product_list',productList)

