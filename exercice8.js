//
function majority(){
  //recup de id age
  var age = document.getElementById('age').value;
  //regex prend les chiffres entre 0 et 120
  var regex = /^[\d][\0-:120]/;
  //test de regex
  if(regex.test(age) && age > 130){
    //si regex faux afficher alert
    alert('Oops! Réessayer');
    //si regex vrai alors
  }else{

    if(age >= 18){
      //si age est supp ou egal a 18
      alert('Vous êtes majeur');
    }else{
      //si age est inf a 18
      alert('Vous etes mineur');
    }
  }
}
