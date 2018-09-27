
// Define the ACTIONS contants
export const TEST_ACTION = 'TEST_ACTION';
export const TEST_INC_COUNTER = 'TEST_INC_COUNTER';


export const testLog = (msg) => {
    return {
        type: TEST_ACTION,
        payload: msg
    }
}