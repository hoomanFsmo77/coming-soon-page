export default function (){
    return {
        dark:this.$persist(false),
        trigger:{
            ['@click'](){
                this.dark=!this.dark
            }
        }
    }
}