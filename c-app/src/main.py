from subprocess import run
from sys import path
from os import getcwd, fork


def example_function():
    pid = fork()

    if pid == 0:
        # these will be unaffected by the `c` code.
        arg1 = 98
        arg2 = 45

        file = f"{getcwd()}/swap.c"
        output = f"{getcwd()}/swap"

        if not path.exists(file):
            run(["clang", file, "-o", output])

        print(f"Parg1: ${arg1},  Parg1: ${arg2}")

        run([output, f"{arg1}", f"{arg2}"])

        print(f"Second print Python arg1: ${arg1}, Python arg1: ${arg2}")
