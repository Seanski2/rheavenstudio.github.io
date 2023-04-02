# Strings

Use [`string interpolation`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated) to concatenate short strings.

```cs
string remixInfo = $"Title: {Beatmap.properties["remixtitle"]}, Creator: {Beatmap.properties["remixauthor"]}";
```

---

Use `Path.Combine` to concatenate system and local paths.

```cs
string filtersPath = Path.Combine("Application.streamingAssetsPath", "Filters");
```

---

When appending strings in loops, use a [`StringBuilder`](https://learn.microsoft.com/en-us/dotnet/api/system.text.stringbuilder) object.

```cs
var text = "hello";
var manyOfText = new StringBuilder();
for (var i = 0; i < 1337; i++)
{
    manyOfText.Append(text);
}
Debug.Log(manyOfText);
```