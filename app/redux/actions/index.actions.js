
// Define the ACTIONS contants
export const TEST_ACTION = 'TEST_ACTION';


export const testLog = (msg) => {
    return {
        type: TEST_ACTION,
        payload: msg
    }
}