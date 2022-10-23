export default ()=>({
    values:{
        day:4,
        hours:0,
        minutes:0,
        seconds:5
    },
    setCounter(){
        let futureTime=new Date(2022,10,24).getTime();
        let nowTime=new Date().getTime()
        let target=futureTime-nowTime
        this.values.day=Math.floor(target /(1000*60*60*24))
        this.values.hours=Math.floor(target%(1000*60*60*24) / (1000*60*60))
        this.values.minutes=Math.floor(target%(1000*60*60) / (1000*60))
        this.values.seconds=Math.floor(target%(1000*60) / 1000)
    },
    init(){
        this.setCounter()
        setInterval(()=>{
            if(this.values.seconds===0){
                this.values.seconds=60
                this.values.minutes--
            }
            if(this.values.minutes === -1){
                this.values.minutes=59
                this.values.hours--
            }
            if(this.values.hours===-1){
                this.values.hours=23
                this.values.day--
            }
            if(this.values.day===-1){
                this.values.day=0
            }

            this.values.seconds--
        },1000)
    },
    secondTrigger:{
        ['x-text'](){
            if(this.values.seconds<10){
                return `0${this.values.seconds}`
            }
            return this.values.seconds
        }
    },
    minutesTrigger:{
        ['x-text'](){
            if(this.values.minutes<10){
                return `0${this.values.minutes}`
            }
            return this.values.minutes
        }
    },
    hoursTrigger:{
        ['x-text'](){
            if(this.values.hours<10){
                return `0${this.values.hours}`
            }
            return this.values.hours
        }
    },
    dayTrigger:{
        ['x-text'](){
            if(this.values.day<10){
                return `0${this.values.day}`
            }
            return this.values.day
        }
    }
})