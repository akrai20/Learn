//Directivas del procesador y variables
#include <stdio.h>

#define PI 3.1416 //MACRO -->variables a lo largo del programa que no cambian (estaticas)

int y = 5; //variable global

int main(){
	int x = 10;	//variable local
	
	float suma = 0;
	
	suma = PI + x;
	
	printf("La suma es: %.2f ",suma);
	
	return 0;
}
