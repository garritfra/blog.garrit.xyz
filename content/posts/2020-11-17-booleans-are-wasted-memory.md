---
title: Booleans are wasted memory
date: "2020-11-06"
---

A boolean is either `true` or `false`. That translates to 1 or 0. If you think that one bit is enough to store this information, you'd be wrong.

In order to keep the binary layout of a program simple and convenient, most languages store information in either 4 bit or 8 bit blocks. If you allocate a `bool` in C, you will get [an integer constant with a value of either 1 or 0](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/stdbool.h.html), taking up 4 bits.
If you allocate a bool in Rust or (most) other languages that are based on LLVM, [it will take up 1 `i1`, or 8 bit of memory](https://llvm.org/docs/LangRef.html#simple-constants).

## There's a better way

If you find yourself having to store multiple boolean states somewhere, you might simply declare those booleans and call it a day:

```c
#include <stdbool.h>
#include <stdio.h>
int main()
{
    bool can_read = true;
    bool can_write = false;
    bool can_execute = true;

    if (can_read)
        printf("read bit set\n");
    if (can_write)
        printf("write bit set\n");
    if (can_execute)
        printf("execute bit set\n");

    // Output:
    // read bit set
    // write bit set
}
```

An alternative approach to store boolean values is to share a "chunk" of bits with other values. This is usually done using bitwise operations:

```c
#include <stdbool.h>
#include <stdio.h>

// Define permissions
#define PERM_NONE       0b000
#define PERM_READ       0b001
#define PERM_WRITE      0b010
#define PERM_EXECUTE    0b100

#define PERM_ALL        PERM_READ | PERM_WRITE | PERM_EXECUTE

int main()
{
    // Set permissions
    int permissions = PERM_READ | PERM_WRITE;

    if (permissions & PERM_READ)
        printf("write bit set\n");
    if (permissions & PERM_WRITE)
        printf("read bit set\n");
    if (permissions & PERM_EXECUTE)
        printf("execute bit set\n");

    // Output:
    // read bit set
    // write bit set
}
```

This example still wastes 1 bit since we only use 3 out of 4 possible bits of the integer type, but I'm sure you get the point. Whenever you find yourself needing multiple boolean values, think twice if you can use this pattern.

Microcontrollers have a very constrainted environment, therefore bitwise operations are essential in those scenarios. 7 wasted bytes are a lot if there are only 4 kb of total memory available. For larger systems we often forget about these constraints, until they add up.

## My Plea
* Be mindful about the software you create.
* Appreciate the resources at your disposal.
