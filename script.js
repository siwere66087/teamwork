let cars = {
    
        "make":"BMW M4",
        "year": 2014,
        "Model":"Coupe",
        "Transmission":"Automatic"
    ,

    
        "make":"Mercedes Benz AMG C63",
        "year": 2022,
        "Model":"Sedan",
        "Transmission":"Automatic"
    ,

    
        "make":"Pagani Huayra",
        "year": 2012,
        "Model":"Super Car",
        "Transmission":"Automatic"
    
};



console.log(cars)


fetch('teamwork/something.json').then((response)=>{
    console.log('resolved', response);
}).catch((error)=>{
    console.log('rejected',error);
});

var parsed_cars = JSON.parse(cars);

