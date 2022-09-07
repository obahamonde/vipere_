import { defineStore } from 'pinia'

const useStore = defineStore("store", () => {
    const state = reactive({
        user:{
        email: null as string | null,
        token: null as string | null,
        visitedPages: [] as string[],
        payload: null as any
        }
    })

    const setName = (newEmail: string) => {
        state.user.email = newEmail
    }

    const addPage = (page: string) => {
        state.user.visitedPages.push(page)
    }

    const setPayload = (payload: any) => {
        state.user.payload = payload
    }

    const setToken = (token: string) => {
        state.user.token = token
    }



    return {
        state,
        setName,
        addPage,
        setPayload,
        setToken
    }
})

export default useStore