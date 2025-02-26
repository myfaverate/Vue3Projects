import { defineStore } from "pinia";

export const defineMyUser = defineStore("loginUser", {
    state: () => ({
        uid: 0,
        username: "",
        password: "",

    }),
    actions: {
        setUid(uid: number) {
            this.uid = uid;
        },
        setUsername(username: string) {
            this.username = username;
        },
        setPassword(password: string) {
            this.password = password;
        },
    },
    getters: {
        getUid(): number {
            return this.uid;
        },
        getUsername(): string {
            return this.username;
        },
        getPassword(): string {
            return this.password
        },
    },
    persist: {
        pick: ['uid', 'username', 'password'], // only these will be saved in localStorage
        storage: window.sessionStorage,
        debug: true,
    }
});

export const useStore = defineStore('main', {
    state: () => ({
        id: 0,
        someState: 'hello pinia',
        name: 'pinia',
    }),
    persist: {
        storage: window.sessionStorage,
        debug: true,
    }
})