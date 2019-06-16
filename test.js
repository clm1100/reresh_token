var result = [
    {
        code:200,
        msg:"请求成功",
        data:"假数据"
    },
    {
        code:999,
        msg:"token过期失效"
    }
]

var axios = {
    request(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let res = result[1]
                resolve(res)
            },1000)
        })
    }
}
function request(token) {

    return axios.request().then(response=>{
        if(response.code==200){
            return response
        }else{
            console.log("刷新token");
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(request(true))
                },1000);
            })
        }
    }).catch(error => console.log(error));
}
request().then((res)=>{
    console.log(res);
});