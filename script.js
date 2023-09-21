document.addEventListener("DOMContentLoaded", function () {
    const tags = document.querySelectorAll(".tag");
    const blogPosts = document.querySelectorAll(".blog-post");

    tags.forEach(tag => {
        tag.addEventListener("click", function (e) {
            e.preventDefault();
            const selectedTag = this.getAttribute("data-tag");

            // Show/hide blog posts based on selected tag
            blogPosts.forEach(post => {
                const postTags = post.getAttribute("data-tags").split(" ");
                if (postTags.includes(selectedTag) || selectedTag === "all") {
                    post.style.display = "block";
                } else {
                    post.style.display = "none";
                }
            });
        });
    });
});
