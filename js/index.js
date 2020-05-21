  
    var citySrc='http://wthrcdn.etouch.cn/weather_mini?city=';
    var app=new Vue({
        el:'#app',
        data:{
            city:'',
            cityarr:[],
            scityarr:['北京','上海','合肥','蚌埠']
        },
        methods: {
            add:function(index){
                this.city=this.scityarr[index];
                this.searchCity();
            },
            searchCity:function(){
                var that=this;
                
                axios.get(citySrc+that.city).then(function (res) { 
                    that.cityarr=res.data.data.forecast;
                    that.scityarr.push(that.city);
                    console.log(that.cityarr);
                   
                 },function (err) {
                    console.log(err);
                })
               
            }
        },
    })