# Types of Casing

```cs
var helloWorld;  // Camel Case
var hello_world; // Snake Case
var HelloWorld;  // Pascal Case
var Hello_World; // Cobra Case
var hello.world; // Dot Case       (Invalid)
var hello-world; // Dash Case      (Invalid)
var hello world; // Separate Words (Invalid)
var hello/world; // Slash Case     (Invalid)
```

(Please note, that only a few of these are actually valid in C#, meaning you cannot use them.)

In the following examples, any of the functions or members belonging to elements marked as `public` is also applicable when working with `protected` and `internal` elements, all of which are intended to be visible to external callers.


## Pascal Casing

Use pascal casing (“PascalCasing”) when naming a `class` or `struct`.

```cs
public class GameManager
{
}
```

```cs
public struct CustomTheme
{
}
```

When naming an `interface`, use pascal casing in addition to prefixing the name with an I. This indicates to other programmers that it’s an `interface`.

```cs
public interface IAnimal
{
}
```

When naming `public` members of types, such as fields, properties, events, methods, and local functions, use pascal casing.

```cs
public class Spaceball : MiniGame
{
	public bool IsSwinging;

	public IBall ICurrentBall { get; set; }

	public void Start()
    {
        // Code here
    }
}
```

## Camel Casing

Use camel casing ("camelCasing") when naming `private` or `internal` fields.

```cs
public class Conductor
{
    private float _songPosition;
}
```
> Note: prefixing camel cased fields is optional. e.g. `_songPosition`, but highly encouraged.

When working with `static` fields that are `private` or `internal`, use the `s_` prefix.

```cs
public class Conductor
{
    private static float s_songPosition;
}
```

When writing method parameters, use camel casing.

```cs
public T GenericMethod<T>(float someNum, bool onePieceReal)
{
}
```