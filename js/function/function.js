const producto1 = 234.45;
const producto2 = 334.45;
const producto3 = 334.45;
const producto4 = 334.45;
const dolar = 470;
const iva = 1.21;
const ganancia = 4534.45;
const interesfinanciado = 1.48;



function calcularPrecios(valorproducto,cuotas =12) {
  const preciContado =parseInt(valorproducto * dolar *iva * ganancia) ;
const precioFinanciado = parseInt(preciContado * interesfinanciado);
const precioCuota = +(precioFinanciado/cuotas).toFixed(2);

document.write(`<p><strong>PRECIO CONTADO :</strong> $ ${preciContado}</p>`)
document.write(`<p><strong>${cuotas} cuotas de $ ${precioCuota} </strong></p>`)
document.write(`<p><small>PRECIO LISTA:</small>$ ${precioFinanciado}</p>`)
}

calcularPrecios(producto1);
calcularPrecios(producto2 ,30);