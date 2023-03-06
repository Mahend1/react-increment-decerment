const usestate = {
    age: 20
}
const Increment = (state = usestate,action) => {
    const newone = { ...state };

    switch (action.type) {
        case "AGE_UP":
            newone.age += action.value;
            break; 
        case "AGE_DOWN":
            newone.age -= action.value;
            break;

            default:
                break;
    }
    return newone;
}
export default Increment 