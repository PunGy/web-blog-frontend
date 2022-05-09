import { num, text, replicate } from 'https://cdn.jsdelivr.net/gh/pungy/mockaroni@v1.0.0/web-bundle/index.mjs'

export function getPosts() {
    return Promise.resolve({
        page: 1,
        pages_count: 5,
        data: replicate({
            size: 10,
            schema: (i) => ({
                title: text({ capitalized: true, size: num({ min: 1, max: 3 }) }),
                content: text({ capitalized: true, size: num({ min: 15, max: 130 }) }),
                positive: num({ min: 5, max: 120 }),
                negative: num({ min: 0, max: 40 }),
                id: i,
            })
        })
    })
}

export function getFeaturedPost() {
    return Promise.resolve({
        page: 1,
        data: replicate({
            size: 6,
            schema: (i) => ({
                title: text({ capitalized: true, size: num({ min: 1, max: 3 }) }),
                link: `/post/${i}`,
                positive: num({ min: 5, max: 120 }),
                negative: num({ min: 0, max: 40 }),
                id: i,
            })
        })
    })
}