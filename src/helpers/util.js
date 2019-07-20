function friendlyDate(datsStr) {
    let dataObj = typeof datsStr === 'obejct' ? datsStr:new Data(datsStr)//获取日期对象
    let time = dataObj.getTime()//获取到时间
    let now = Date.now()//现在的时间
    let space = now - time //现在时间减去过去时间
    let str = ''

    switch (true) {
        case space < 60000:
            str ='刚刚'
            break
        case space <1000*3600:
            str = Math.floor(space/60000) + '分钟前'
            break
        case space < 1000*3600*24:
            str = Math.floor(space/(1000*3600))+ '小时前'
            break
        default:
            str = Math.floor(space/(1000*3600*24))+'天前'
    }
    return str
}

export default {
    install(Vue,option){
        Vue.prototype.friendlyDate = friendlyDate
    }
}

