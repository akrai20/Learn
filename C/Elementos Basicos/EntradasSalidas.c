//Entradas y salidas 
#include<stdio.h>

int main(){
	int a;
	float b;
	char c[50];
	char d[50];
	
	//printf("Digite el valor de la variabla a: ");
	//scanf("%i",&a);
	
	//printf("El valor es: %i \n",a);
	
	//printf("Digite su nombre: ");
	//scanf("%s",c); //El problema de scanf no detecta letras despues de un espacio
	//printf("Su nombre es: %s\n",c);
	
	printf("Digite su nombre: ");
	gets(d);//Si detecta cadenas de caracteres despues del espacio
	printf("Su nombre es: %s\n",d);
	
	
	
	
	return 0;
}
