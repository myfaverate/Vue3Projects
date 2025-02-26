import { defineStore } from "pinia";

export const defineSchedule = defineStore("scheduleList", {
    state: () => ({
        itemList: [
            {
                sid: 0,
                uid: 0,
                title: "",
                completed: 0,
            },
        ],
    }),
    actions: {
       
    },
    getters: {
        
    },
});