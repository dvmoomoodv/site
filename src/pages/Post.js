import React from 'react';

const Post = ({match}) => {
    return (
        <div class="post">
            포스트 {match.params.id}
        </div>
    );
};

export default Post;