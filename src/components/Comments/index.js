import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const getNameInput = event => {
    setName(event.target.value)
  }

  const getCommentInput = event => {
    setCommentText(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newComment = {
      id: uuid(),
      name,
      commentText,
    }

    setCommentsList(preComment => [...preComment, newComment])
    setName('')
    setCommentText('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitForm}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={getNameInput}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={getCommentInput}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
