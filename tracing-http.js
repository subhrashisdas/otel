const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { OTLPTraceExporter } = require(
  "@opentelemetry/exporter-trace-otlp-http",
);
const { trace } = require("@opentelemetry/api");

const exporter = new OTLPTraceExporter({
  url: "http://localhost:4318/v1/traces",
});

const provider = new NodeTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();
const tracer = trace.getTracer("example-nodejs-otel");
function createSpan() {
  const span = tracer.startSpan("simple-span");
  setTimeout(() => {
    span.end();
  }, 1000);
}

createSpan();
