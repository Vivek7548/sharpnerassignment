const posts = [];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toISOString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("Error: No posts to delete");
            }
        }, 1000);
    });
}

async function main() {
    try {
        // Create a new post
        await createPost({ title: 'Post One', body: 'This is Post One' });

        // Update last user activity time
        const lastActivityTime = await updateLastUserActivityTime();
        console.log("Last Activity Time:", lastActivityTime);

        // Print all posts and last activity time
        console.log("All Posts:", posts);
        
        // Delete the last post
        const deletedPost = await deletePost();
        console.log("Deleted Post:", deletedPost);

        // Print remaining posts
        console.log("Remaining Posts:", posts);
    } catch (error) {
        console.error(error);
    }
}

main();
