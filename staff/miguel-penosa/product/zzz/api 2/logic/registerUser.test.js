import registerUser from "./logic/registerUser"

try {
    registerUser("Zana Horia", "zana@horia.com", "123123123")

    console.log("user registered")
} catch {
    console.error(error)
}