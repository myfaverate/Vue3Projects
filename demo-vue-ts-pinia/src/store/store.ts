import { defineStore } from "pinia";

// 定义一个Person类型
export const definedPerson = defineStore("person", {
    state: () => ({
        name: "John",
        age: 18,
        hobbies: ["篮球", "唱歌"],
    }),
    getters: {
        getAge(): number {
            return this.age
        },
        getHobbiesCount(): number {
            return this.hobbies.length
        }
    },
    actions: {
        doubleAge() {
            this.age *= 2
        }
    }
})