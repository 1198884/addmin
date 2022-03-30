let Mock = require("mockjs")
let data = [
    { id: 0, name: "黄安", text: "我是黄安" },
    { id: 1, name: "黄安1", text: "我是黄安" },
    { id: 2, name: "黄安2", text: "我是黄安" },
    { id: 3, name: "黄安3", text: "我是黄安" },
    { id: 4, name: "黄安4", text: "我是黄安" }
]
// 获取
Mock.mock("/api/homeindex", "get", function (config) {
    console.log('jjj', config)
    return data
})
// 删除
Mock.mock(/\/api\/homeindex\/\d/, "delete", function (config) {
    console.log(config.url)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id, 1)
    data = data.map(function (item, id) {
        return {
            id,
            name: item.name,
            text: item.text
        }
    })
    console.log(data)
    return data
})
//更新
Mock.mock(/\/api\/homeindex\/edit\/\d/, "put", function (config) {
    console.log(config)
    let arr = config.url.split("/")
    let id = arr.pop()
    let canshu = config.body
    canshu = JSON.parse(canshu)
    data[id].name = canshu.name
    data[id].text = canshu.text
    console.log(data);
    return data
})
// 增加
Mock.mock("/api/homeindex", 'post', function (config) {
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    data.push({ id: data.length, name, text })

    return data;
})