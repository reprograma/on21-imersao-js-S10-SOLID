const RetornaMenu=require('./RetornarMenu');
const Cerveja=require('./Cerveja');
const Suco = require('./Suco');
const Leite = require('./Leite');

const suco1=new Suco("Suco",3,"Do vale", "Uva");
const suco2=new Suco("Suco",2,"Tang", "Goiaba");
const cerveja1=new Cerveja("Cerveja",7,"Itaipava", "cervada");
const cerveja2=new Cerveja("Cerveja",10,"Skol", "Puro malte");
const leite1=new Leite("Leite",8,"Piracanjuba", "Integral");
const leite2=new Leite("Leite",5,"Ninho", "Desnatado");

RetornaMenu.retornar();