# OTEL Data Example with gRPC and HTTP via Grafana Alloy

This example demonstrates how to send OpenTelemetry (OTEL) data using gRPC and
HTTP via **Grafana Alloy** and view the results through a Webhook.

## Prerequisites

1. **Node.js** installed on your machine.
2. **Grafana Alloy** installed and configured.
3. The following scripts are available: `app-grpc.js` and `app-http.js`.
4. A valid Webhook URL to receive the data.
5. Basic understanding of **OpenTelemetry** (OTEL) and its usage.

## Webhook URL

The Webhook URL to receive the data is:

```
https://webhook.site/cf72bfce-fc63-4012-96f4-4cb86e09af7b
```

## Steps to Run the Example

### 1. Start Grafana Alloy with Experimental Stability Level

Before running the application, start **Grafana Alloy** with the experimental
stability level. Run the following command:

```bash
alloy run config.alloy --stability.level=experimental
```

This ensures you're running Alloy with the experimental features enabled.

### 2. Run `app-grpc.js`

Start the Node.js gRPC application by running the following command:

```bash
node app-grpc.js
```

This will simulate sending OTEL data using gRPC to the Grafana Alloy backend.

### 3. Run `app-http.js`

Next, start the HTTP application:

```bash
node app-http.js
```

This will simulate sending OTEL data using HTTP to the same backend.

### 4. Check the Webhook

- Open the Webhook URL
  (https://webhook.site/cf72bfce-fc63-4012-96f4-4cb86e09af7b) in your browser.
- Refresh the page. You should see two inputs, **both in Proto format**,
  reflecting the OTEL data sent via gRPC and HTTP.

## What Happens Under the Hood?

- **Grafana Alloy** is used to manage and handle telemetry data such as
  OpenTelemetry (OTEL) traces, metrics, and logs.
- The data is sent using two methods:
  - **gRPC** via the `app-grpc.js` script.
  - **HTTP** via the `app-http.js` script.
- Both scripts send telemetry data to the Alloy backend, which is captured in
  the Webhook URL for inspection.

## Conclusion

This example showcases how to send OTEL data using both gRPC and HTTP to a
Grafana Alloy instance. You can inspect the received data in the Webhook URL,
where you'll see the telemetry data **in Proto format** for both methods.
