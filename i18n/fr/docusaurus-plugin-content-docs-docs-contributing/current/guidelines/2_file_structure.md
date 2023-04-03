# File Structure

## Using Keyword

This refers to the `using` keyword in regards to *library imports*. This does not refer to [`using` statement](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/using-statement).

Library imports should be separated by four *"sections"*.

1. .NET Defaults
2. Unity Engine, Unity Editor, etc.
3. Heaven Studio classes.
4. Custom libraries and packages.

In these *sections* the imports should be ordered alphabetically.

> Auto ordering in VSCode:
> 1. Select the *section* you want to order.
> 2. Press `Ctrl+P`
> 3. Type `>sort`
> 4. Press `Sort Lines Ascending`

```cs
using System;
using System.Collections;
using System.Collections.Generic;

using UnityEditor;
using UnityEngine;

using HeavenStudio.Editor;
using HeavenStudio.Game;

using NAudio;
using NaughtyBezierCurves;
using NVorbis;
using Starpelly;
```

## Namespaces