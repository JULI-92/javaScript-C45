const usuario={
 nombre:'john',
 apellido:'doe',
 edad:34,
 email:'user@gmail.com',
 active:true
}
console.log(usuario);
console.log(  'Bienvenido '+ usuario.nombre + ' ' + usuario.apellido);
console.warn(usuario.email);
usuario.nombre='pedrito'

const user=[
  'john',
  'doe',
  34,
  'user@gmail.com',
  true
]
console.log(user);