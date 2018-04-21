/*
Arrays o arreglos Unidimencionales
*/

#include<stdio.h>
#include<conio.h>

int main(){
	
	//ARRAY ENTEROS
	int i,a[5] = {1,2,3,4,5};
	
	for(i=0;i<5;i++){
		printf("Indice: %i Elemento: %i\n",i,a[i]);	
	}
	
	//ARRAY FLOTANTES
	float b[5];
	
	for(i=0;i<5;i++){
		printf("%i Digite un numero (float):",i+1);
		scanf("%f",&b[i]);
	}
	
	for(i=0;i<5;i++){
		printf("Indice: %i Elemento: %.2f\n",i,b[i]);	
	}
	
	//ARRAY STRING O PALABRAS
	char c[20] = "Alejandro";
	printf("Elemento: %s",c);	
	
	getch();
	return 0;
}
