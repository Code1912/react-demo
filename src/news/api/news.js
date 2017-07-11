/**
 * Created by Code1912 on 2017/3/15.
 */

const TIMEOUT=3000;
const NEWSLIST=[{
    id:1,title:"title 1"
},{
    id:2,title:"title 2"
},{
    id:3,title:"title 3"
},{
    id:4,title:"title 4"
},{
    id:5,title:"title 5"
},{
    id:6,title:"title 6"
},{
    id:7,title:"title 7"
}];

export   class Service  {
    static getNews(){
        return new Promise(function (resolve, reject) {
            setTimeout(()=>{
                resolve(Object.assign([],NEWSLIST));
            },TIMEOUT)
        })
    }
    static addNews(title){
        return new Promise(function (resolve, reject) {
            setTimeout(()=>{
                let id=Date.now();
                let news={id:id,title:`${title} ${id}`};
                NEWSLIST.push(news);
                resolve(news);
            },TIMEOUT)
        })
    }

    static removeNews(id){
        return new Promise(function (resolve, reject) {
            setTimeout(()=>{
                let items=NEWSLIST.filter(p=>p.id==id);
                if(items.length>0){
                    NEWSLIST.splice( NEWSLIST.indexOf(item[0]),1);
                }
                resolve(true);
            },TIMEOUT)
        })
    }
}