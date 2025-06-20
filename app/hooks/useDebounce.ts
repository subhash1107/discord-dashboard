import { useEffect, useState } from "react"

const useDebounce = (value:string,delay=300)=>{
    const [debounced,setDebounced] = useState<string>()
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebounced(value)
        },delay)
        return ()=>clearTimeout(timeout)
    },[value,delay])

    return debounced
}

export default useDebounce
