//5. Calcular la suma de los números pares del 1 al 100.
total = 0;
for(let i=0; i<=100; i++){
    if(i%2==0){
        total+=i;
    }
}
console.log(total)