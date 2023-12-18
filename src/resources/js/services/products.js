export default function errorHandler(error) {
    if (error.response) {
        if (error.response.status === 422) {
            return error.response.data.errors
        }
        console.log(`Error response: `, error.response)
    } else if (error.request) {
        console.log(`Error request: `, error.request)
    } else {
        console.error(`Error:`, error)
    }
}
