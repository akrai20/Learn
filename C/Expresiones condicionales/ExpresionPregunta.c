#include<stdio.h>
/* Funcionamiento
Condicion ? Expresion 1 : Expresion 2 ;
*/ 
int main(){
	int a;
	
	printf("Digite un numero: ");
	scanf("%i",&a);
	
	
	(a%2==0) ? printf("El numero es par.") : printf("El numero es impar.");
	
	return 0;
}
