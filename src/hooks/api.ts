import { createFetch } from '@vueuse/core'
import { Ref, ComputedRef } from 'vue' 

const token = ref('')

const route = useRoute()

export const useApi = () => {
    const url = ref("/api")
    const myFetch = createFetch(
        {
            baseUrl: url,
            options:{
            async beforeFetch({options}){
                options.headers = {
                    "Authorization": `Bearer ${token}`
                }
                return { options }
            }
        },
        fetchOptions: {
            mode: 'cors'
        }
    })

watchEffect(() => {
    if(route.query.token){
        token.value = route.query.token as string
    }
})

const get = async (path: string | Ref<string> | ComputedRef<string>) => {
    return await myFetch(path)
}

const post = async (path: string | Ref<string> | ComputedRef<string>, data: any) => {
    return await myFetch(path, {
        method: 'POST',
        body: JSON.stringify(data)
    })
}   

const put = async (path: string | Ref<string> | ComputedRef<string>, data: any) => {
    return await myFetch(path, {
        method: 'PUT',
        body: JSON.stringify(data)
    })
}

const del = async (path: string | Ref<string> | ComputedRef<string>) => {
    return await myFetch(path, {
        method: 'DELETE'
    })
}

return {
    get,
    post,
    put,
    del
}
}

