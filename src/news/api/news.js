/**
 * Created by Code1912 on 2017/3/15.
 */

const TIMEOUT=3000;
const NEWS=[{
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

export  default {
    getNews:()=>{
        return new Promise(function (resolve, reject) {
            setTimeout(()=>{
                resolve(Object.assign([],NEWS));
            },TIMEOUT)
        })
    },
    removeNews:(id)=>{
        return new Promise(function (resolve, reject) {
            setTimeout(()=>{
                let items=NEWS.filter(p=>p.id==id);
                if(items.length>0){
                    NEWS.splice( NEWS.indexOf(item[0]),1);
                }
                resolve(true);
            },TIMEOUT)
        })
    }
}