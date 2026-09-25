# Troubleshooting

This repository is the self-hosted/free build. It does not include an in-app subscription, checkout, premium tier, or credit purchase flow.

## AI provider costs

The app itself does not charge for code generation. Hosted AI providers may still charge for their API usage because that billing happens outside this application.

If you want a zero-provider-cost setup, configure an OpenAI-compatible local endpoint (such as Ollama or LM Studio) in **Settings → OpenAI Base URL** and use a model available from that local server.

## API keys

For hosted providers, enter the provider API key in Settings or configure the corresponding backend environment variable. Keep API keys private.

## Screenshots from URLs

URL screenshot capture may require a ScreenshotOne API key. Direct image uploads do not require ScreenshotOne.
