const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm8677k/",
            name: "ssm8677k",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm8677k/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电商购物网站"
        } 
    }
}
export default base
