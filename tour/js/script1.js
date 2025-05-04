// Blog data
const blogPosts = [
    {
      id: "1",
      title: "The Ultimate Guide to Bungee Jumping",
      content: `
        <p>Bungee jumping is an adrenaline-pumping activity that involves jumping from a tall structure while connected to a large elastic cord. The tall structure is usually a fixed object, such as a building, bridge, or crane; but it is also possible to jump from a movable object, such as a hot-air-balloon or helicopter, that has the ability to hover above the ground.</p>
        
        <p>The thrill comes from the free-falling and the rebound. When the person jumps, the cord stretches and the jumper flies upwards again as the cord recoils, and continues to oscillate up and down until all the kinetic energy is dissipated.</p>
        
        <h2>Safety First</h2>
        
        <p>Modern bungee jumping is very safe with many measures in place to ensure jumper safety:</p>
        
        <ul>
          <li>Equipment checks before each jump</li>
          <li>Backup safety systems</li>
          <li>Professional staff with extensive training</li>
          <li>Regular site inspections</li>
        </ul>
        
        <h2>Popular Bungee Destinations</h2>
        
        <p>Some of the most breathtaking locations for bungee jumping include:</p>
        
        <ol>
          <li>Queenstown, New Zealand - The birthplace of commercial bungee jumping</li>
          <li>Victoria Falls Bridge, Zimbabwe/Zambia - Jump with a view of one of the world's largest waterfalls</li>
          <li>Macau Tower, China - The world's highest commercial bungee jump at 233 meters</li>
          <li>Verzasca Dam, Switzerland - Made famous by the James Bond movie GoldenEye</li>
        </ol>
        
        <p>Whether you're a first-timer looking to conquer a fear or an adrenaline junkie seeking your next thrill, bungee jumping offers an unforgettable experience that combines fear, excitement, and an incredible sense of accomplishment.</p>
      `,
      excerpt: "Discover everything you need to know about bungee jumping, from safety considerations to the world's most spectacular jump sites.",
      author: "Sarah Thompson",
      imageUrl: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      category: "adventure",
      date: "May 4, 2025"
    },
    {
      id: "2",
      title: "Preparing for Your First Bungee Jump",
      content: `
        <p>So you've decided to take the plunge and try bungee jumping for the first time. Congratulations! You're about to experience one of life's most exhilarating activities. But before you step onto that platform, there are several things you should know and do to prepare yourself both mentally and physically.</p>
        
        <h2>Physical Preparation</h2>
        
        <p>While bungee jumping doesn't require athletic ability, being in good physical condition can enhance your experience:</p>
        
        <ul>
          <li>Get a good night's sleep before your jump</li>
          <li>Stay hydrated</li>
          <li>Avoid alcohol for at least 24 hours before jumping</li>
          <li>Eat a light meal a few hours before your jump - not too heavy, but don't jump on an empty stomach</li>
        </ul>
        
        <h2>Mental Preparation</h2>
        
        <p>The mental aspect of bungee jumping is often the biggest challenge for first-timers:</p>
        
        <ul>
          <li>Research the activity to know what to expect</li>
          <li>Watch videos of bungee jumps (but remember your experience will be unique)</li>
          <li>Practice deep breathing techniques to stay calm</li>
          <li>Focus on the excitement rather than the fear</li>
          <li>Remember that thousands of people safely bungee jump every day</li>
        </ul>
        
        <h2>What to Wear</h2>
        
        <p>Comfort is key when bungee jumping:</p>
        
        <ul>
          <li>Wear secure, comfortable clothing that allows freedom of movement</li>
          <li>Opt for athletic shoes that won't fall off (they'll be secured anyway)</li>
          <li>Remove all jewelry, empty your pockets, and secure eyeglasses if needed</li>
          <li>Dress for the weather, but remember you'll warm up quickly with the adrenaline rush</li>
        </ul>
        
        <p>Remember, the staff at any reputable bungee jumping facility are there to ensure your safety and help you have an amazing experience. Don't hesitate to ask questions or express concerns - they've heard it all before and are there to support you through this incredible adventure!</p>
      `,
      excerpt: "Essential tips and advice for first-time bungee jumpers to ensure you have the best possible experience.",
      author: "Mike Reynolds",
      imageUrl: "https://images.unsplash.com/photo-1564894687489-a5f18ea5a7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      category: "guides",
      date: "May 2, 2025"
    },
    {
      id: "3",
      title: "The History of Bungee Jumping",
      content: `
        <p>Bungee jumping as we know it today has a fascinating history that spans centuries and cultures. From ancient rituals to modern adventure sports, the concept of jumping from heights with a cord has evolved dramatically.</p>
        
        <h2>Ancient Origins: Land Diving in Vanuatu</h2>
        
        <p>The practice most similar to modern bungee jumping originated in Vanuatu, a small island nation in the South Pacific. For centuries, the men of Pentecost Island have practiced a ritual called "Nagol" or land diving. Young men would jump from wooden towers up to 30 meters high with vines tied to their ankles as a test of courage and a rite of passage.</p>
        
        <p>The ritual also has agricultural significance - it's performed as a prayer for a bountiful yam harvest, with the belief that the higher the jump and the closer the jumper's shoulders come to touching the ground, the better the harvest will be.</p>
        
        <h2>Modern Beginnings: The Dangerous Sports Club</h2>
        
        <p>The leap from ancient ritual to modern adventure sport came on April 1, 1979, when members of the Oxford University Dangerous Sports Club jumped from the 250-foot (76m) Clifton Suspension Bridge in Bristol, England. Inspired by the Vanuatu ritual they had seen in a documentary, they used rubber cords instead of vines.</p>
        
        <p>The jumpers were promptly arrested after their jump, but the seed of a new adventure sport had been planted.</p>
        
        <h2>Commercial Bungee Jumping Takes Off</h2>
        
        <p>A.J. Hackett, a New Zealander, is widely credited with popularizing commercial bungee jumping. After seeing videos of the Dangerous Sports Club jumps, he developed his own equipment and techniques. To publicize his new venture, Hackett performed an illegal jump from the Eiffel Tower in 1987, which gained worldwide media attention.</p>
        
        <p>Later that year, Hackett opened the world's first commercial bungee jumping site near Queenstown, New Zealand. From this point, the activity spread globally, with bungee sites opening across the world throughout the 1990s.</p>
        
        <h2>Evolution and Records</h2>
        
        <p>Since those early days, bungee jumping has continued to evolve with improved safety standards, equipment innovations, and increasingly spectacular jump sites. Notable world records include:</p>
        
        <ul>
          <li>Highest commercial bungee: Macau Tower at 233 meters (764 feet)</li>
          <li>Highest bungee jump ever: 321 meters (1,053 feet) from Lostock Power Station chimney by Simon Brentford</li>
          <li>Most bungee jumps in 24 hours: 151 by Mike Heard at Auckland Harbour Bridge</li>
        </ul>
        
        <p>Today, bungee jumping has expanded beyond simple jumps to include variations like tandem jumps, water touches, and even bungee swings. What began as an ancient ritual has transformed into a global adventure activity enjoyed by thrill-seekers around the world.</p>
      `,
      excerpt: "From ancient tribal rituals to modern extreme sports - explore the fascinating evolution of bungee jumping through the centuries.",
      author: "Dr. James Wilson",
      imageUrl: "https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80",
      category: "history",
      date: "April 27, 2025"
    }
  ];
  
  const comments = [
    {
      id: "1",
      postId: "1",
      name: "John Smith",
      email: "john@example.com",
      content: "Great article! I did my first bungee jump last year in New Zealand and it was life-changing.",
      date: "May 2, 2025"
    },
    {
      id: "2",
      postId: "1",
      name: "Lisa Wong",
      email: "lisa@example.com",
      content: "I'm terrified of heights but your safety section has made me reconsider trying this. Maybe one day!",
      date: "April 27, 2025"
    },
    {
      id: "3",
      postId: "2",
      name: "Mark Johnson",
      email: "mark@example.com",
      content: "The tips about what to wear are spot on. I wore jeans on my first jump and really wished I'd gone with something more flexible!",
      date: "May 4, 2025"
    }
  ];
  
  // DOM elements
  const featuredPostSection = document.getElementById('featured-post');
  const postsGrid = document.getElementById('posts-grid');
  const singlePostView = document.getElementById('single-post-view');
  const postContent = document.getElementById('post-content');
  const commentsList = document.getElementById('comments-list');
  const commentCount = document.getElementById('comment-count');
  const commentForm = document.getElementById('comment-form');
  const categoryTitle = document.getElementById('category-title');
  const currentCategory = document.getElementById('current-category');
  
  // Helper function to create a post card
  function createPostCard(post) {
    return `
      <div class="post-card">
        <div class="post-image">
          <img src="${post.imageUrl}" alt="${post.title}">
        </div>
        <div class="post-header">
          <span class="post-category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
          <h3 class="post-title"><a href="#" onclick="showPost('${post.id}')">${post.title}</a></h3>
          <div class="post-meta">
            <span>${post.author}</span>
            <span>${post.date}</span>
          </div>
        </div>
        <div class="post-content">
          <p>${post.excerpt}</p>
        </div>
        <div class="post-footer">
          <a href="#" onclick="showPost('${post.id}')" class="btn">Read More</a>
        </div>
      </div>
    `;
  }
  
  // Helper function to create a comment
  function createComment(comment) {
    const initial = comment.name.charAt(0).toUpperCase();
    return `
      <div class="comment">
        <div class="comment-avatar">${initial}</div>
        <div class="comment-content">
          <div class="comment-header">
            <span class="comment-author">${comment.name}</span>
            <span class="comment-date">${comment.date}</span>
          </div>
          <p class="comment-text">${comment.content}</p>
        </div>
      </div>
    `;
  }
  
  // Initialize the blog
  function initBlog() {
    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Set featured post (newest post)
    const featuredPost = sortedPosts[0];
    featuredPostSection.innerHTML = `
      <div class="hero-inner">
        <div class="hero-content">
          <span class="post-category">${featuredPost.category.charAt(0).toUpperCase() + featuredPost.category.slice(1)}</span>
          <h1>${featuredPost.title}</h1>
          <div class="hero-meta">
            <span>${featuredPost.author}</span>
            <span>${featuredPost.date}</span>
          </div>
          <p>${featuredPost.excerpt}</p>
          <a href="#" onclick="showPost('${featuredPost.id}')" class="btn">Read Article</a>
        </div>
        <div class="hero-image">
          <img src="${featuredPost.imageUrl}" alt="${featuredPost.title}">
        </div>
      </div>
    `;
    
    // Display remaining posts
    const remainingPosts = sortedPosts.slice(1);
    postsGrid.innerHTML = '';
    remainingPosts.forEach(post => {
      postsGrid.innerHTML += createPostCard(post);
    });
  }
  
  // Show a specific post
  function showPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    // Hide home view, show single post view
    document.querySelector('main.container').classList.add('hidden');
    singlePostView.classList.remove('hidden');
    categoryTitle.classList.add('hidden');
    
    // Populate post content
    postContent.innerHTML = `
      <div class="post-header-large">
        <span class="post-category">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
        <h1>${post.title}</h1>
        <div class="post-meta">
          <span>${post.author}</span>
          <span>${post.date}</span>
        </div>
      </div>
      <img src="${post.imageUrl}" alt="${post.title}">
      <div class="post-content-large">
        ${post.content}
      </div>
    `;
    
    // Load comments for this post
    const postComments = comments.filter(c => c.postId === postId);
    commentCount.textContent = postComments.length;
    
    commentsList.innerHTML = '';
    postComments.forEach(comment => {
      commentsList.innerHTML += createComment(comment);
    });
    
    // Set up comment form submission
    commentForm.onsubmit = function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const content = document.getElementById('comment').value;
      
      // Create a new comment object
      const newComment = {
        id: String(comments.length + 1),
        postId: postId,
        name: name,
        email: email,
        content: content,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      };
      
      // Add to comments array
      comments.push(newComment);
      
      // Update the comments display
      commentsList.innerHTML += createComment(newComment);
      commentCount.textContent = comments.filter(c => c.postId === postId).length;
      
      // Reset form
      commentForm.reset();
      
      // Show success message
      alert('Comment posted successfully!');
    };
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
  
  // Filter posts by category
  function filterByCategory(category) {
    const filteredPosts = blogPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    
    // Update category title
    currentCategory.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    
    // Hide home sections, show category title
    featuredPostSection.classList.add('hidden');
    categoryTitle.classList.remove('hidden');
    
    // Update posts grid
    postsGrid.innerHTML = '';
    filteredPosts.forEach(post => {
      postsGrid.innerHTML += createPostCard(post);
    });
    
    // Hide single post view if visible
    singlePostView.classList.add('hidden');
    document.querySelector('main.container').classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
  }
  
  // Initialize the blog on page load
  document.addEventListener('DOMContentLoaded', initBlog);