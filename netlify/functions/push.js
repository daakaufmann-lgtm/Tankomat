const webpush = require("web-push");

const VAPID_PUBLIC = "BF4IqXqPv0zbao4xRksA2In8KFIaJ6v6Nn9VwcXamqc6gMq-YQLqnkK8CU4TGBkbx38CkjWSjnRrxGmW2J0g4";
const VAPID_PRIVATE = "DGWvypatI8Mp8ByRcSNY1nqJoEWbVRsoxFDdKT5rHo0";

webpush.setVapidDetails(
"mailto:reidt69@aol.com",
VAPID_PUBLIC,
VAPID_PRIVATE
);

// ⚠️ TEMP Speicher (später DB)
let subs = [];

exports.handler = async (event) => {

const body = JSON.parse(event.body);

if (body.type === "subscribe") {
subs.push(body.sub);
return {
statusCode: 200,
body: JSON.stringify({ ok: true })
};
}

if (body.type === "push") {

```
await Promise.all(
  subs.map(sub =>
    webpush.sendNotification(sub, "🚨 Neuer günstiger Diesel gefunden!")
  )
);

return {
  statusCode: 200,
  body: JSON.stringify({ ok: true })
};
```

}

return {
statusCode: 400,
body: "unknown action"
};
};
