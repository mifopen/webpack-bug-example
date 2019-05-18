import * as Sentry from "@sentry/browser";

Sentry.captureException(new Error("asdf" + Sentry.Severity.Info));
