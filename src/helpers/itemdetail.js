let detail=[

    {
        id:'1',
       
        descripcion: 'esta es una descripcion',
       
        precio:'$800.000'
    
    },
    {
        id:'2',
        
        descripcion: 'esta es una descripcion',
       
        precio:'$1.000.000'
    
    },
    {
        id:'3',
       
        descripcion: 'esta es una descripcion',
       
        precio:'$650.000'
    
    },
    {
        id:'4',
      
        descripcion: 'esta es una descripcion',
       
        precio:'$700.000'
    
    },
    {
        id:'5',
       
       
        descripcion: 'esta es una descripcion',
       
        precio:'$530.000'
    
    },
     {
        id:'6',
       
        descripcion: 'esta es una descripcion',
       
        precio:'$930.000'
    
    },


];

   export const getFetch =()=>{

    return new Promise ( (resolve, reject) =>{
        setTimeout(()=>{
            resolve(detail)
        },2000)
    })
}
