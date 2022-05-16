const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJ4rtCnm9DY51IwwY8ZGwoIr-kFWqJx3A",
    authDomain: "fir-app-dff1d.firebaseapp.com",
    projectId: "fir-app-dff1d",
    storageBucket: "fir-app-dff1d.appspot.com",
    messagingSenderId: "200782640758",
    appId: "1:200782640758:web:ace0e62f6d592d91ed5157"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
            console.log(err.code)
            console.log(err.message)
        })
}

const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user)
        })
        .catch((err) => {
            alert(err.message)
            console.log(err.code)
            console.log(err.message)
        })
}

const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
        .add({
            email: email,
            password: password
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id)
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        })
}

const readData = () => {
    db.collection('users')
        .get()
        .then((data) => {
            console.log(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }))
        })
}

const updateData = () => {
    db.collection('users').doc("SDIkfVVcvoJjQ8qNsMqW")
        .update({
            email: "updatedemail@gmail.com",
            password: '123456'
        })
        .then(() => {
            alert('Data Updated')
        })
}

const deleteData = () => {
    db.collection('users').doc("SDIkfVVcvoJjQ8qNsMqW").delete()
        .then(() => {
            alert('Data Deleted')
        })
        .catch((err) => {
            alert(err)
        })
}