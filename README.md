# message-correlation-mr

A minimal reproducer for Message Correlation

* Check out the code from GitHub.
* Run `npm install`
* Set the environment variables (`.env` contains a minimal set for a local dockerised Self-Managed Multitenant Camunda 8)
* Run the app: `node index.js`

You should see output like the following: 

```
Process model deployed.
Starting process instance
Publishing message
Message published { key: '2251799814391976', tenantId: '<default>' }
Message correlated, and process completed {
  processDefinitionKey: '2251799814390638',
  bpmnProcessId: 'message-correlation-test',
  version: 2,
  processInstanceKey: '2251799814391977',
  variables: { orderId: '123' },
  tenantId: '<default>'
}
```

NOTE: You must delete any existing process instances between executions, otherwise the message will correlate with a process instance other than the one this application starts and awaits.
