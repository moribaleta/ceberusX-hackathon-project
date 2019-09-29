/**
 * class for implementing http request to the server
 */
class HttpClient {

    urlhost = ""

    ///function for implementing fetch returns a promise for response
    get(url, param) {
        return fetch(url, param)
    }

    ///function for implementing post returns a promise for repose
    post(url, param ) {
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(param),
        })
    }
}//HttpClient

var httpClient = new HttpClient()