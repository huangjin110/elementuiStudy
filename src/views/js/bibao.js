export default function (callback) {

    const a = () => {

        let time = 1 * 1000

        const b = () =>{
 
            const timer = setTimeout(()=>{

                time = 2 * time    
    
                console.log('[ time ] >', time)
    
                if( time > 10000 ){
    
                    alert('结束')
    
                }else{
                    
                    return b()       

                }
                clearTimeout(timer)
            },time)

        }

        return b
    }


    const debounce = (callback,time)=>{

        let timer = null

        const b = ()=>{

           clearTimeout(timer)

            timer = setTimeout(()=>{
                
                callback()

            },time)

        }

        return b
    }


    const throttle = ( callback,time )=>{

        let timer = null

        return () => {

            console.log(timer);

            if(!timer){
    
                timer = setTimeout(()=>{
    
                    callback()

                    timer = null
    
                },time)
    
            }

        }


    }


    return {
        a,
        debounce,
        throttle
    }
}