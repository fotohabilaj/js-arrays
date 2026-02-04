const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

for(let i= teachers.length-1; i>=0; i--){
    const reversedTeachers = teachers[i];
    console.log(reversedTeachers);
    
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

for(let i=0; i<teachers.length; i++){
  const longNames = teachers[i];
  if(longNames.length>=5){
    console.log(longNames);

  }
}

// 3. Rimuovi 'Ed' dall'array teachers

for(let i=0; i<teachers.length; i++){
  const nome = teachers[i];
  if(nome!='Ed'){
    console.log(nome);

  }
}

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

for(let i=0; i<teachers.length; i++){
  const nome = teachers[i];
  if(nome =='Fabio'){
    isFabioPresent= true
    console.log(isFabioPresent);

  }
}


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);
