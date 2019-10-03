const person = {
  address: 'Grodno',
  firstName: 'Ivan',
  lastName: 'Pupkin',
  age: 34,
  weight: 12, 
};

const personSchema = {
  address: 'string',
  firstName: 'string',
  lastName: 'string',
  age: 'number',
  weight: 'number', 
};

const validateBySchema = (hash, schema) => {
  for (const key in hash) {
    const deBug = _ => {
      if(typeof hash[key] !== schema[key]){
        console.log("Mistake in value")
      };

      if(Object.keys(hash).length !== Object.keys(schema).length){
        console.log("Mistake in amount of data")
      }
    };

      if (typeof hash[key] == schema[key] && Object.keys(hash).length == Object.keys(schema).length ){
      return true  
    }

    else{return deBug()  } 
  }
};

console.log(validateBySchema(person,personSchema));