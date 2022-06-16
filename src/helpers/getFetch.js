let productos=[

    {
        id:'1',
        nombre:'rig 1',
        descripcion: 'potencia 200 th',
        stock:'10',
        precio:'$800.000',
        categoria:'placa',
    
    },
    {
        id:'2',
        nombre:'rig 2',
        descripcion: 'potencia 350 th',
        stock:'5',
        precio:'$1.000.000',
        categoria:'procesadores'
    
    },
    {
        id:'3',
        nombre:'rig 3',
        descripcion: 'potencia 170 th',
        stock:'3',
        precio:'$650.000',
        categoria:'rigs'
    
    },
    {
        id:'4',
        nombre:'rig 4',
        descripcion: 'potencia 190 th',
        stock:'15',
        precio:'$700.000',
        categoria:'rigs'
    
    },
    {
        id:'5',
        imagen:  ('../images/rig1.png'),
        nombre:'rig 5',
        descripcion: 'potencia 130 th',
        stock:'9',
        precio:'$530.000',
        categoria:'rigs'
    
    },
     {
        id:'6',
        nombre:'rig 6',
        descripcion: 'potencia 300 th',
        stock:'17',
        precio:'$930.000',
        categoria:'placas base'
    
    },


];

   export const getFetch =(id)=>{

    return new Promise ( (resolve, reject) =>{
        setTimeout(()=>{
            if(id){
            resolve(productos.find (productos=>productos.id===id))}
            else {resolve(productos)}
        },1000)
    })
}








let producto=[



    {
        id:'1',
       
        descripcion: 'esta es una descripcion',
       
        precio:'$800.000',


       categoria:'placa'
    
    },
   

];

   export const getFetchOne =()=>{

    return new Promise ( (resolve, reject) =>{
        setTimeout(()=>{
            resolve(producto)
        },1000)
    })
}
