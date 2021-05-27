# Pet Store Example

## Initializing Project

```sh
yarn
```

## ReDoc

```sh
cross-kube redoc
```

## Code Generation

```sh
cross-kube codegen
```

If you use an HTTP proxy specify `--proxy <proxy-server-url>`

```sh
cross-kube codegen --proxy http://proxy.example.com:8080
```

## Creating CRD

```sh
yarn create-crd
```

## Debug

You can see the debug messages by setting `DEBUG` environment variable.

```sh
DEBUG="cross-kube:*" cross-kube codegen
```
