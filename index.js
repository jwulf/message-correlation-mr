const {Zeebe} = require('@camunda8/sdk')

// All configuration from env vars
const zbc = new Zeebe.ZeebeGrpcClient()

async function main() {
    await zbc.deployResource({
        processFilename: './resources/message-correlation-test.bpmn'
    })
    console.log('Process model deployed.')
    startProcess()
    console.log('Publishing message')

    const msgRes = await zbc.publishMessage({
        name: 'MESSAGE_CORRELATION_TEST_CATCH',
        correlationKey: '123',
        timeToLive: 10000
    })
    console.log('Message published', msgRes)
}

async function startProcess() {
    console.log('Starting process instance')
    const res = await zbc.createProcessInstanceWithResult({
        bpmnProcessId: 'message-correlation-test',
        variables: {
            orderId: '123'
        },
        tenantId: '<default>'
    })
    console.log('Message correlated, and process completed', res)
}


main()
