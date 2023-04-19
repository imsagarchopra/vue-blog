<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList :posts="postsWithTag"/>
        </div>
        <div v-else>
            <Spinner/>
        </div>       
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import PostList from '@/components/PostList.vue'
import getPosts from '@/composables/getPosts'
import { computed } from 'vue'
import { useRoute}  from 'vue-router'

export default {
    setup() {
        const { posts, error, load } = getPosts();
        const route = useRoute();
        load();

        const postsWithTag = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag));
        });
        
        return { posts, error, postsWithTag };
    },
    components: { PostList, Spinner }
}
</script>

<style></style>