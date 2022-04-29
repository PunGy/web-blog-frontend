function getPosts() {
    return [
        {
            title: 'title 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deserunt, dolore doloremque earum eligendi esse impedit ipsam ipsum minus molestiae odio, officiis perferendis quasi qui quis quo recusandae rerum sequi ullam. Quae quibusdam, vel! Ad alias, beatae cum debitis eos, ex id inventore magnam neque porro quaerat quia veritatis!',
            positive: 10,
            negative: 3,
            id: 0
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis dicta impedit omnis quaerat temporibus?',
            positive: 20,
            negative: 16,
            id: 1
        },
        {
            title: 'Commodi consequuntur deserunt, dolore doloremque',
            content: 'odio, officiis perferendis quasi qui quis quo recusandae rerum sequi ullam. Quae quibusdam, vel! Ad alias, beatae cum debitis eos, ex id inventore magnam neque porro quaerat quia veritatis!',
            positive: 56,
            negative: 0,
            id: 2
        },
        {
            title: 'doloremque earum eligendi',
            content: 'esse impedit ipsam ipsum minus molestiae odio, officiis perferendis quasi qui quis quo recusandae rerum sequi ullam. Quae quibusdam, vel! Ad alias, beatae cum debitis eos, ex id inventore magnam neque porro quaerat quia veritatis!',
            positive: 36,
            negative: 7,
            id: 3
        },
        {
            title: 'impedit ipsam ipsum',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur deserunt, dolore doloremque earum eligendi esse impedit ipsam ipsum minus molestiae odio, officiis perferendis quasi qui quis quo recusandae rerum sequi ullam. Quae quibusdam, vel! Ad alias, beatae cum debitis eos, ex id inventore magnam neque porro quaerat quia veritatis!',
            positive: 59,
            negative: 12,
            id: 4
        }
    ]
}

const postsList = document.getElementById('posts-list')

const posts = getPosts().map((post) => {
    const blogPostElement = document.createElement('blog-post')

    blogPostElement.innerHTML = `
        <span slot="title">${post.title}</span>
        <span slot="content">${post.content}</span>
        <span slot="positive-reaction">${post.positive}</span>
        <span slot="negative-reaction">${post.negative}</span>
        <a href="/posts/${post.id}" class="button" slot="open-link">Open</a>
    `

    return blogPostElement
})

postsList.append(...posts)