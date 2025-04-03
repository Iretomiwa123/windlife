const blogPosts = [
    {
        id: 1,
        title: "10 Simple Ways to Reduce Your Environmental Footprint",
        excerpt: "Small changes in your daily habits can make a big difference for our planet. Here are ten practical tips to get started.",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
        author: "Sarah Johnson",
        date: "June 15, 2023",
        category: "Lifestyle",
        tags: ["sustainability", "eco-friendly", "tips"]
    },
    {
        id: 2,
        title: "The Importance of Biodiversity in Ecosystem Health",
        excerpt: "Biodiversity is essential for maintaining healthy ecosystems. Learn how diverse species contribute to environmental stability.",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
        author: "Michael Chen",
        date: "July 8, 2023",
        category: "Conservation",
        tags: ["biodiversity", "ecosystem", "conservation"]
    },
    {
        id: 3,
        title: "Clean Water Crisis: Challenges and Solutions",
        excerpt: "Access to clean water remains a challenge for many communities. Discover the innovative solutions being developed.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
        author: "Amara Rodriguez",
        date: "August 22, 2023",
        category: "Resources",
        tags: ["water", "sustainability", "innovation"]
    },
    {
        id: 4,
        title: "How Community Gardens Transform Urban Spaces",
        excerpt: "Community gardens provide numerous benefits in urban environments, from food production to community building.",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
        author: "David Okafor",
        date: "September 5, 2023",
        category: "Community",
        tags: ["urban", "gardens", "community"]
    },
    {
        id: 5,
        title: "Climate Change and Its Impact on Wildlife",
        excerpt: "As global temperatures rise, wildlife faces numerous challenges. Learn about the effects and conservation efforts.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        author: "Sarah Johnson",
        date: "October 12, 2023",
        category: "Conservation",
        tags: ["climate", "wildlife", "conservation"]
    },
    {
        id: 6,
        title: "Sustainable Energy: The Path Forward",
        excerpt: "Renewable energy solutions are key to a sustainable future. Explore the latest developments in the field.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
        author: "Michael Chen",
        date: "November 28, 2023",
        category: "Resources",
        tags: ["energy", "renewable", "sustainability"]
    }
];

function displayPosts(posts) {
    const featuredPost = posts[0];
    const regularPosts = posts.slice(1);
    
    // Featured Post
   /* const featuredPostElement = `
        <div class="card mb-5">
            <img src="${featuredPost.image}" alt="${featuredPost.title}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${featuredPost.title}</h5>
                <p class="card-text">${featuredPost.excerpt}</p>
                <a href="/blog/${featuredPost.id}" class="btn btn-primary">Read More</a>
            </div>
        </div>
    `;
    document.getElementById('featured-post').innerHTML = featuredPostElement;*/

    // Regular Posts
    const regularPostsElement = regularPosts.map(post => `
        <div class="col mb-4">
            <div class="card">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.excerpt}</p>
                    <a href="/blog/${post.id}" class="btn2">Read More</a>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('regular-posts').innerHTML = regularPostsElement;

    // If no posts found
    if (posts.length === 0) {
        document.getElementById('no-posts-message').style.display = 'block';
    } else {
        document.getElementById('no-posts-message').style.display = 'none';
    }
}

function filterPosts(category) {
    const filteredPosts = category === 'All' ? blogPosts : blogPosts.filter(post => post.category === category);
    displayPosts(filteredPosts);
}

// Initialize with all posts
displayPosts(blogPosts);

