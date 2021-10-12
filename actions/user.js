import Firebase, { db } from '../config/Firebase.js'
// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'
export const UID = 'UID'
export const UPDATE_PHONE = 'UPDATE_PHONE'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_URI = 'UPDATE_URI'
export const UPDATE_NOT = 'UPDATE_NOT'

export const updateNot = messages => {
    return {
        type: UPDATE_NOT,
        payload: messages
    }
}
export const updateUri = uri => {
    return {
        type: UPDATE_URI,
        payload: uri
    }
}
export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}
export const updateName = name => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export const updatePhone = phone => {
    return {
        type: UPDATE_PHONE,
        payload: phone
    }
}
export const updateuid = uid => {
    return {
        type: UID,
        payload: uid
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({ type: LOGIN, payload: response.user })
        } catch (e) {
            alert(e)
        }
    }
}
export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('users')
                .doc(uid)
                .get()
            dispatch({ type: LOGIN, payload: user.data() })

        } catch (e) {
            console.log(e)
        }
    }
}
export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password, name, phone } = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    name: name,
                    phone: phone
                }
               console.log("user")
                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                    fetch("https://xchangenodejsapi.herokuapp.com/register",{
                        method:"post",
                        headers:{
                          'Content-Type': 'application/json'
                        },
                        body:JSON.stringify({
                          
                            uid: response.user.uid,
                            email: email,
                            name: name,
                            phone: phone
                        })
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        Alert.alert(`${data.name} is saved successfuly`)
                    })
                    .catch(err=>{
                      Alert.alert("someting went wrong")
                  })

                dispatch({ type: SIGNUP, payload: user })
            }
        } catch (e) {
            alert(e)
        }
    }
}

