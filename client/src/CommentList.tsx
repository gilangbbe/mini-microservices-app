import { useState, useEffect } from 'react';
import axios from 'axios';

interface postId {
    postId: string;
  }

interface Comment {
    id: string;
    content: string
}

function CommentList({ postId }: postId) {
    const [comments, setComments] = useState([]);
    
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

        setComments(res.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderedComments = comments.map((comment: Comment)=> {
        return <li key={comment.id}>{comment.content}</li>
    })

    return(
        <ul>
            {renderedComments}
        </ul>
    );
};

export default CommentList;
