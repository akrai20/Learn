//Tipos de datos en C

#include<stdio.h>

int main(){
	
	char a = 'e';//tamaño = 1 byte   Rango: 0..255
	short b = -15;//tamaño = 2 bytes  Rango: -128...127
	int c = 1024;//tamaño = 2 bytes Rango: -32768...32767
	unsigned int d = 128;//tamaño = 2 bytes Rango: 0...65535
	long e = 123456;//tamaño = 4 bytes
	float f = 15.687;//tamaño = 4 bytes
	double g = 123123.123123;//tamaño = 8 bytes
	
	printf("El elemento es: %c\n",a);
	printf("El elemento es: %i\n",b);
	printf("El elemento es: %i\n",c);
	printf("El elemento es: %i\n",d);
	printf("El elemento es: %li\n",e);
	printf("El elemento es: %f\n",f);
	printf("El elemento es: %lf\n",g);
	
	
	return 0;
}
