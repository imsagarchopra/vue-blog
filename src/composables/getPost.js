import { projectFirestore } from '@/firebase/config'
import {ref} from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try{

        //simulate delay
        // await new Promise(resolve => {
        //   setTimeout(resolve, 2000)
        // })

        //Fetching data from db.json using the json- server
        // let data = await fetch('http://localhost:3000/posts/' + id)
        // if(!data.ok){
        //   throw Error('Post does not exist')
        // }

        // post.value = await data.json()

        //.............................................Fetching data from firebase database.............................................

        let res = await projectFirestore.collection('posts').doc(id).get()

        if(!res.exists){
          throw Error('Post does not exist')
        }

        post.value = {...res.data(), id: res.id}
      }
      catch(err){
        error.value = err.message
        console.log(error.value)
      }
    }

    return {post, error, load}
}

export default getPost