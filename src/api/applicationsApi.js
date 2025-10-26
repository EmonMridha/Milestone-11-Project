export const myApplicationsPromises = (email) => {
    return fetch(`http://localhost:3000/applications?email=${email}`).then(res => res.json()) // This type of res always gives a promise
} 