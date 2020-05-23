#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b);
void print_error(char *str);

int main(int argc, char **argv)
{

	if (argc < 3)
	{
		print_error("ERROR: Require 3 command line arguments");
		return 1;
	}

	int arg1 = atoi(argv[1]);
	int arg2 = atoi(argv[2]);

	printf("arg1: %d arg2: %d \n", arg1, arg2);

	swap(&arg1, &arg2);

	printf("arg1: %d arg2: %d \n", arg1, arg2);
    
	return 0;
}

void swap(int *a, int *b)
{
	int temp;
	temp = *a;
	*a = *b;
	*b = temp;
}

void print_error(char *str)
{
     printf("\033[0;31m");
     printf("%s  \n", str);
     printf("\033[0m");
}
