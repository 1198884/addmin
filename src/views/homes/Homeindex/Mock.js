let Mock =require("mockjs")
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return [
        {id:0,name:"黄安",text:"我是黄安"},
        {id:1,name:"黄安1",text:"我是黄安"},
        {id:2,name:"黄安2",text:"我是黄安"},
        {id:3,name:"黄安3",text:"我是黄安"},
        {id:4,name:"黄安4",text:"我是黄安"}
    ]
})