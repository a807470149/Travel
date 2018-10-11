export default {
    changeCity (state, city) {
        state.city = city
        try{
            // localStorage.setItem('city', city)
            localStorage.city = city
        }catch(e){}
    }
}