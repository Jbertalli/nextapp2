function catchErrors(error, displayError) {
    let errorMessage;

    if (error.response) {
        errorMessage = error.response.data;
        console.log("Error response", errorMessage)
    } else if (error.request) {
        errorMessage = error.request;
        console.log("Error request")
    } else {
        errorMessage = error.errorMessage;
        console.log("Error message", errorMessage)
    }
    displayError(ErrorMessage);
}