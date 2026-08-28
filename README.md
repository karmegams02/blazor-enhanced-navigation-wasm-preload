# Blazor Enhanced Navigation WASM Preload

This repository demonstrates the difference in WebAssembly asset preloading behavior between **.NET 10** and **.NET 11** when using Blazor Enhanced Navigation.

## Projects

- `ResourcePreloader.NET10` - Shows .NET 10 behavior.
- `ResourcePreloader.NET11` - Shows .NET 11 behavior.

## What Changed?

### .NET 10
When navigating to an `InteractiveWebAssembly` page, Blazor emits WebAssembly preload links even during enhanced navigation.

### .NET 11
WebAssembly preload links are only emitted on the initial page load or a full page refresh. They are not emitted during enhanced navigation.

## Additional Information
For more details about this behavior change.
https://github.com/dotnet/aspnetcore/issues/68528
