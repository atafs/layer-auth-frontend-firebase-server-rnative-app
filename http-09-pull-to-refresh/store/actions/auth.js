export const SIGNUP = 'SIGNUP';

// server firebase key
const WEB_API_KEY = 'AIzaSyAis90hvhiMLCNXO2tXXbNchKSQ2fjHFNg';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${WEB_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const resData = await response.json();
        console.log(resData);
        dispatch({ type: SIGNUP });
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${WEB_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const resData = await response.json();
        console.log(resData);
        dispatch({ type: LOGIN });
    };
};
