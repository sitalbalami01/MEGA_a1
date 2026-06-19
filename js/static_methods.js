Object.defineProperty(user, "name", {
    value: "name2",// value update garyo
    writable: false, // update garna milne ki namilne
    configurable: false, // hamile yo key delete garna milne ki namilne
    enumerable: false, // iterate garda value access garna milne ki namilne
})

Object.assign({}, obj1, obj2); // object merge hunxa

Object.keys(object_name) // key haru access garna
Object.values(object_name)// values haru access garna

Object.defineProperties(user, {
    name{
        value: "",
        writable: ,
        configurable: ,
        enumerable: ,
    },
    roll_no{
        value: "",
        writable: ,
        configurable: ,
        enumerable: ,
    }
})