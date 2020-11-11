import { event } from "jquery"

class View{
    // constructor({el,html,render,data,eventBus,events}){
  constructor(options){
    Object.assign(this.options)
    this.el = $(this.el)
    this.render(this.data)
    this.autoBindEvents()
    this.eventBus.on('m:updated',()=>{
        this.render(this.data)
       })
    }
    autoBindEvents(){
    for(let  key in this.events){
    const value = this[this.events[key]]
     const spaceIndex = key.indexOf(' ')
     const part1 = key.slice(0,spaceIndex)
     const  part2 = key.slice(spaceIndex+1)
     this.el.on(part1,part2,value)
    }
  }
}

export default View