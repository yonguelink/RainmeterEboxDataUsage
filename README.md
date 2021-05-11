# THIS IS AN UNMANAGED REPO

# EBox Data Usage Rainmeter

This is a simple Rainmeter block to see your EBox data usage.

## Prerequisite

[`node`](https://nodejs.org/dist/v8.10.0/node-v8.10.0-x64.msi) available in your path

## How to use

Rename the `config.json.example` file to `config.json` by running

```
cp bin/config.json.example bin/config.json
```

Configure it properly by adding in your client code and client password.

Once that done, run

```
yarn // or 'npm install' if you don't have yarn installed
```

Then load the skin via Rainmeter. It'll automatically refresh every 30 minutes, you can also force it to refresh by right clicking on it and hitting "Refresh".