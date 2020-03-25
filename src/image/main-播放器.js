/**
 * 1.歌曲搜索接口
 *   请求地址：https://autumnfish.cn/search
 *   请求放肆：get
 *   请求参数：keywords（查询关键字）
 *   相应内容：歌曲搜索结果
 */
/**
 * 2.歌曲url获取接口
 *      请求地址：https://autumnfush.cn/song/url
 *      请求方法啊： get
 *      请求参数：id(查询关键字，歌曲ID)
 *      相应内容：歌曲url地址
 */
/**
 * 3.歌曲详情获取
 *      请求地址：https://autumnfish.cn/song.detail
 *      请求方式：get
 *      请求参数：ids(歌曲id)
 *      相应内容： 歌曲详情，包含封面信息
 * 
 * 4.热门评论获取
 *      请求地址：https://autumnfish.cn/comment/hot?type=0
 *      请求方法：get
 *      请求参数：id（歌曲id，地址中的type固定为0）
 *      相应内容：歌曲的热门评论
 * 5.mv地址获取
 *      请求地址：https://autumnfish.cn/mv/url
 *      请求方法：get
 *      请求参数：id(mvid.为0说明没有mv)
 *      相应内容： MV的地址
 */
var app = new Vue({
    el:".wrap",
    data:{
        query:"",
        musicList:[],
        musicId:"",
        musicSrc:"",
        picUrl:"",
        ///热门评论
        htopinglun:[],
        usernamePhoto:"",
        //是否播放
        isplaying:false,
        mvurl:"",
        //遮罩层显示
        isshow:false
    },
    methods:{
        searchMusic:function(){
            var that = this
            axios.get("https://autumnfish.cn/search?keywords="+this.query).then(
                function(response){
                    console.log(response)
                    that.musicList=response.data.result.songs
                },
                function(err){
                   
                }
            );
        },
        playMusic:function(id){
            var that = this
            axios.get("https://autumnfish.cn/song/url?id="+id).then(
                function(response){
                    console.log(response)
                    that.musicSrc=response.data.data[0].url;
                },
                function(err){
                
                }
            );
            //歌曲详情获取
            axios.get("https://autumnfish.cn/song/detail?ids="+id).then(
                function(response){
                    
                   
                    that.picUrl=response.data.songs[0].al.picUrl;
                   
                },
                function(err){
             
                }
            );
            //获取歌曲热门评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id="+id).then(
                function(response){
                   
                    that.htopinglun=response.data.hotComments
                    
                   
                },
                function(err){
             
                }
            );
        },
        play:function(){
            this.isplaying=true;
        },
        pause:function(){
            this.isplaying=false;
        },
        mvgo:function(mvid){
        var that = this
            axios.get("https://autumnfish.cn/mv/url?id="+mvid).then(
                function(response){
                    that.isshow=true;
                   that.mvurl=response.data.data.url
                   console.log(response.data.data.url)
                   
                },
                function(err){
             
                })
        },
        hide:function(){
            this.isshow=false
            this.mvurl=[]
        }

        
    }

})
