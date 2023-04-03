# Implicitly Typed Local Variables

Use implicit typing for local variables when the type of the variable is obvious from the right side of the assignment, or when the precise type is unimportant.

```cs
var var1 = "This is clearly a string.";
var var2 = 13;
```

Don't use `var` when the type is not apparent from the right side of the assignment. Don't assume the type is clear from a method name. A variable type is considered clear if it has an explicit cast.

```cs
int var3 = Convert.ToInt32(24.07);
string var4 = Starpelly.RGB2Hex(new Color(1, 1, 1, 1));

var var5 = (int)Starpelly.Mathp.Normalize(0, 1, 1);
string var6 = Mathf.Clamp01(0.8f).ToString();
```

Do not use a variable name to specify the type of the variable. In every scenario you have to do this, there is a way to avoid it.

```cs
// Bad!!!, also misleading.
var inputInt = "hello!";
```