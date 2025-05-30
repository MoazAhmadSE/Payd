import Pusher from "pusher-js";

const pusher = new Pusher("7cb2768bd0fe1aa68531",{
    cluster: 'ap1',
})

export default pusher;