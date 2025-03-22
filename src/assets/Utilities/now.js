const timeNow =()=>{
    const hour=new Date().getHours();
    if(hour<12)return "Morning"
    if(hour<18)return "Afternoon"
    else return "Evening"
    
    
    }
    export default timeNow;